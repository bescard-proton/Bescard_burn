import { Outlet, createFileRoute } from '@tanstack/react-router'
import { walletGuard } from '@/lib/router/wallet-guard'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: () => walletGuard('/connect'),
  component: AuthenticatedLayout,
})

function AuthenticatedLayout() {
  return <Outlet />
}
