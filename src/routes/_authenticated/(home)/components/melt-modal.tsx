import { useCallback, useEffect, useState } from 'react'
import { Button, Modal, message } from 'antd'

import { publicAsset } from '@/constant/APP'
import { BURN_LOCK_USDI_CAPACITY } from '@/constant/CKB'
import joyIdWallet, { type SporeReleaseAsset } from '@/lib/wallet/JoyIDWallet'
import { formatWalletError } from '@/lib/wallet/utils'
import { SporePreview } from './spore-preview'
import '../styles.css'

type MeltableDob = {
  id: string
  kind: 'bescard' | 'other-dob'
  name: string
  previewSrc?: string | null
  releaseCkb?: string | null
  storedValue?: string | null
}

function getReleaseAssetIcon(symbol: string) {
  if (symbol === 'CKB') {
    return publicAsset('assets/chain/nervos.svg')
  }

  if (symbol === 'USDI') {
    return publicAsset('assets/usdi.svg')
  }

  return publicAsset('assets/melt/asset.svg')
}

function parseStoredValue(value?: string | null) {
  const trimmed = value?.trim()

  if (!trimmed) {
    return {
      amountText: null,
      currency: null,
      numericValue: null,
    } as const
  }

  const match = trimmed.match(/^([+-]?\d+(?:\.\d+)?)(?:\s*([A-Za-z]+))?$/)

  if (!match) {
    return {
      amountText: trimmed,
      currency: null,
      numericValue: Number.NaN,
    } as const
  }

  const amountText = match[1]
  const currency = match[2]?.toUpperCase() ?? null

  return {
    amountText,
    currency,
    numericValue: Number(amountText),
  } as const
}

function hasPositiveAmount(value?: string | null) {
  if (!value?.trim()) {
    return false
  }

  const numericValue = Number(value)
  return Number.isFinite(numericValue) && numericValue > 0
}

function pickAmountText(primary?: string | null, fallback?: string | null) {
  if (hasPositiveAmount(primary)) {
    return primary ?? null
  }

  if (hasPositiveAmount(fallback)) {
    return fallback ?? null
  }

  return primary?.trim() || fallback?.trim() || null
}

export function MeltModal({
  dob,
  onCompleted,
  onClose,
}: {
  dob: MeltableDob
  onCompleted: (item: MeltableDob) => void
  onClose: () => void
}) {
  const modalWidth = 680
  const dx = modalWidth - 600
  const [isMelting, setIsMelting] = useState(false)
  const [isQueryingReleaseAssets, setIsQueryingReleaseAssets] = useState(false)
  const [meltStatus, setMeltStatus] = useState<string | null>(null)
  const [releaseAssetError, setReleaseAssetError] = useState<string | null>(null)
  const [releaseAssets, setReleaseAssets] = useState<SporeReleaseAsset[]>([])
  const [releasedCkb, setReleasedCkb] = useState<string | null>(null)
  const modalHeadPath = `M4 24
    C4 12.9543 12.9543 4 24 4
    H${ 515.76 + dx }
    C${ 528.595 + dx } 4 ${ 539 + dx } 14.4047 ${ 539 + dx } 27.2397
    C${ 539 + dx } 44.4929 ${ 552.987 + dx } 58.4793 ${ 570.24 + dx } 58.4793
    H${ 571.5 + dx }
    C${ 585.031 + dx } 58.4793 ${ 596 + dx } 69.4483 ${ 596 + dx } 82.9793
    V100
    H4
    V24
    Z`

  function splitTokenValue(value: string) {
    const [ integer = value, decimal = '00' ] = value.split('.')
    return {
      integer,
      decimal: decimal.padEnd(2, '0').slice(0, 2),
    }
  }

  useEffect(() => {
    let cancelled = false

    setIsQueryingReleaseAssets(true)
    setReleaseAssetError(null)
    setReleaseAssets([])
    setReleasedCkb(null)
    setMeltStatus('Checking composed assets...')

    void joyIdWallet.querySporeReleaseAssets(dob.id)
      .then((result) => {
        if (cancelled) {
          return
        }

        setReleaseAssets(result.assets)
        setReleasedCkb(result.releaseCkb)
        setMeltStatus(null)
      })
      .catch((error) => {
        if (cancelled) {
          return
        }

        setReleaseAssetError(formatWalletError(error))
        setMeltStatus(null)
      })
      .finally(() => {
        if (cancelled) {
          return
        }

        setIsQueryingReleaseAssets(false)
      })

    return () => {
      cancelled = true
    }
  }, [dob.id])

  const handleClose = useCallback(() => {
    if (isMelting) {
      return
    }

    onClose()
  }, [isMelting, onClose])

  const handleMelt = useCallback(async () => {
    if (isMelting || isQueryingReleaseAssets) {
      return
    }

    if (releaseAssetError) {
      setMeltStatus(releaseAssetError)
      return
    }

    setIsMelting(true)
    try {
      const result = await joyIdWallet.meltSpore(dob.id, {
        onStatusChange(status) {
          setMeltStatus(status)
        },
      })
      message.success(`Melt confirmed on-chain: ${result.txHash.slice(0, 10)}...${result.txHash.slice(-6)}`)
      onCompleted(dob)
    } catch (error) {
      setMeltStatus(formatWalletError(error))
    } finally {
      setIsMelting(false)
    }
  }, [dob, isMelting, isQueryingReleaseAssets, onCompleted, releaseAssetError])

  const displayName = dob.name.startsWith('DOB ') ? null : dob.name
  const parsedStoredValue = parseStoredValue(dob.storedValue)
  const ckbAsset = releaseAssets.find((asset) => asset.symbol === 'CKB') ?? null
  const usdiAsset = releaseAssets.find((asset) => asset.symbol === 'USDI') ?? null
  const storedCurrency =
    parsedStoredValue.currency === 'CKB' || parsedStoredValue.currency === 'USDI'
      ? parsedStoredValue.currency
      : usdiAsset
        ? 'USDI'
        : hasPositiveAmount(ckbAsset?.amountText)
          ? 'CKB'
          : null
  const receiveAmountText =
    storedCurrency === 'USDI'
      ? pickAmountText(parsedStoredValue.amountText, usdiAsset?.amountText)
      : storedCurrency === 'CKB'
        ? pickAmountText(parsedStoredValue.amountText, ckbAsset?.amountText)
        : null
  const hasStoredValue =
    hasPositiveAmount(parsedStoredValue.amountText) ||
    hasPositiveAmount(usdiAsset?.amountText) ||
    (storedCurrency === 'CKB' && hasPositiveAmount(ckbAsset?.amountText))
  const shouldShowSplitBoxes = hasStoredValue
  const shouldShowReceiveLoading = shouldShowSplitBoxes && !storedCurrency && isQueryingReleaseAssets
  const shouldShowReceiveError = shouldShowSplitBoxes && !storedCurrency && Boolean(releaseAssetError)

  return (
    <Modal
      centered
      className="redeem-modal"
      closable={ false }
      footer={ null }
      open
      width={ modalWidth }
      onCancel={ handleClose }
    >
      <section className="mintpad-rounded-shell" style={ { width: modalWidth } }>
        <Button
          aria-label="Close melt modal"
          className="mintpad-rounded-close"
          shape="circle"
          type="default"
          onClick={ handleClose }
        />

        <div className="mintpad-rounded-head" aria-hidden="true">
          <svg
            fill="none"
            height="100"
            viewBox={ `0 0 ${ modalWidth } 100` }
            width={ modalWidth }
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={ modalHeadPath } fill="#fff"/>
            <path
              d={ `M4 24
                C4 12.9543 12.9543 4 24 4
                H${ 515.76 + dx }
                C${ 528.595 + dx } 4 ${ 539 + dx } 14.4047 ${ 539 + dx } 27.2397
                C${ 539 + dx } 44.4929 ${ 552.987 + dx } 58.4793 ${ 570.24 + dx } 58.4793
                H${ 571.5 + dx }
                C${ 585.031 + dx } 58.4793 ${ 596 + dx } 69.4483 ${ 596 + dx } 82.9793
                V100
                M4 100
                V24
                Z` }
              stroke="#1A1A1A"
              strokeWidth="8"
            />
          </svg>
        </div>

        <div className="mintpad-rounded-body-bg" aria-hidden="true"/>

        <div className="mintpad-rounded-body">
          <div className="mintpad-copy-content-wrap">
            <h1 className="mintpad-copy-title">Melt</h1>

            <div className="mintpad-copy-dob-wrap">
              <div className="mintpad-copy-card mintpad-copy-dob-info">
                <SporePreview alt={ dob.name } className="mintpad-copy-dob-cover" src={ dob.previewSrc }/>

                <div className="mintpad-copy-info-content-wrap">
                  { displayName ? (
                    <div className="mintpad-copy-item">
                      <span className="mintpad-copy-event-name">{ displayName }</span>
                    </div>
                  ) : null }

                  <div className="mintpad-copy-item mintpad-copy-stored-value-row">
                    <span className="mintpad-copy-event-name">{ dob.id }</span>
                  </div>
                </div>
              </div>

              <img alt="" className="mintpad-copy-icon" src={ publicAsset('assets/melt/down.svg') }/>

              <div className="mintpad-copy-card mintpad-copy-receive-info">
                { shouldShowSplitBoxes ? (
                  <>
                    <div className="mintpad-copy-box">
                      <h3 className="mintpad-copy-box-title">You will Release</h3>

                      <div className="mintpad-copy-box-tokens">
                        { releasedCkb ? (
                          <div className="mintpad-copy-box-token">
                            <div className="mintpad-copy-box-asset">
                              <img alt="" className="mintpad-copy-chain-icon" src={ publicAsset('assets/chain/nervos.svg') }/>
                              <span className="mintpad-copy-box-name">CKB</span>
                            </div>

                            <span className="mintpad-copy-release-price">
                              <span className="mintpad-copy-release-integer">{ splitTokenValue(releasedCkb).integer }.</span>
                              <span className="mintpad-copy-release-decimal">{ splitTokenValue(releasedCkb).decimal }</span>
                            </span>
                          </div>
                        ) : isQueryingReleaseAssets ? (
                          <p className="mintpad-copy-release-empty">Loading on-chain assets...</p>
                        ) : (
                          <p className="mintpad-copy-release-empty">-</p>
                        ) }
                      </div>
                    </div>

                    <div className="mintpad-copy-box mintpad-copy-box--spaced">
                      <h3 className="mintpad-copy-box-title">You will Receive</h3>

                      <div className="mintpad-copy-box-tokens">
                        { shouldShowReceiveLoading ? (
                          <p className="mintpad-copy-release-empty">Loading composed assets...</p>
                        ) : shouldShowReceiveError ? (
                          <p className="mintpad-copy-release-empty mintpad-copy-release-empty--error">{ releaseAssetError }</p>
                        ) : storedCurrency === 'USDI' && receiveAmountText ? (
                          <>
                            <div className="mintpad-copy-box-token">
                              <div className="mintpad-copy-box-asset">
                                <img alt="" className="mintpad-copy-chain-icon" src={ getReleaseAssetIcon('USDI') }/>
                                <span className="mintpad-copy-box-name">USDI</span>
                              </div>

                              <span className="mintpad-copy-release-price">
                                <span className="mintpad-copy-release-integer">{ splitTokenValue(receiveAmountText).integer }.</span>
                                <span className="mintpad-copy-release-decimal">{ splitTokenValue(receiveAmountText).decimal }</span>
                              </span>
                            </div>

                            <div className="mintpad-copy-box-token">
                              <div className="mintpad-copy-box-asset">
                                <img alt="" className="mintpad-copy-chain-icon" src={ publicAsset('assets/chain/nervos.svg') }/>
                                <span className="mintpad-copy-box-name">
                                  CKB
                                  <span className="mintpad-copy-box-name-remark">(Occupied)</span>
                                </span>
                              </div>

                              <span className="mintpad-copy-release-price">
                                <span className="mintpad-copy-release-integer">{ splitTokenValue(String(BURN_LOCK_USDI_CAPACITY)).integer }.</span>
                                <span className="mintpad-copy-release-decimal">{ splitTokenValue(String(BURN_LOCK_USDI_CAPACITY)).decimal }</span>
                              </span>
                            </div>
                          </>
                        ) : storedCurrency === 'CKB' && receiveAmountText ? (
                          <div className="mintpad-copy-box-token">
                            <div className="mintpad-copy-box-asset">
                              <img alt="" className="mintpad-copy-chain-icon" src={ publicAsset('assets/chain/nervos.svg') }/>
                              <span className="mintpad-copy-box-name">CKB</span>
                            </div>

                            <span className="mintpad-copy-release-price">
                              <span className="mintpad-copy-release-integer">{ splitTokenValue(receiveAmountText).integer }.</span>
                              <span className="mintpad-copy-release-decimal">{ splitTokenValue(receiveAmountText).decimal }</span>
                            </span>
                          </div>
                        ) : (
                          <p className="mintpad-copy-release-empty">-</p>
                        ) }
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <img alt="" className="mintpad-copy-asset-icon" src={ publicAsset('assets/melt/asset.svg') }/>

                    <h3 className="mintpad-copy-receive-title">
                      You will Release
                      :
                    </h3>

                    { releasedCkb ? (
                      <div className="mintpad-copy-release-ckb">
                        <img alt="" className="mintpad-copy-chain-icon" src={ publicAsset('assets/chain/nervos.svg') }/>
                        <span className="mintpad-copy-release-price">
                          <span className="mintpad-copy-release-integer">{ splitTokenValue(releasedCkb).integer }.</span>
                          <span className="mintpad-copy-release-decimal">{ splitTokenValue(releasedCkb).decimal }</span>
                        </span>
                        <span className="mintpad-copy-release-unit">CKB</span>
                      </div>
                    ) : isQueryingReleaseAssets ? (
                      <p className="mintpad-copy-release-empty">Loading composed assets...</p>
                    ) : releaseAssetError ? (
                      <p className="mintpad-copy-release-empty mintpad-copy-release-empty--error">{ releaseAssetError }</p>
                    ) : (
                      <p className="mintpad-copy-release-empty">-</p>
                    ) }
                  </>
                ) }
              </div>

              <div className="mintpad-copy-warning">
                <img alt="" src={ publicAsset('assets/melt/warning.svg') }/>
                <span>Please NOTE: BesCARD melt is irreversible, so proceed with caution.</span>
              </div>

              { meltStatus ? <p className="panel-note mintpad-copy-status">{ meltStatus }</p> : null }

              <div className="mintpad-copy-footer">
                <Button
                  className="mintpad-copy-melt-button"
                  shape="round"
                  loading={ isMelting }
                  disabled={ isMelting || isQueryingReleaseAssets || Boolean(releaseAssetError) }
                  onClick={ () => {
                    void handleMelt()
                  } }
                >
                  Melt
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  )
}
