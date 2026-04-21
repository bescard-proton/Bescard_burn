import { createFileRoute } from '@tanstack/react-router'
import { walletGuard } from '@/lib/router/wallet-guard'

import { ConnectPage } from './page'

export const Route = createFileRoute('/connect/')({
  beforeLoad: () => walletGuard('/'),
  component: ConnectPage,
})
