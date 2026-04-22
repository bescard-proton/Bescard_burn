import { useState } from 'react'

import { Alert, Button, Card, Col, Descriptions, FloatButton, Modal, Row, Space, Tag, Typography } from 'antd'

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

type StatusTone = 'info' | 'error' | 'success'

const KIND_LABEL: Record<TestnetComposedKind, string> = {
  ckb: 'CKB',
  usdi: 'USDI',
}

function ResultValue({ value }: { value: string }) {
  return (
    <Typography.Paragraph
      copyable={{ text: value }}
      ellipsis={{ rows: 1, tooltip: false }}
      style={{ marginBottom: 0, color: '#1f1f1f' }}
    >
      {value}
    </Typography.Paragraph>
  )
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
  const [statusTone, setStatusTone] = useState<StatusTone>('info')
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
    setStatusTone('info')
    setStatus('Connecting wallet...')

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
        icon="T"
        onClick={() => {
          setOpen(true)
        }}
      />

      <Modal
        className="testnet-tool-modal"
        centered
        closable={ !runningKind }
        footer={ null }
        open={ open }
        styles={{
          body: { background: '#fff', paddingTop: 20 },
          header: { background: '#fff', marginBottom: 0, paddingBottom: 0 },
        }}
        title={<Typography.Title level={4} style={{ margin: 0, color: '#1f1f1f' }}>Create Test Asset</Typography.Title>}
        width={ 680 }
        onCancel={ handleClose }
      >
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Typography.Paragraph style={{ marginBottom: 0, color: '#595959' }}>
            Mint a CKB or USDI sample for query and melt checks.
          </Typography.Paragraph>

          <Row gutter={[16, 16]}>
            <Col span={12} xs={24} sm={12}>
              <Card
                style={{ background: '#fff', borderColor: '#d9d9d9', boxShadow: 'none' }}
                styles={{ body: { background: '#fff' }, header: { background: '#fff' } }}
                size="small"
                title={<Typography.Text strong style={{ color: '#1f1f1f' }}>CKB Sample</Typography.Text>}
                extra={<Tag bordered={false}>{TESTNET_CKB_LOCK_AMOUNT_LABEL}</Tag>}
              >
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <Typography.Text style={{ color: '#595959' }}>
                    Creates a text DOB and locks CKB into TypeBurnLock.
                  </Typography.Text>
                  <Button
                    block
                    className="testnet-tool-action-button"
                    disabled={Boolean(runningKind)}
                    loading={runningKind === 'ckb'}
                    type="default"
                    onClick={() => {
                      void handleCreate('ckb')
                    }}
                  >
                    Create CKB Sample
                  </Button>
                </Space>
              </Card>
            </Col>

            <Col span={12} xs={24} sm={12}>
              <Card
                style={{ background: '#fff', borderColor: '#d9d9d9', boxShadow: 'none' }}
                styles={{ body: { background: '#fff' }, header: { background: '#fff' } }}
                size="small"
                title={<Typography.Text strong style={{ color: '#1f1f1f' }}>USDI Sample</Typography.Text>}
                extra={<Tag bordered={false}>{TESTNET_USDI_AMOUNT_LABEL}</Tag>}
              >
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <Typography.Text style={{ color: '#595959' }}>
                    Creates a text DOB and locks USDI into TypeBurnLock.
                  </Typography.Text>
                  <Button
                    block
                    className="testnet-tool-action-button"
                    disabled={Boolean(runningKind)}
                    loading={runningKind === 'usdi'}
                    type="default"
                    onClick={() => {
                      void handleCreate('usdi')
                    }}
                  >
                    Create USDI Sample
                  </Button>
                </Space>
              </Card>
            </Col>
          </Row>

          <Alert
            message={<span style={{ color: '#1f1f1f' }}>{status}</span>}
            showIcon
            style={{ background: '#fafafa', border: '1px solid #d9d9d9' }}
            type={statusTone}
          />

          {result ? (
            <Card
              style={{ background: '#fff', borderColor: '#d9d9d9', boxShadow: 'none' }}
              styles={{ body: { background: '#fff' }, header: { background: '#fff' } }}
              extra={
                <Button
                  disabled={ Boolean(runningKind) || isQuerying }
                  type="primary"
                  onClick={ onQuery }
                >
                  Query Wallet
                </Button>
              }
              size="small"
              title={
                <Space size="small">
                  <Typography.Text strong style={{ color: '#1f1f1f' }}>Created Sample</Typography.Text>
                  <Tag bordered={false}>{KIND_LABEL[result.kind]}</Tag>
                  <Tag bordered={false}>{result.assetLabel}</Tag>
                </Space>
              }
            >
              <Descriptions
                column={1}
                labelStyle={{ color: '#8c8c8c' }}
                size="small"
              >
                <Descriptions.Item label="Spore ID">
                  <ResultValue value={result.sporeId} />
                </Descriptions.Item>
                <Descriptions.Item label="Spore Tx">
                  <ResultValue value={result.sporeTxHash} />
                </Descriptions.Item>
                <Descriptions.Item label="Lock Tx">
                  <ResultValue value={`${result.lockTxHash}#${result.lockIndex}`} />
                </Descriptions.Item>
              </Descriptions>
            </Card>
          ) : null}
        </Space>
      </Modal>
    </>
  )
}
