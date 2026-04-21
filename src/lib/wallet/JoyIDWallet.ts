import { ccc, type Cell } from '@ckb-ccc/core'
import { JoyId } from '@ckb-ccc/joy-id'
import { spore } from '@ckb-ccc/spore'

import { APP_NAME, LOGO } from '@/constant/APP'
import { CKB_NETWORK_CLIENT } from '@/constant/CKB'
import USDI from '@/constant/CKB/XUDT_Tokens/USDI'
import { IS_TESTNET } from '@/constant/Network'

const JOYID_APP_URL = IS_TESTNET
  ? 'https://testnet.joyid.dev'
  : 'https://app.joy.id'

export type SporeReleaseAsset = {
  amountText: string
  key: string
  symbol: string
}

export type SporeReleaseAssets = {
  assets: SporeReleaseAsset[]
  releaseCkb: string | null
}

type MeltSporeOptions = {
  onStatusChange?: (status: string) => void
}

export class JoyIDWallet {
  private signer = new JoyId.CkbSigner(
    CKB_NETWORK_CLIENT,
    APP_NAME,
    LOGO,
    JOYID_APP_URL,
  )

  async getAccount(): Promise<string> {
    const accounts = await this.signer.getAddresses()

    if (accounts[0]) {
      return accounts[0]
    }

    return this.signer.getInternalAddress()
  }

  async connect() {
    return this.signer.connect()
  }

  async disconnect() {
    return this.signer.disconnect()
  }

  getSigner() {
    return this.signer
  }

  async isConnected() {
    return this.signer.isConnected()
  }

  async getAddressOccupiedSize(address: string) {
    const ckbAddressObj = await ccc.Address.fromString(address, this.signer.client)
    return ckbAddressObj.script.occupiedSize
  }

  async getSpores() {
    const addressObj = await this.signer.getAddressObj()
    return spore.findSpores({
      client: this.signer.client,
      lock: addressObj.script
    })
  }

  async getTypeBurnLockCellByArgs(args: ccc.HexLike) {
    return this.signer.client.findCellsByLock(
      await ccc.Script.fromKnownScript(
        this.signer.client,
        ccc.KnownScript.TypeBurnLock,
        args
      )
    )
  }

  private async collectAsync<T>(iterable: AsyncIterable<T>) {
    const items: T[] = []

    for await (const item of iterable) {
      items.push(item)
    }

    return items
  }

  private formatReleaseCkbAmount(shannonsText: string) {
    const value = ccc.fixedPointToString(BigInt(shannonsText))
    const [integer, decimal = ''] = value.split('.')
    return `${integer}.${decimal.padEnd(2, '0').slice(0, 2)}`
  }

  private formatFixedPointAmount(value: bigint, decimals: number, minFractionDigits = 2) {
    const text = ccc.fixedPointToString(value, decimals)
    const [integer, decimal = ''] = text.split('.')

    if (decimals === 0) {
      return integer
    }

    const trimmedDecimal = decimal.replace(/0+$/, '')
    const normalizedDecimal = trimmedDecimal
      ? trimmedDecimal.padEnd(Math.max(minFractionDigits, trimmedDecimal.length), '0')
      : '0'.repeat(minFractionDigits)

    return `${integer}.${normalizedDecimal}`
  }

  private isUsdiScript(typeScript: ccc.Script) {
    return typeScript.eq(USDI.typescript) || typeScript.hash() === USDI.typescriptHash
  }

  private buildReleaseAssets(cells: Cell[]): SporeReleaseAsset[] {
    let releasedCkb = 0n
    const releasedTypedAssets = new Map<
      string,
      {
        amount: bigint
        symbol: string
      }
    >()

    cells.forEach((cell) => {
      if (!cell.cellOutput.type) {
        releasedCkb += BigInt(cell.cellOutput.capacity)
        return
      }

      const typeScript = ccc.Script.from(cell.cellOutput.type)
      const key = typeScript.hash()
      const amount = BigInt(ccc.udtBalanceFrom(cell.outputData))
      const symbol = this.isUsdiScript(typeScript) ? 'USDI' : 'xUDT'
      const current = releasedTypedAssets.get(key)

      if (current) {
        current.amount += amount
        return
      }

      releasedTypedAssets.set(key, {
        amount,
        symbol,
      })
    })

    const assets: SporeReleaseAsset[] = []

    if (releasedCkb > 0n) {
      assets.push({
        amountText: this.formatFixedPointAmount(releasedCkb, 8, 2),
        key: 'ckb',
        symbol: 'CKB',
      })
    }

    releasedTypedAssets.forEach((asset, key) => {
      assets.push({
        amountText: this.formatFixedPointAmount(asset.amount, asset.symbol === 'USDI' ? USDI.decimals : 0, 2),
        key,
        symbol: asset.symbol,
      })
    })

    return assets
  }

  private async getSporeReleaseInfo(sporeId: ccc.HexLike) {
    const sporeItem = await spore.findSpore(this.signer.client, sporeId)

    if (!sporeItem) {
      throw new Error('Spore not found')
    }

    const sporeType = sporeItem.spore?.cellOutput.type ?? sporeItem.cell?.cellOutput.type
    const releaseCkb = sporeItem.cell?.cellOutput.capacity
      ? this.formatReleaseCkbAmount(sporeItem.cell.cellOutput.capacity.toString())
      : null

    if (!sporeType) {
      return {
        burnCells: [],
        releaseCkb,
      }
    }

    const typeBurnLockArgs = ccc.Script.from(sporeType).hash()
    return {
      burnCells: await this.collectAsync(await this.getTypeBurnLockCellByArgs(typeBurnLockArgs)),
      releaseCkb,
    }
  }

  async querySporeReleaseAssets(sporeId: ccc.HexLike): Promise<SporeReleaseAssets> {
    const { burnCells, releaseCkb } = await this.getSporeReleaseInfo(sporeId)

    return {
      assets: this.buildReleaseAssets(burnCells),
      releaseCkb,
    }
  }

  private async addUsdiCellDep(tx: ccc.Transaction) {
    const contractCell = await this.signer.client.findSingletonCellByType(
      ccc.Script.from(USDI.typeid),
    )

    if (!contractCell) {
      throw new Error('USDI contract cell not found')
    }

    tx.addCellDeps({
      outPoint: contractCell.outPoint,
      depType: 'code',
    })
  }

  private async attachTypeBurnLockAssetsToTx(tx: ccc.Transaction, burnCells: Cell[]) {
    if (burnCells.length === 0) {
      return
    }

    burnCells.forEach((cell) => {
      tx.addInput(cell)
    })

    await tx.addCellDepsOfKnownScripts(this.signer.client, ccc.KnownScript.TypeBurnLock)

    const typedAssets = new Map<string, { amount: bigint; script: ccc.Script }>()
    let hasUsdi = false

    burnCells.forEach((cell) => {
      if (!cell.cellOutput.type) {
        return
      }

      const typeScript = ccc.Script.from(cell.cellOutput.type)
      const key = typeScript.hash()
      const amount = BigInt(ccc.udtBalanceFrom(cell.outputData))
      const current = typedAssets.get(key)

      if (this.isUsdiScript(typeScript)) {
        hasUsdi = true
      }

      if (current) {
        current.amount += amount
        return
      }

      typedAssets.set(key, {
        amount,
        script: typeScript,
      })
    })

    if (typedAssets.size === 0) {
      return
    }

    const { script: releaseLock } = await this.signer.getRecommendedAddressObj()
    await tx.addCellDepsOfKnownScripts(this.signer.client, ccc.KnownScript.XUdt)

    if (hasUsdi) {
      await this.addUsdiCellDep(tx)
    }

    typedAssets.forEach((asset) => {
      tx.addOutput(
        {
          lock: releaseLock,
          type: asset.script,
        },
        ccc.numLeToBytes(asset.amount, 16),
      )
    })
  }

  async meltSpore(sporeId: string, options?: MeltSporeOptions) {
    options?.onStatusChange?.('Preparing melt transaction...')
    const { burnCells } = await this.getSporeReleaseInfo(sporeId)
    const { tx } = await spore.meltSpore({
      signer: this.signer,
      id: sporeId,
    })

    await this.attachTypeBurnLockAssetsToTx(tx, burnCells)
    await tx.completeFeeBy(this.signer)

    options?.onStatusChange?.('Waiting for signature...')
    const sendTransaction = this.signer.sendTransaction(tx)
    options?.onStatusChange?.('Sending transaction...')
    const txHash = await sendTransaction
    options?.onStatusChange?.('Confirming transaction...')
    const receipt = await this.signer.client.waitTransaction(txHash, 0, 180_000, 3_000)

    if (!receipt || receipt.status !== 'committed') {
      throw new Error('Melt transaction was not confirmed. Please verify it on-chain later.')
    }

    return {
      receipt,
      txHash,
    }
  }

}

const joyIdWallet = new JoyIDWallet()

export default joyIdWallet
