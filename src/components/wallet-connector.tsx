import { Button, Dropdown } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'

import { publicAsset } from '@/constant/APP'
import useWalletStore from '@/store/useWalletStore'

function formatConnectorAddress(address: string) {
  if (address.length <= 12) {
    return address
  }

  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function WalletConnector({
  className,
  onHoverChange,
}: {
  className?: string
  onHoverChange?: (isHovered: boolean) => void
}) {
  const account = useWalletStore((state) => state.account)
  const connect = useWalletStore((state) => state.connect)
  const disconnect = useWalletStore((state) => state.disconnect)
  const isConnected = useWalletStore((state) => state.isConnected)
  const status = useWalletStore((state) => state.status)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isBusy = status === 'checking' || status === 'connecting'
  const navigate = useNavigate()

  useEffect(() => {
    if (!isConnected) {
      setIsMenuOpen(false)
    }
  }, [isConnected])

  const rootClassName = ['relative inline-flex items-center justify-end', className]
    .filter(Boolean)
    .join(' ')
  const buttonClassName = [
    '!inline-flex !items-center !rounded-full !border-[#1A1A1A] !px-6',
    '!shadow-none transition duration-150 hover:-translate-y-px',
    '[&_.ant-btn-icon]:!me-[10px]',
  ].join(' ')

  if (!isConnected || !account) {
    return (
      <div className={rootClassName}>
        <Button
          className={buttonClassName}
          disabled={isBusy}
          shape="round"
          size="large"
          type="default"
          style={{ fontFamily: '"PingFang SC", var(--font-sans)' }}
          onBlur={() => {
            onHoverChange?.(false)
          }}
          onClick={async () => {
            await connect()

            if (useWalletStore.getState().isConnected) {
              await navigate({ replace: true, to: '/' })
            }
          }}
          onMouseEnter={() => {
            onHoverChange?.(true)
          }}
          onMouseLeave={() => {
            onHoverChange?.(false)
          }}
        >
          Connect JoyID
        </Button>
      </div>
    )
  }

  return (
    <div className={rootClassName}>
      <Dropdown
        destroyOnHidden
        open={isMenuOpen}
        placement="bottomRight"
        trigger={['click']}
        classNames={{
          item: [
            'group !m-0 !flex !h-[54px] !items-center !gap-1 !rounded-none !px-5 !py-[15px]',
            '!text-[#1A1A1A] transition-colors duration-150 hover:!bg-[#1A1A1A] hover:!text-white',
          ].join(' '),
          itemIcon: '!me-1 !min-w-4',
          itemTitle: '!text-[14px] !font-medium !leading-5',
        }}
        menu={{
          items: [
            {
              key: 'disconnect',
              icon: (
                <img
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 transition duration-150 group-hover:invert"
                  src={publicAsset('assets/wallet-connector/disconnect-link.svg')}
                />
              ),
              label: <span style={{ fontFamily: 'Inter, var(--font-sans)' }}>Disconnect Wallet</span>,
            },
          ],
          onClick: async () => {
            setIsMenuOpen(false)
            await disconnect()

            if (!useWalletStore.getState().isConnected) {
              await navigate({ replace: true, to: '/connect' })
            }
          },
        }}
        onOpenChange={(open) => {
          setIsMenuOpen(open)
        }}
        overlayClassName={[
          'pt-[10px]',
          '[&_.ant-dropdown-menu]:!w-[264px]',
          '[&_.ant-dropdown-menu]:!overflow-hidden',
          '[&_.ant-dropdown-menu]:!rounded-[8px]',
          '[&_.ant-dropdown-menu]:!border-[8px]',
          '[&_.ant-dropdown-menu]:!border-solid',
          '[&_.ant-dropdown-menu]:!border-[#1A1A1A]',
          '[&_.ant-dropdown-menu]:!bg-white',
          '[&_.ant-dropdown-menu]:!p-0',
          '[&_.ant-dropdown-menu]:!shadow-none',
        ].join(' ')}
      >
        <Button
          aria-expanded={isMenuOpen}
          aria-haspopup="menu"
          className={buttonClassName}
          icon={
            <img
              alt=""
              aria-hidden="true"
              className="h-4 w-4 shrink-0 object-contain"
              src={publicAsset('assets/wallet/joyid.svg')}
            />
          }
          shape="round"
          size="large"
          type="default"
          style={{ fontFamily: '"PingFang SC", var(--font-sans)' }}
        >
          <span className="inline-flex items-center gap-2 whitespace-nowrap text-[14px] font-normal leading-[22px]">
            <span>{formatConnectorAddress(account)}</span>
          </span>
        </Button>
      </Dropdown>
    </div>
  )
}
