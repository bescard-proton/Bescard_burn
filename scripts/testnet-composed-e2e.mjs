import { ccc } from '@ckb-ccc/core'
import * as spore from '@ckb-ccc/spore'
import { Udt } from '@ckb-ccc/udt'

const TESTNET_EXPLORER = 'https://testnet.explorer.nervos.org/transaction'
const TESTNET_PRIVATE_KEY = process.env.TESTNET_PRIVATE_KEY
const TESTNET_E2E_KIND = (process.env.TESTNET_E2E_KIND ?? 'all').toLowerCase()

const TESTNET_CKB_LOCK_AMOUNT = 14_200_000_000n
const TESTNET_USDI_AMOUNT = 1n
const TESTNET_USDI_DECIMALS = 6
const TESTNET_USDI_TYPE_SCRIPT = {
  codeHash: '0xcc9dc33ef234e14bc788c43a4848556a5fb16401a04662fc55db9bb201987037',
  hashType: 'type',
  args: '0x71fd1985b2971a9903e4d8ed0d59e6710166985217ca0681437883837b86162f',
}
const TESTNET_USDI_TYPE_ID_SCRIPT = {
  codeHash: '0x00000000000000000000000000000000000000000000000000545950455f4944',
  hashType: 'type',
  args: '0xf0bad0541211603bf14946e09ceac920dd7ed4f862f0ffd53d0d477d6e1d0f0b',
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

function outPointKey(outPoint) {
  return `${ccc.hexFrom(outPoint.txHash)}#${ccc.numFrom(outPoint.index)}`
}

function formatCkb(shannons) {
  return `${ccc.fixedPointToString(shannons, 8)} CKB`
}

function formatUsdi(amount) {
  return `${ccc.fixedPointToString(amount, TESTNET_USDI_DECIMALS)} USDI`
}

async function collect(iterable) {
  const items = []

  for await (const item of iterable) {
    items.push(item)
  }

  return items
}

async function waitCommitted(client, txHash) {
  const receipt = await client.waitTransaction(txHash, 0, 180_000, 3_000)

  if (!receipt || receipt.status !== 'committed') {
    throw new Error(`Transaction not committed: ${ccc.hexFrom(txHash)}`)
  }

  return receipt
}

async function sumOwnedCapacity(client, lock) {
  let total = 0n

  for await (const cell of client.findCellsByLock(lock)) {
    total += BigInt(cell.cellOutput.capacity)
  }

  return total
}

async function sumOwnedUdtBalance(client, lock, typeScript) {
  let total = 0n

  for await (const cell of client.findCellsByLock(lock, typeScript, true)) {
    total += BigInt(ccc.udtBalanceFrom(cell.outputData))
  }

  return total
}

async function ownsSpore(client, lock, sporeId) {
  for await (const item of spore.findSpores({ client, lock })) {
    const currentSporeId = item.spore?.cellOutput.type?.args ?? item.cell?.cellOutput.type?.args

    if (currentSporeId && ccc.hexFrom(currentSporeId) === ccc.hexFrom(sporeId)) {
      return true
    }
  }

  return false
}

async function createSporeForCase({ client, kind, signer }) {
  const { tx, id } = await spore.createSpore({
    signer,
    data: {
      contentType: 'text/plain;charset=utf-8',
      content: ccc.bytesFrom(`bescard-testnet-${kind}-${Date.now()}`, 'utf8'),
    },
  })

  await tx.completeFeeBy(signer)
  const txHash = await signer.sendTransaction(tx)
  await waitCommitted(client, txHash)

  const sporeItem = await spore.findSpore(client, id)

  assert(sporeItem?.cell?.outPoint, `Created spore not found: ${id}`)
  assert(sporeItem.cell.cellOutput.type, `Created spore has no type script: ${id}`)

  return {
    sporeId: id,
    sporeOutPoint: sporeItem.cell.outPoint,
    sporeTxHash: txHash,
    dobTypeScriptHash: ccc.Script.from(sporeItem.cell.cellOutput.type).hash(),
  }
}

async function lockCkbToTypeBurnLock({ client, dobTypeScriptHash, signer }) {
  const typeBurnLock = await ccc.Script.fromKnownScript(
    client,
    ccc.KnownScript.TypeBurnLock,
    dobTypeScriptHash,
  )

  const tx = ccc.Transaction.from({})
  tx.addOutput({
    capacity: TESTNET_CKB_LOCK_AMOUNT,
    lock: typeBurnLock,
  })

  await tx.completeFeeBy(signer)
  const txHash = await signer.sendTransaction(tx)
  await waitCommitted(client, txHash)

  return {
    lockTxHash: txHash,
    burnOutPoint: {
      txHash,
      index: 0,
    },
  }
}

async function lockUsdiToTypeBurnLock({ client, dobTypeScriptHash, signer }) {
  const typeBurnLock = await ccc.Script.fromKnownScript(
    client,
    ccc.KnownScript.TypeBurnLock,
    dobTypeScriptHash,
  )
  const xudtInfo = await client.getKnownScript(ccc.KnownScript.XUdt)
  const xudtCode = xudtInfo.cellDeps[0]?.cellDep.outPoint

  assert(xudtCode, 'XUDT code cell dep not found on testnet config')

  const usdi = new Udt(xudtCode, TESTNET_USDI_TYPE_SCRIPT)
  const { res: transferTx } = await usdi.transfer(signer, [
    {
      amount: TESTNET_USDI_AMOUNT,
      to: typeBurnLock,
    },
  ])

  const contractCell = await client.findSingletonCellByType(
    ccc.Script.from(TESTNET_USDI_TYPE_ID_SCRIPT),
  )

  assert(contractCell, 'USDI contract cell not found on testnet')

  transferTx.addCellDeps({
    outPoint: contractCell.outPoint,
    depType: 'code',
  })

  const completedTx = await usdi.completeBy(transferTx, signer)
  await completedTx.completeFeeBy(signer)

  const txHash = await signer.sendTransaction(completedTx)
  await waitCommitted(client, txHash)

  return {
    lockTxHash: txHash,
    burnOutPoint: {
      txHash,
      index: 0,
    },
  }
}

async function getSporeReleaseInfo(client, sporeId) {
  const sporeItem = await spore.findSpore(client, sporeId)

  assert(sporeItem?.cell?.outPoint, `Spore not found: ${sporeId}`)

  const sporeType = sporeItem.spore?.cellOutput.type ?? sporeItem.cell.cellOutput.type
  assert(sporeType, `Spore has no type script: ${sporeId}`)

  const typeBurnLock = await ccc.Script.fromKnownScript(
    client,
    ccc.KnownScript.TypeBurnLock,
    ccc.Script.from(sporeType).hash(),
  )
  const burnCells = await collect(client.findCellsByLock(typeBurnLock, undefined, true))

  let burnCapacity = 0n
  let burnUdtAmount = 0n
  let hasUsdi = false

  for (const cell of burnCells) {
    burnCapacity += BigInt(cell.cellOutput.capacity)

    if (!cell.cellOutput.type) {
      continue
    }

    const typeScript = ccc.Script.from(cell.cellOutput.type)
    burnUdtAmount += BigInt(ccc.udtBalanceFrom(cell.outputData))
    hasUsdi = hasUsdi || typeScript.eq(TESTNET_USDI_TYPE_SCRIPT)
  }

  return {
    burnCapacity,
    burnCells,
    burnUdtAmount,
    hasUsdi,
    sporeOutPoint: sporeItem.cell.outPoint,
    typeBurnLock,
  }
}

async function addUsdiCellDep(client, tx) {
  const contractCell = await client.findSingletonCellByType(
    ccc.Script.from(TESTNET_USDI_TYPE_ID_SCRIPT),
  )

  assert(contractCell, 'USDI contract cell not found on testnet')

  tx.addCellDeps({
    outPoint: contractCell.outPoint,
    depType: 'code',
  })

  return contractCell.outPoint
}

async function meltSporeLikeApp({ client, signer, sporeId }) {
  const releaseInfo = await getSporeReleaseInfo(client, sporeId)
  const { tx } = await spore.meltSpore({
    signer,
    id: sporeId,
  })

  if (releaseInfo.burnCells.length > 0) {
    for (const cell of releaseInfo.burnCells) {
      tx.addInput(cell)
    }

    await tx.addCellDepsOfKnownScripts(client, ccc.KnownScript.TypeBurnLock)

    if (releaseInfo.burnUdtAmount > 0n) {
      const { script: ownerLock } = await signer.getRecommendedAddressObj()

      await tx.addCellDepsOfKnownScripts(client, ccc.KnownScript.XUdt)
      const usdiContractOutPoint = releaseInfo.hasUsdi
        ? await addUsdiCellDep(client, tx)
        : null

      tx.addOutput(
        {
          lock: ownerLock,
          type: TESTNET_USDI_TYPE_SCRIPT,
        },
        ccc.numLeToBytes(releaseInfo.burnUdtAmount, 16),
      )

      await tx.completeFeeBy(signer)
      const txHash = await signer.sendTransaction(tx)
      const receipt = await waitCommitted(client, txHash)

      return {
        receipt,
        releaseInfo,
        txHash,
        usdiContractOutPoint,
      }
    }
  }

  await tx.completeFeeBy(signer)
  const txHash = await signer.sendTransaction(tx)
  const receipt = await waitCommitted(client, txHash)

  return {
    receipt,
    releaseInfo,
    txHash,
    usdiContractOutPoint: null,
  }
}

function hasOutPoint(entries, outPoint) {
  const target = outPointKey(outPoint)

  return entries.some((entry) => outPointKey(entry.outPoint ?? entry.previousOutput) === target)
}

async function validateMeltTx({
  client,
  ownerLock,
  txHash,
  releaseInfo,
  kind,
  usdiContractOutPoint,
}) {
  const txResponse = await client.getTransaction(txHash)

  assert(txResponse, `Unable to fetch melt transaction: ${txHash}`)
  assert(txResponse.status === 'committed', `Melt transaction is not committed: ${txHash}`)
  assert(
    hasOutPoint(txResponse.transaction.inputs, releaseInfo.sporeOutPoint),
    'Melt transaction is missing the spore input',
  )

  for (const burnCell of releaseInfo.burnCells) {
    assert(
      hasOutPoint(txResponse.transaction.inputs, burnCell.outPoint),
      `Melt transaction is missing burn cell input ${outPointKey(burnCell.outPoint)}`,
    )
  }

  const typeBurnLockInfo = await client.getKnownScript(ccc.KnownScript.TypeBurnLock)
  const typeBurnLockDep = typeBurnLockInfo.cellDeps[0]?.cellDep.outPoint
  assert(typeBurnLockDep, 'TypeBurnLock cell dep not found in client config')
  assert(
    hasOutPoint(txResponse.transaction.cellDeps, typeBurnLockDep),
    'Melt transaction is missing the TypeBurnLock cell dep',
  )

  if (kind === 'usdi') {
    const xudtInfo = await client.getKnownScript(ccc.KnownScript.XUdt)
    const xudtDep = xudtInfo.cellDeps[0]?.cellDep.outPoint

    assert(xudtDep, 'XUDT cell dep not found in client config')
    assert(
      hasOutPoint(txResponse.transaction.cellDeps, xudtDep),
      'Melt transaction is missing the XUDT cell dep',
    )
    assert(usdiContractOutPoint, 'USDI contract cell dep should exist for USDI melt')
    assert(
      hasOutPoint(txResponse.transaction.cellDeps, usdiContractOutPoint),
      'Melt transaction is missing the USDI contract cell dep',
    )

    const usdiOutputIndex = txResponse.transaction.outputs.findIndex((output, index) => {
      if (!output.type) {
        return false
      }

      const outputType = ccc.Script.from(output.type)
      return output.lock.eq(ownerLock) && outputType.eq(TESTNET_USDI_TYPE_SCRIPT)
    })

    assert(usdiOutputIndex >= 0, 'Melt transaction is missing the owner USDI output')

    const usdiOutputAmount = BigInt(
      ccc.udtBalanceFrom(txResponse.transaction.outputsData[usdiOutputIndex]),
    )

    assert(
      usdiOutputAmount === releaseInfo.burnUdtAmount,
      `Unexpected USDI output amount: expected ${releaseInfo.burnUdtAmount}, got ${usdiOutputAmount}`,
    )
  }

  return txResponse
}

async function runCase({ client, kind, signer }) {
  const ownerAddress = await signer.getRecommendedAddress()
  const ownerAddressObj = await signer.getRecommendedAddressObj()

  console.log(`\n[${kind.toUpperCase()}] Owner: ${ownerAddress}`)

  const created = await createSporeForCase({ client, kind, signer })
  console.log(`[${kind.toUpperCase()}] Spore tx: ${TESTNET_EXPLORER}/${created.sporeTxHash}`)

  const locked =
    kind === 'ckb'
      ? await lockCkbToTypeBurnLock({
          client,
          dobTypeScriptHash: created.dobTypeScriptHash,
          signer,
        })
      : await lockUsdiToTypeBurnLock({
          client,
          dobTypeScriptHash: created.dobTypeScriptHash,
          signer,
        })

  console.log(`[${kind.toUpperCase()}] Burn lock tx: ${TESTNET_EXPLORER}/${locked.lockTxHash}`)

  assert(
    await ownsSpore(client, ownerAddressObj.script, created.sporeId),
    `[${kind.toUpperCase()}] Created spore is not owned by the signer address`,
  )

  const releaseInfo = await getSporeReleaseInfo(client, created.sporeId)

  assert(
    releaseInfo.burnCells.length > 0,
    `[${kind.toUpperCase()}] No TypeBurnLock assets found for the created spore`,
  )

  const preCapacity = await sumOwnedCapacity(client, ownerAddressObj.script)
  const preUsdiBalance =
    kind === 'usdi'
      ? await sumOwnedUdtBalance(client, ownerAddressObj.script, TESTNET_USDI_TYPE_SCRIPT)
      : 0n

  const meltResult = await meltSporeLikeApp({
    client,
    signer,
    sporeId: created.sporeId,
  })
  const meltTxResponse = await validateMeltTx({
    client,
    ownerLock: ownerAddressObj.script,
    txHash: meltResult.txHash,
    releaseInfo: meltResult.releaseInfo,
    kind,
    usdiContractOutPoint: meltResult.usdiContractOutPoint,
  })

  const fee = await meltTxResponse.transaction.getFee(client)
  const postCapacity = await sumOwnedCapacity(client, ownerAddressObj.script)
  const postUsdiBalance =
    kind === 'usdi'
      ? await sumOwnedUdtBalance(client, ownerAddressObj.script, TESTNET_USDI_TYPE_SCRIPT)
      : 0n

  const actualCapacityDelta = postCapacity - preCapacity
  const expectedCapacityDelta = meltResult.releaseInfo.burnCapacity - fee

  assert(
    actualCapacityDelta === expectedCapacityDelta,
    `[${kind.toUpperCase()}] Unexpected CKB delta: expected ${expectedCapacityDelta}, got ${actualCapacityDelta}`,
  )

  if (kind === 'usdi') {
    const actualUsdiDelta = postUsdiBalance - preUsdiBalance

    assert(
      actualUsdiDelta === meltResult.releaseInfo.burnUdtAmount,
      `[${kind.toUpperCase()}] Unexpected USDI delta: expected ${meltResult.releaseInfo.burnUdtAmount}, got ${actualUsdiDelta}`,
    )
  }

  const meltedSpore = await spore.findSpore(client, created.sporeId)
  assert(!meltedSpore, `[${kind.toUpperCase()}] Spore still exists after melt`)

  const remainingBurnCells = await collect(
    client.findCellsByLock(meltResult.releaseInfo.typeBurnLock, undefined, true),
  )
  assert(
    remainingBurnCells.length === 0,
    `[${kind.toUpperCase()}] TypeBurnLock cells still exist after melt`,
  )

  console.log(`[${kind.toUpperCase()}] Melt tx: ${TESTNET_EXPLORER}/${meltResult.txHash}`)
  console.log(`[${kind.toUpperCase()}] Fee: ${formatCkb(fee)}`)
  console.log(`[${kind.toUpperCase()}] Burn capacity released to owner: ${formatCkb(meltResult.releaseInfo.burnCapacity)}`)
  console.log(`[${kind.toUpperCase()}] Owner CKB delta after melt: ${formatCkb(actualCapacityDelta)}`)

  if (kind === 'usdi') {
    console.log(`[${kind.toUpperCase()}] Owner USDI delta after melt: ${formatUsdi(postUsdiBalance - preUsdiBalance)}`)
  }
}

async function main() {
  assert(TESTNET_PRIVATE_KEY, 'Set TESTNET_PRIVATE_KEY before running this script')
  assert(
    TESTNET_E2E_KIND === 'all' || TESTNET_E2E_KIND === 'ckb' || TESTNET_E2E_KIND === 'usdi',
    'TESTNET_E2E_KIND must be one of: all, ckb, usdi',
  )

  const client = new ccc.ClientPublicTestnet()
  const signer = new ccc.SignerCkbPrivateKey(client, TESTNET_PRIVATE_KEY)
  const kinds = TESTNET_E2E_KIND === 'all' ? ['ckb', 'usdi'] : [TESTNET_E2E_KIND]

  for (const kind of kinds) {
    await runCase({
      client,
      kind,
      signer,
    })
  }

  console.log('\nAll requested testnet melt checks passed.')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
