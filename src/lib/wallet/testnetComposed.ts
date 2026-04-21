import { ccc } from '@ckb-ccc/core'
import * as spore from '@ckb-ccc/spore'
import { Udt } from '@ckb-ccc/udt'

import USDI from '@/constant/CKB/XUDT_Tokens/USDI'
import { IS_TESTNET } from '@/constant/Network'

export const TESTNET_CKB_LOCK_AMOUNT = 14_200_000_000n
export const TESTNET_USDI_AMOUNT_PER_SPORE = 1n
export const TESTNET_CKB_LOCK_AMOUNT_LABEL = '142 CKB'
export const TESTNET_USDI_AMOUNT_LABEL = '1 USDI'

export type TestnetComposedKind = 'ckb' | 'usdi'

export type CreatedTestnetComposedAsset = {
  assetLabel: string
  dobTypeScriptHash: ccc.Hex
  kind: TestnetComposedKind
  lockIndex: number
  lockTxHash: ccc.Hex
  sporeId: ccc.Hex
  sporeTxHash: ccc.Hex
}

type ProgressReporter = (message: string) => void

async function waitCommitted(client: ccc.Client, txHash: ccc.HexLike) {
  const tx = await client.waitTransaction(txHash, 0, 180_000, 3_000)
  if (!tx || tx.status !== 'committed') {
    throw new Error(`Transaction not committed: ${ccc.hexFrom(txHash)}`)
  }
}

async function addUsdiCellDep(signer: ccc.Signer, tx: ccc.Transaction) {
  const contractCell = await signer.client.findSingletonCellByType(
    ccc.Script.from(USDI.typeid),
  )

  if (!contractCell) {
    throw new Error('Testnet USDI contract cell not found')
  }

  tx.addCellDeps({
    outPoint: contractCell.outPoint,
    depType: 'code',
  })
}

async function createDobSpore(params: {
  kind: TestnetComposedKind
  onProgress?: ProgressReporter
  signer: ccc.Signer
}): Promise<{
  dobTypeScriptHash: ccc.Hex
  sporeId: ccc.Hex
  sporeTxHash: ccc.Hex
}> {
  const { kind, onProgress, signer } = params

  onProgress?.(`Creating ${kind.toUpperCase()} test spore...`)

  const { tx, id } = await spore.createSpore({
    signer,
    data: {
      contentType: 'text/plain;charset=utf-8',
      content: ccc.bytesFrom(`bescard-${kind}-tool-${Date.now()}`, 'utf8'),
    },
  })

  await tx.completeFeeBy(signer)
  const sporeTxHash = await signer.sendTransaction(tx)

  onProgress?.('Spore transaction sent. Waiting for confirmation...')
  await waitCommitted(signer.client, sporeTxHash)

  const found = await spore.findSpore(signer.client, id)
  if (!found?.cell.cellOutput.type) {
    throw new Error(`Created spore not found: ${id}`)
  }

  return {
    dobTypeScriptHash: ccc.Script.from(found.cell.cellOutput.type).hash(),
    sporeId: id,
    sporeTxHash,
  }
}

async function transferCkbToTypeBurnLock(params: {
  dobTypeScriptHash: ccc.HexLike
  onProgress?: ProgressReporter
  signer: ccc.Signer
}): Promise<{
  index: number
  txHash: ccc.Hex
}> {
  const { dobTypeScriptHash, onProgress, signer } = params

  onProgress?.(`Locking ${TESTNET_CKB_LOCK_AMOUNT_LABEL} into TypeBurnLock...`)

  const typeBurnLock = await ccc.Script.fromKnownScript(
    signer.client,
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

  onProgress?.('CKB lock transaction sent. Waiting for confirmation...')
  await waitCommitted(signer.client, txHash)

  return {
    index: 0,
    txHash,
  }
}

async function transferUsdiToTypeBurnLock(params: {
  dobTypeScriptHash: ccc.HexLike
  onProgress?: ProgressReporter
  signer: ccc.Signer
}): Promise<{
  index: number
  txHash: ccc.Hex
}> {
  const { dobTypeScriptHash, onProgress, signer } = params

  onProgress?.(`Locking ${TESTNET_USDI_AMOUNT_LABEL} into TypeBurnLock...`)

  const typeBurnLock = await ccc.Script.fromKnownScript(
    signer.client,
    ccc.KnownScript.TypeBurnLock,
    dobTypeScriptHash,
  )

  const xudtInfo = await signer.client.getKnownScript(ccc.KnownScript.XUdt)
  const xudtCode = xudtInfo.cellDeps[0]?.cellDep.outPoint
  if (!xudtCode) {
    throw new Error('Testnet XUDT script config is missing')
  }

  const usdi = new Udt(xudtCode, USDI.typescript)
  const { res: transferTx } = await usdi.transfer(signer, [
    {
      amount: TESTNET_USDI_AMOUNT_PER_SPORE,
      to: typeBurnLock,
    },
  ])

  await addUsdiCellDep(signer, transferTx)

  const completedTx = await usdi.completeBy(transferTx, signer)
  await completedTx.completeFeeBy(signer)

  const txHash = await signer.sendTransaction(completedTx)

  onProgress?.('USDI lock transaction sent. Waiting for confirmation...')
  await waitCommitted(signer.client, txHash)

  return {
    index: 0,
    txHash,
  }
}

export async function createTestnetComposedAsset(params: {
  kind: TestnetComposedKind
  onProgress?: ProgressReporter
  signer: ccc.Signer
}): Promise<CreatedTestnetComposedAsset> {
  const { kind, onProgress, signer } = params

  if (!IS_TESTNET) {
    throw new Error('This tool only supports testnet.')
  }

  const created = await createDobSpore({
    kind,
    onProgress,
    signer,
  })

  const locked =
    kind === 'ckb'
      ? await transferCkbToTypeBurnLock({
          dobTypeScriptHash: created.dobTypeScriptHash,
          onProgress,
          signer,
        })
      : await transferUsdiToTypeBurnLock({
          dobTypeScriptHash: created.dobTypeScriptHash,
          onProgress,
          signer,
        })

  onProgress?.('Composed asset created. Query the wallet to verify it under Other DOB.')

  return {
    assetLabel: kind === 'ckb' ? TESTNET_CKB_LOCK_AMOUNT_LABEL : TESTNET_USDI_AMOUNT_LABEL,
    dobTypeScriptHash: created.dobTypeScriptHash,
    kind,
    lockIndex: locked.index,
    lockTxHash: locked.txHash,
    sporeId: created.sporeId,
    sporeTxHash: created.sporeTxHash,
  }
}
