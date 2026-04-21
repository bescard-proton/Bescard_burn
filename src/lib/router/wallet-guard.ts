import { redirect } from '@tanstack/react-router'

import useWalletStore from '@/store/useWalletStore'

type WalletRedirectTarget = '/' | '/connect'

export async function walletGuard(redirectTo: WalletRedirectTarget) {
  const wallet = useWalletStore.getState()

  if (!wallet.initialized) {
    await wallet.init()
  }

  const { isConnected } = useWalletStore.getState()
  const shouldRedirect = redirectTo === '/' ? isConnected : !isConnected

  if (shouldRedirect) {
    throw redirect({ to: redirectTo })
  }
}
