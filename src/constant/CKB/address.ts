import { ccc } from '@ckb-ccc/core'

import { CKB_NETWORK_CLIENT } from '@/constant/CKB'
import { IS_TESTNET } from '@/constant/Network'

const PREFIX = IS_TESTNET ? 'ckt' : 'ckb'

export async function verifyCkbAddress(address: unknown) {
  if (typeof address !== 'string') {
    return false
  }

  try {
    const parsed = await ccc.Address.fromString(address, CKB_NETWORK_CLIENT)
    return parsed.prefix === PREFIX
  } catch {
    return false
  }
}
