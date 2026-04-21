import { ccc } from '@ckb-ccc/core'

import { IS_TESTNET } from '@/constant/Network'

export const CKB_EXPLORER = IS_TESTNET
  ? 'https://testnet.explorer.nervos.org'
  : 'https://explorer.nervos.org'

export const CKB_NETWORK_CLIENT = IS_TESTNET
  ? new ccc.ClientPublicTestnet()
  : new ccc.ClientPublicMainnet()

export const BURN_LOCK_USDI_CAPACITY = 154
