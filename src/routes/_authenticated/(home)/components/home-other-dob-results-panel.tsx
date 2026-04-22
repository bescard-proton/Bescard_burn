import { Button } from 'antd'

import { CKB_EXPLORER } from '@/constant/CKB'
import { publicAsset } from '@/constant/APP'
import MintpadViewBox, { pxIdentity } from '@/components/mintpad-view-box'

import type { OwnedOtherDob } from '../helpers/owned-bescards'
import { SporePreview } from './spore-preview'
import cardStyles from '@/components/mintpad-dashboard-list-item.module.css'
import styles from './home-bescard-hub.module.css'

type OtherDobGroup = {
  clusterHash: string | null
  clusterName: string
  items: OwnedOtherDob[]
  key: string
}

function shortenHex(value: string, head = 10, tail = 6) {
  if (!value || value.length <= head + tail) {
    return value || '-'
  }

  return `${value.slice(0, head)}...${value.slice(-tail)}`
}

function buildOtherDobGroups(items: OwnedOtherDob[]) {
  const groups = new Map<string, OwnedOtherDob[]>()

  items.forEach((item) => {
    const key = item.clusterId || '__unknown__'
    const current = groups.get(key)

    if (current) {
      current.push(item)
      return
    }

    groups.set(key, [item])
  })

  return Array.from(groups.entries())
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, groupItems]) => ({
      clusterHash: groupItems.find((item) => item.clusterHash)?.clusterHash ?? null,
      clusterName: groupItems.find((item) => item.clusterName.trim())?.clusterName.trim() ?? '',
      items: groupItems.sort(
        (left, right) => left.name.localeCompare(right.name) || left.sporeId.localeCompare(right.sporeId),
      ),
      key,
    })) satisfies OtherDobGroup[]
}

function OtherDobItem({
  item,
  onMelt,
}: {
  item: OwnedOtherDob
  onMelt: (item: OwnedOtherDob) => void
}) {
  const displayName = item.name.startsWith('DOB ') ? item.name.slice(4) : item.name

  return (
    <div className={[cardStyles.dob, cardStyles.common].join(' ')}>
      <div className={cardStyles.dobCover}>
        <div className={styles.otherDobPreviewFrame}>
          <SporePreview alt={item.name} className={styles.otherDobPreviewImage} src={item.previewSrc} />
        </div>
      </div>
      <div className={cardStyles.dobInfoRow}>
        <div className={cardStyles.dobName} title={displayName}>{displayName}</div>
        <Button
          className={cardStyles.dobAction}
          shape="round"
          size="small"
          type="default"
          onClick={() => {
            onMelt(item)
          }}
        >
          Melt
        </Button>
      </div>
    </div>
  )
}

function OtherDobGroupCard({
  group,
  onMelt,
}: {
  group: OtherDobGroup
  onMelt: (item: OwnedOtherDob) => void
}) {
  const clusterId = group.key === '__unknown__' ? '' : group.key
  const clusterHash = group.clusterHash || ''
  const titleText = group.clusterName || clusterId || 'No cluster'

  return (
    <article className={styles.projectCard}>
      <MintpadViewBox
        className={cardStyles.listItem}
        controls={[
          { left: 0, top: 0, radius: 24, deg: 90, directionDegs: [90, 0] },
          { right: pxIdentity(225), top: 0, radius: 12, deg: 135, directionDegs: [180, 45] },
          { right: pxIdentity(200), top: pxIdentity(30), radius: 12, deg: 135, directionDegs: [225, 0] },
          { right: pxIdentity(0), top: pxIdentity(30), radius: 12, deg: 90, directionDegs: [180, 90] },
          { right: 0, bottom: 0, radius: 24, deg: 90, directionDegs: [-90, 180] },
          { left: 0, bottom: 0, radius: 24, deg: 90, directionDegs: [0, 270] },
        ]}
        fill="#1A1A1A"
        extraBackgrounds={[`url('${publicAsset('assets/dashboard/ui/g3.rotate.svg')}') no-repeat right 10px top 0/ 192px 22px`]}
      >
        <div className={cardStyles.listItemInner}>
          <div className={cardStyles.header} style={{ padding: 0 }}>
            <div className="mt-2">
              <div
                className={cardStyles.itemName}
                style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                title={titleText}
              >
                {titleText}
              </div>
              <div className={[cardStyles.clusterLink, clusterHash ? cardStyles.clusterLinkEnable : ''].join(' ')}>
                {clusterHash ? (
                  <a
                    className={cardStyles.clusterLinkInner}
                    href={`${CKB_EXPLORER}/nft-collections/${clusterHash}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>Cluster Hash:</span>
                    <span>{shortenHex(clusterHash, 11, 4)}</span>
                  </a>
                ) : (
                  <>
                    <span>Cluster Hash:</span>
                    <span>-</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className={cardStyles.dobGroups}>
            <div className={[cardStyles.group, styles.otherDobGroup].join(' ')}>
              <div className={cardStyles.badge} style={{ background: `url(${publicAsset('assets/dashboard/ui/badges/common.svg')})` }}>
                Other
              </div>

              {group.items.map((item) => (
                <OtherDobItem
                  key={item.id}
                  item={item}
                  onMelt={onMelt}
                />
              ))}
            </div>
          </div>
        </div>
      </MintpadViewBox>
    </article>
  )
}

export function HomeOtherDobResultsPanel({
  count,
  items,
  onMelt,
}: {
  count?: number | null
  items: OwnedOtherDob[]
  onMelt: (item: OwnedOtherDob) => void
}) {
  const groups = buildOtherDobGroups(items)
  const title = count == null ? 'Other DOB' : `Other DOB (${count})`

  if (groups.length === 0 && count == null) {
    return null
  }

  return (
    <section className={styles.sectionBlock}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>

      {groups.length > 0 ? (
        <div className={styles.projectCardList}>
          {groups.map((group) => (
            <OtherDobGroupCard
              key={group.key}
              group={group}
              onMelt={onMelt}
            />
          ))}
        </div>
      ) : null}
    </section>
  )
}
