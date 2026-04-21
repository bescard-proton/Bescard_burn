import { NETWORK, type NETWORK_ENUM } from '@/constant/Network'

export type CkbNetwork = NETWORK_ENUM

export type WalletStatus =
  | 'checking'
  | 'disconnected'
  | 'connecting'
  | 'connected'
  | 'error'

export function getConfiguredCkbNetwork(): CkbNetwork {
  return NETWORK
}

export function getNetworkLabel(network: CkbNetwork) {
  return network === 'mainnet' ? 'CKB mainnet' : 'CKB testnet'
}

export function getWalletStatusLabel(status: WalletStatus) {
  switch (status) {
    case 'checking':
      return 'Checking session'
    case 'connecting':
      return 'Connecting'
    case 'connected':
      return 'Connected'
    case 'error':
      return 'Connection failed'
    default:
      return 'Not connected'
  }
}

export function formatAddress(address: string) {
  if (address.length <= 20) {
    return address
  }

  return `${address.slice(0, 12)}...${address.slice(-8)}`
}

export function formatWalletError(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message
  }

  return 'JoyID connection failed. Please retry in a standard browser.'
}
