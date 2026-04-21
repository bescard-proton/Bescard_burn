export type NETWORK_ENUM = 'testnet' | 'mainnet'

export const NETWORK: NETWORK_ENUM =
  import.meta.env.VITE_CKB_NETWORK === 'mainnet' ? 'mainnet' : 'testnet'

export const IS_TESTNET = NETWORK === 'testnet'

export const IS_MAINNET = NETWORK === 'mainnet'

export function withNetwork<T>(config: Record<NETWORK_ENUM, T>) {
  return config[NETWORK]
}
