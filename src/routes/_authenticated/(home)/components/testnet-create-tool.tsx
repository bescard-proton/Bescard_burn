import { useState } from 'react'

import { Button, FloatButton, Modal } from 'antd'

import { IS_TESTNET } from '@/constant/Network'
import joyIdWallet from '@/lib/wallet/JoyIDWallet'
import {
  createTestnetComposedAsset,
  TESTNET_CKB_LOCK_AMOUNT_LABEL,
  TESTNET_USDI_AMOUNT_LABEL,
  type CreatedTestnetComposedAsset,
  type TestnetComposedKind,
} from '@/lib/wallet/testnetComposed'
import { formatWalletError } from '@/lib/wallet/utils'

import '../styles.css'

type StatusTone = 'default' | 'error' | 'success'

const KIND_LABEL: Record<TestnetComposedKind, string> = {
  ckb: 'CKB',
  usdi: 'USDI',
}

export function TestnetCreateTool({
  isQuerying,
  onQuery,
}: {
  isQuerying: boolean
  onQuery: () => void
}) {
  const [open, setOpen] = useState(false)
  const [runningKind, setRunningKind] = useState<TestnetComposedKind | null>(null)
  const [status, setStatus] = useState('Choose an asset type to mint a test sample.')
  const [statusTone, setStatusTone] = useState<StatusTone>('default')
  const [result, setResult] = useState<CreatedTestnetComposedAsset | null>(null)

  if (!IS_TESTNET) {
    return null
  }

  function handleClose() {
    if (runningKind) {
      return
    }

    setOpen(false)
  }

  async function handleCreate(kind: TestnetComposedKind) {
    if (runningKind) {
      return
    }

    setOpen(true)
    setRunningKind(kind)
    setResult(null)
    setStatusTone('default')
    setStatus('Connecting JoyID signer...')

    try {
      if (!(await joyIdWallet.isConnected())) {
        await joyIdWallet.connect()
      }

      const nextResult = await createTestnetComposedAsset({
        kind,
        onProgress(message) {
          setStatus(message)
        },
        signer: joyIdWallet.getSigner(),
      })

      setResult(nextResult)
      setStatus('Created. Query wallet and verify it in Other DOB.')
      setStatusTone('success')
    } catch (error) {
      setStatus(formatWalletError(error))
      setStatusTone('error')
    } finally {
      setRunningKind(null)
    }
  }

  return (
    <>
      <FloatButton
        className="mintpad-testnet-float"
        icon={<span className="mintpad-testnet-float-mark">T</span>}
        tooltip="Testnet lab"
        onClick={() => {
          setOpen(true)
        }}
      />

      <Modal
        centered
        className="mintpad-testnet-modal"
        closable={ !runningKind }
        footer={ null }
        open={ open }
        width={ 760 }
        onCancel={ handleClose }
      >
        <section className="mintpad-testnet-tool-panel mintpad-testnet-tool-panel--modal">
          <div className="mintpad-testnet-tool-head">
            <div className="mintpad-testnet-tool-chip-row">
              <span className="mintpad-testnet-tool-chip">Testnet Tool</span>
              <span className="mintpad-testnet-tool-chip mintpad-testnet-tool-chip--soft">JoyID</span>
            </div>
            <strong className="panel-title mintpad-testnet-tool-title">Create Test Asset</strong>
            <p className="panel-copy mintpad-testnet-tool-description">
              Mint a CKB or USDI sample for query and melt checks.
            </p>
          </div>

          <div className="mintpad-testnet-action-grid">
            <Button
              block
              className="mintpad-testnet-action-card mintpad-testnet-action-card--ckb"
              disabled={ Boolean(runningKind) }
              loading={ runningKind === 'ckb' }
              type="text"
              onClick={() => {
                void handleCreate('ckb')
              }}
            >
              <span className="mintpad-testnet-action-body">
                <span className="mintpad-testnet-action-mark">CKB</span>
                <span className="mintpad-testnet-action-copy">
                  <strong>Create CKB asset</strong>
                </span>
                <span className="mintpad-testnet-action-value">{TESTNET_CKB_LOCK_AMOUNT_LABEL}</span>
              </span>
            </Button>

            <Button
              block
              className="mintpad-testnet-action-card mintpad-testnet-action-card--usdi"
              disabled={ Boolean(runningKind) }
              loading={ runningKind === 'usdi' }
              type="text"
              onClick={() => {
                void handleCreate('usdi')
              }}
            >
              <span className="mintpad-testnet-action-body">
                <span className="mintpad-testnet-action-mark">USDI</span>
                <span className="mintpad-testnet-action-copy">
                  <strong>Create USDI asset</strong>
                </span>
                <span className="mintpad-testnet-action-value">{TESTNET_USDI_AMOUNT_LABEL}</span>
              </span>
            </Button>
          </div>

          <div
            className={[
              'mintpad-testnet-status',
              statusTone === 'error' ? 'mintpad-testnet-status--error' : '',
              statusTone === 'success' ? 'mintpad-testnet-status--success' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <span className="mintpad-testnet-status-dot" aria-hidden="true" />
            <strong className="mintpad-testnet-status-text">{status}</strong>
          </div>

          {result ? (
            <section className="mintpad-testnet-result-shell">
              <div className="mintpad-testnet-result-head">
                <span className="mintpad-testnet-result-pill">
                  {KIND_LABEL[result.kind]} · {result.assetLabel}
                </span>

                <Button
                  className="mintpad-testnet-modal-action"
                  disabled={ Boolean(runningKind) || isQuerying }
                  shape="round"
                  size="large"
                  type="default"
                  onClick={ onQuery }
                >
                  Query Wallet
                </Button>
              </div>

              <dl className="mintpad-testnet-result-list">
                <div className="mintpad-testnet-result-row">
                  <dt>Spore ID</dt>
                  <dd>{result.sporeId}</dd>
                </div>
                <div className="mintpad-testnet-result-row">
                  <dt>Spore Tx</dt>
                  <dd>{result.sporeTxHash}</dd>
                </div>
                <div className="mintpad-testnet-result-row">
                  <dt>Lock Tx</dt>
                  <dd>{result.lockTxHash}#{result.lockIndex}</dd>
                </div>
              </dl>
            </section>
          ) : null}
        </section>
      </Modal>
    </>
  )
}
