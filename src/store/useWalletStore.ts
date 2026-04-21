import { create } from 'zustand'

import joyIdWallet from '@/lib/wallet/JoyIDWallet'
import { formatWalletError, type WalletStatus } from '@/lib/wallet/utils'

type WalletStore = {
  account: string | undefined
  connect: () => Promise<void>
  disconnect: () => Promise<void>
  errorMessage: string | null
  init: () => Promise<void>
  initialized: boolean
  isConnected: boolean
  status: WalletStatus
}

const useWalletStore = create<WalletStore>((set) => ({
  account: undefined,
  errorMessage: null,
  initialized: false,
  isConnected: false,
  status: 'checking',

  async init() {
    try {
      const isConnected = await joyIdWallet.isConnected()
      const account = isConnected ? await joyIdWallet.getAccount() : undefined

      set({
        account,
        errorMessage: null,
        initialized: true,
        isConnected,
        status: isConnected ? 'connected' : 'disconnected',
      })
    } catch (error) {
      set({
        account: undefined,
        errorMessage: formatWalletError(error),
        initialized: true,
        isConnected: false,
        status: 'error',
      })
    }
  },

  async connect() {
    set({
      account: undefined,
      errorMessage: null,
      initialized: true,
      isConnected: false,
      status: 'connecting',
    })

    try {
      await joyIdWallet.connect()
      const account = await joyIdWallet.getAccount()

      set({
        account,
        errorMessage: null,
        initialized: true,
        isConnected: true,
        status: 'connected',
      })
    } catch (error) {
      set({
        account: undefined,
        errorMessage: formatWalletError(error),
        initialized: true,
        isConnected: false,
        status: 'error',
      })
    }
  },

  async disconnect() {
    try {
      const isConnected = await joyIdWallet.isConnected()

      if (isConnected) {
        await joyIdWallet.disconnect()
      }

      set({
        account: undefined,
        errorMessage: null,
        initialized: true,
        isConnected: false,
        status: 'disconnected',
      })
    } catch (error) {
      set({
        account: undefined,
        errorMessage: formatWalletError(error),
        initialized: true,
        isConnected: false,
        status: 'error',
      })
    }
  },
}))

useWalletStore.getState().init()

export default useWalletStore
