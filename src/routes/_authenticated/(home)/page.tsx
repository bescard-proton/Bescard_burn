import '@/components/mintpad-dashboard-globals.css'

import { startTransition, useCallback, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'

import { formatWalletError } from '@/lib/wallet/utils'

import { HomeBescardResultsPanel } from './components/home-bescard-results-panel'
import styles from './components/home-bescard-hub.module.css'
import { HomeHeroActions } from './components/home-hero-actions'
import { HomeOtherDobResultsPanel } from './components/home-other-dob-results-panel'
import { HomePageHeader } from './components/home-page-header'
import { HomeResultsPanel } from './components/home-results-panel'
import { MeltModal } from './components/melt-modal'
import { TestnetCreateTool } from './components/testnet-create-tool'
import {
  queryOwnedHomeSpores,
  type BescardScanProgress,
  type OwnedBescard,
  type OwnedOtherDob,
} from './helpers/owned-bescards'
import { Divider } from 'antd';


const EMPTY_PROGRESS: BescardScanProgress = {
  bescards: 0,
  dobs: 0,
  scanned: 0,
}

type MeltableHomeSpore = OwnedBescard | OwnedOtherDob

export function HomePage() {
  const navigate = useNavigate()
  const [isQuerying, setIsQuerying] = useState(false)
  const [hasQueried, setHasQueried] = useState(false)
  const [ownedBescards, setOwnedBescards] = useState<OwnedBescard[]>([])
  const [ownedOtherDobs, setOwnedOtherDobs] = useState<OwnedOtherDob[]>([])
  const [progress, setProgress] = useState<BescardScanProgress>(EMPTY_PROGRESS)
  const [queryError, setQueryError] = useState<string | null>(null)
  const [selectedSpore, setSelectedSpore] = useState<MeltableHomeSpore | null>(null)
  const hasQueryProgress = isQuerying || hasQueried
  const bescardCount = hasQueryProgress ? progress.bescards : null
  const otherDobCount = hasQueryProgress ? Math.max(0, progress.dobs - progress.bescards) : null

  const emptyStateMessage = isQuerying
    ? 'Querying on-chain BesCARDs...'
    : hasQueried
      ? 'Query complete, but no displayable BesCARDs were found.'
      : 'Click "Query My BesCARD" to query the connected wallet.'

  const handleQuery = useCallback(async () => {
    if (isQuerying) {
      return
    }

    setIsQuerying(true)
    setHasQueried(true)
    setQueryError(null)
    setProgress(EMPTY_PROGRESS)
    startTransition(() => {
      setOwnedBescards([])
      setOwnedOtherDobs([])
    })

    const nextBescards: OwnedBescard[] = []
    const nextOtherDobs: OwnedOtherDob[] = []

    try {
      await queryOwnedHomeSpores({
        onBescard(item) {
          nextBescards.push(item)
          startTransition(() => {
            setOwnedBescards([...nextBescards])
          })
        },
        onBescardUpdate(item) {
          const index = nextBescards.findIndex((current) => current.id === item.id)

          if (index < 0) {
            return
          }

          nextBescards[index] = item

          startTransition(() => {
            setOwnedBescards([...nextBescards])
          })
        },
        onOtherDob(item) {
          nextOtherDobs.push(item)
          startTransition(() => {
            setOwnedOtherDobs([...nextOtherDobs])
          })
        },
        onOtherDobUpdate(item) {
          const index = nextOtherDobs.findIndex((current) => current.id === item.id)

          if (index < 0) {
            return
          }

          nextOtherDobs[index] = item

          startTransition(() => {
            setOwnedOtherDobs([...nextOtherDobs])
          })
        },
        onProgress(nextProgress) {
          startTransition(() => {
            setProgress(nextProgress)
          })
        },
      })
    } catch (error) {
      setQueryError(formatWalletError(error))
    } finally {
      setIsQuerying(false)
    }
  }, [isQuerying])

  const handleOpenMelt = useCallback((item: MeltableHomeSpore) => {
    setSelectedSpore(item)
  }, [])

  const handleCloseMelt = useCallback(() => {
    setSelectedSpore(null)
  }, [])

  const handleMeltCompleted = useCallback((item: { id: string; kind: MeltableHomeSpore['kind'] }) => {
    startTransition(() => {
      setOwnedBescards((current) => current.filter((currentItem) => currentItem.id !== item.id))
      setOwnedOtherDobs((current) => current.filter((currentItem) => currentItem.id !== item.id))
      setProgress((current) => ({
        ...current,
        bescards: item.kind === 'bescard' ? Math.max(0, current.bescards - 1) : current.bescards,
        dobs: Math.max(0, current.dobs - 1),
      }))
      setSelectedSpore(null)
    })
  }, [])

  const handleViewProjects = useCallback(() => {
    void navigate({ to: '/projects' })
  }, [navigate])

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <HomePageHeader />
        <HomeHeroActions
          isQuerying={isQuerying}
          progress={progress}
          onQuery={() => {
            void handleQuery()
          }}
          onViewProjects={handleViewProjects}
        />
        <HomeResultsPanel
          queryError={queryError}
        >
          <>
            <HomeBescardResultsPanel
              count={bescardCount}
              emptyStateMessage={emptyStateMessage}
              items={ownedBescards}
              onMelt={(item) => {
                handleOpenMelt(item)
              }}
            />
            {ownedOtherDobs.length > 0 || (otherDobCount != null && otherDobCount > 0) ? (
              <>
                <Divider/>
                <HomeOtherDobResultsPanel
                  count={otherDobCount}
                  items={ownedOtherDobs}
                  onMelt={(item) => {
                    handleOpenMelt(item)
                  }}
                />
              </>
            ) : null}
          </>
        </HomeResultsPanel>

        <section className={styles.disclaimerBlock}>
          <h2 className={styles.disclaimerTitle}>Disclaimer</h2>
          <p className={styles.disclaimerText}>
            This tool is an auxiliary tool for asset operations after the BesCARD platform goes offline. All asset
            operations are confirmed and executed by users themselves. The development team assumes no responsibility
            for any asset loss or private key leakage caused by operational errors, network issues, environmental
            problems, third-party risks, or similar factors.
          </p>
          <p className={styles.disclaimerText}>
            Users bear all on-chain operational risks on their own.
          </p>
        </section>
      </div>

      {selectedSpore ? (
        <MeltModal
          dob={selectedSpore}
          onCompleted={handleMeltCompleted}
          onClose={handleCloseMelt}
        />
      ) : null}

      <TestnetCreateTool
        isQuerying={isQuerying}
        onQuery={() => {
          void handleQuery()
        }}
      />
    </main>
  )
}
