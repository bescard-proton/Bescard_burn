import { useMemo, useState, type ReactNode } from "react";
import { Button, Image } from "antd";
import clsx from "clsx";

import { CKB_EXPLORER } from "@/constant/CKB";
import { publicAsset } from "@/constant/APP";
import { type DashboardCluster, type DashboardItem } from "@/constant/BescardDashboardData";

import MintpadViewBox, { pxIdentity } from "./mintpad-view-box";
import styles from "./mintpad-dashboard-list-item.module.css";

const DOB_RARITY_TYPE = {
  LEGEND: 1,
  EPIC: 2,
  RARE: 3,
  COMMON: 4,
} as const;

const mapTierToTierLogo: Record<string, string> = {
  "S+": publicAsset("assets/dashboard/ui/tiers/s_plus.png"),
  S: publicAsset("assets/dashboard/ui/tiers/s.png"),
  A: publicAsset("assets/dashboard/ui/tiers/a.png"),
  B: publicAsset("assets/dashboard/ui/tiers/b.png"),
  C: publicAsset("assets/dashboard/ui/tiers/c.png"),
};

const badgeMap: Record<number, string> = {
  [DOB_RARITY_TYPE.COMMON]: publicAsset("assets/dashboard/ui/badges/common.svg"),
  [DOB_RARITY_TYPE.RARE]: publicAsset("assets/dashboard/ui/badges/rare.svg"),
  [DOB_RARITY_TYPE.EPIC]: publicAsset("assets/dashboard/ui/badges/epic.svg"),
  [DOB_RARITY_TYPE.LEGEND]: publicAsset("assets/dashboard/ui/badges/legend.svg"),
};

const mapRarityToText: Record<number, string> = {
  [DOB_RARITY_TYPE.COMMON]: "Common",
  [DOB_RARITY_TYPE.RARE]: "Rare",
  [DOB_RARITY_TYPE.EPIC]: "Epic",
  [DOB_RARITY_TYPE.LEGEND]: "Legendary",
};

const mapRarityToDobClass: Record<number, string> = {
  [DOB_RARITY_TYPE.COMMON]: styles.common,
  [DOB_RARITY_TYPE.RARE]: styles.rare,
  [DOB_RARITY_TYPE.EPIC]: styles.epic,
  [DOB_RARITY_TYPE.LEGEND]: styles.legend,
};

type DobGroup = {
  key: string;
  rarity: number;
  items: MintpadDashboardDisplayDobItem[];
};

type MintpadDashboardDisplayDobItem = {
  actionKey: string;
  key: string;
  name: string;
  previewSrc: string;
  rarity: number;
};

type MintpadDashboardDisplayItem = {
  contractAddress?: string | null;
  coverSrc: string;
  dobName: string;
  dobTier?: string | null;
  groups: DobGroup[];
  issuer?: string | null;
  issuerLogoSrc: string;
  openTime?: string | null;
};

type MintpadDashboardListItemProps =
  | {
      item: DashboardCluster;
      mode?: "catalog";
    }
  | {
      item: DashboardCluster;
      mode: "redeem";
      ownedDobs: MintpadDashboardDisplayDobItem[];
      onDobAction: (itemKey: string) => void;
    };

const FALLBACK_IMAGE_SRC = publicAsset("assets/common/default-avatar.png");

function ExternalLinkIcon({ color = "currentColor", size = 14 }: { color?: string; size?: number }) {
  return (
    <span>
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.25 1.75C5.39868 1.75016 5.54169 1.8071 5.6498 1.90916C5.75791 2.01123 5.82297 2.15072 5.83168 2.29915C5.8404 2.44757 5.79211 2.59372 5.69668 2.70774C5.60125 2.82175 5.46589 2.89502 5.31825 2.91258L5.25 2.91667H2.91667V11.0833H11.0833V5.83333C11.0835 5.68465 11.1404 5.54165 11.2425 5.43353C11.3446 5.32542 11.4841 5.26036 11.6325 5.25165C11.7809 5.24294 11.9271 5.29123 12.0411 5.38665C12.1551 5.48208 12.2284 5.61744 12.2459 5.76508L12.25 5.83333V11.0833C12.2501 11.3777 12.1389 11.6612 11.9388 11.877C11.7387 12.0928 11.4643 12.225 11.1708 12.2471L11.0833 12.25H2.91667C2.62233 12.2501 2.33884 12.1389 2.12301 11.9388C1.90719 11.7387 1.77499 11.4643 1.75292 11.1708L1.75 11.0833V2.91667C1.74991 2.62233 1.86107 2.33884 2.06121 2.12301C2.26134 1.90719 2.53566 1.77499 2.82917 1.75292L2.91667 1.75H5.25ZM11.3826 1.75C11.7454 1.75 11.9566 2.023 12.0097 2.24933C12.0627 2.47625 11.9951 2.81575 11.6684 2.97675L11.4269 3.09983L11.3312 3.15117L11.1195 3.26842L10.8832 3.40608L10.6272 3.56358C10.2293 3.81442 9.7755 4.13292 9.31933 4.5185C8.3545 5.33458 7.41883 6.42075 6.97025 7.76767C6.92136 7.91449 6.81615 8.03587 6.67777 8.10512C6.53938 8.17437 6.37915 8.1858 6.23233 8.13692C6.08551 8.08803 5.96413 7.98282 5.89488 7.84443C5.82563 7.70605 5.81419 7.54582 5.86308 7.399C6.40442 5.775 7.50983 4.52142 8.56625 3.62775C8.81767 3.41483 9.06908 3.22058 9.31175 3.04442L9.49258 2.91667H8.16667C8.01799 2.9165 7.87498 2.85957 7.76687 2.75751C7.65876 2.65544 7.5937 2.51594 7.58498 2.36752C7.57627 2.2191 7.62456 2.07295 7.71999 1.95893C7.81541 1.84492 7.95078 1.77164 8.09842 1.75408L8.16667 1.75H11.3826Z"
          fill={color}
        />
      </svg>
    </span>
  );
}

function renderDate(value: string) {
  if (!value) {
    return "-";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getIssuerLogoPath(value?: string) {
  if (!value) {
    return FALLBACK_IMAGE_SRC;
  }

  const parts = value.split("-");
  const cdnId = parts[1];
  const last = parts.at(-1) || "";
  const match = last.match(/\.(png|jpe?g|gif|webp|svg)$/i);
  const extension = match ? `.${match[1].toLowerCase()}` : ".jpg";
  return publicAsset(`assets/dashboard/issuer-logo/${cdnId}${extension}`);
}

function getClusterCoverPath(item: DashboardCluster) {
  return item.coverAsset ? publicAsset(item.coverAsset.publicPath) : FALLBACK_IMAGE_SRC;
}

function getDobItemPath(item: DashboardItem) {
  return item.asset ? publicAsset(item.asset.publicPath) : FALLBACK_IMAGE_SRC;
}

function buildDashboardDobGroups(params: {
  item: DashboardCluster;
  mode: "catalog" | "redeem";
  ownedDobs: MintpadDashboardDisplayDobItem[];
}): DobGroup[] {
  if (params.mode === "redeem") {
    const groups: DobGroup[] = [];
    const grouped = new Map<number, MintpadDashboardDisplayDobItem[]>();

    params.ownedDobs.forEach((item) => {
      const current = grouped.get(item.rarity);

      if (current) {
        current.push(item);
        return;
      }

      grouped.set(item.rarity, [item]);
    });

    [DOB_RARITY_TYPE.LEGEND, DOB_RARITY_TYPE.EPIC, DOB_RARITY_TYPE.RARE, DOB_RARITY_TYPE.COMMON].forEach(
      (rarity, index) => {
        const items = grouped.get(rarity);

        if (!items || items.length === 0) {
          return;
        }

        groups.push({
          items,
          key: `owned_${rarity}_${index}`,
          rarity,
        });
      },
    );

    return groups;
  }

  const mapENToRarity: Record<string, number> = {
    Legendary: DOB_RARITY_TYPE.LEGEND,
    Epic: DOB_RARITY_TYPE.EPIC,
    Rare: DOB_RARITY_TYPE.RARE,
    Common: DOB_RARITY_TYPE.COMMON,
  };
  const orderedGroups = new Map(params.item.groups.map((group) => [group.name, group.items] as const));
  const maxLineCount = 8;
  let lineCount = 0;
  let groupKeyIndex = 0;
  const groups: DobGroup[] = [];

  ["Legendary", "Epic", "Rare", "Common"].forEach((rarityName) => {
    const dobList = orderedGroups.get(rarityName) || [];
    const rarity = mapENToRarity[rarityName];
    let currentGroup: DobGroup | undefined;

    dobList.forEach((dobItem) => {
      if (lineCount >= maxLineCount) {
        lineCount = 0;
        currentGroup = undefined;
      }

      if (!currentGroup) {
        currentGroup = {
          key: `${rarityName}_${groupKeyIndex++}`,
          rarity,
          items: [],
        };
        groups.push(currentGroup);
      }

      currentGroup.items.push({
        actionKey: dobItem.dobItemId,
        key: dobItem.dobItemId,
        name: dobItem.dobName,
        previewSrc: getDobItemPath(dobItem),
        rarity,
      });
      lineCount += 1;
    });
  });

  return groups;
}

function buildMintpadDashboardDisplayItem(
  params: {
    item: DashboardCluster;
    mode: "catalog" | "redeem";
    ownedDobs?: MintpadDashboardDisplayDobItem[];
  },
): MintpadDashboardDisplayItem {
  return {
    contractAddress: params.item.contractAddress,
    coverSrc: getClusterCoverPath(params.item),
    dobName: params.item.dobName,
    dobTier: params.item.dobTier,
    groups: buildDashboardDobGroups({
      item: params.item,
      mode: params.mode,
      ownedDobs: params.ownedDobs ?? [],
    }),
    issuer: params.item.issuer,
    issuerLogoSrc: getIssuerLogoPath(params.item.issuerLogo),
    openTime: params.item.openTime,
  };
}

function getTierLogoPath(value?: string | null) {
  if (!value) {
    return null;
  }

  return mapTierToTierLogo[value] ?? null;
}

function getDisplayText(value?: string | null) {
  if (!value?.trim()) {
    return "-";
  }

  return value;
}

function ChainHash({
  hash,
  subPath = "nft-collections",
  className,
  children,
}: {
  hash?: string;
  subPath?: string;
  className?: string;
  children: ReactNode;
}) {
  if (!hash) {
    return <>{children}</>;
  }

  return (
    <a
      className={className}
      href={`${CKB_EXPLORER}/${subPath}/${hash}`}
      target="_blank"
      rel="noreferrer"
      onClick={(event) => event.stopPropagation()}
    >
      {children}
    </a>
  );
}

function GroupBadge({ rarity }: { rarity: number }) {
  const badgeSrc = badgeMap[rarity] ?? badgeMap[DOB_RARITY_TYPE.COMMON];
  const badgeLabel = mapRarityToText[rarity] ?? "-";

  return <div className={styles.badge} style={{ background: `url(${badgeSrc})` }}>{badgeLabel}</div>;
}

function PreviewImage({
  src,
  width,
  height,
  className,
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
}) {
  const [preview, setPreview] = useState(false);
  const imageSrc = src || FALLBACK_IMAGE_SRC;

  return (
    <div className={className} style={{ width, height }}>
      <img
        src={imageSrc}
        style={{ width, height, backgroundColor: "#f5f5f5", cursor: "pointer" }}
        onClick={() => setPreview(true)}
      />
      <Image style={{ display: "none" }} src={imageSrc} preview={{ visible: preview, onVisibleChange: setPreview }} />
    </div>
  );
}

function DOBItem({
  rarity,
  item,
  onDobAction,
}: {
  rarity: number;
  item: MintpadDashboardDisplayDobItem;
  onDobAction?: (itemKey: string) => void;
}) {
  const rarityClass = mapRarityToDobClass[rarity] ?? mapRarityToDobClass[DOB_RARITY_TYPE.COMMON];
  const displayName = item.name.startsWith("DOB ") ? item.name.slice(4) : item.name;

  return (
    <div className={clsx(styles.dob, rarityClass)}>
      <div className={styles.dobCover}>
        <PreviewImage width={108} height={144} className={styles.dobCoverInner} src={item.previewSrc} />
      </div>
      <div className={styles.dobInfoRow}>
        <div className={styles.dobName} title={displayName}>{displayName}</div>
        {onDobAction ? (
          <Button
            className={styles.dobAction}
            size="small"
            type="default"
            onClick={(event) => {
              event.stopPropagation();
              onDobAction(item.actionKey);
            }}
          >
            Melt
          </Button>
        ) : null}
      </div>
    </div>
  );
}

function GroupCard({
  rarity,
  items,
  onDobAction,
}: {
  rarity: number;
  items: MintpadDashboardDisplayDobItem[];
  onDobAction?: (itemKey: string) => void;
}) {
  return (
    <div className={styles.group}>
      <GroupBadge rarity={rarity} />
      {items.map((groupItem) => (
        <DOBItem
          key={groupItem.key}
          rarity={rarity}
          item={groupItem}
          onDobAction={onDobAction}
        />
      ))}
    </div>
  );
}

export function MintpadDashboardListItem(props: MintpadDashboardListItemProps) {
  const mode = props.mode ?? "catalog";
  const ownedDobs = "ownedDobs" in props ? props.ownedDobs : undefined;
  const onDobAction = "onDobAction" in props ? props.onDobAction : undefined;
  const displayItem = useMemo(
    () =>
      buildMintpadDashboardDisplayItem({
        item: props.item,
        mode,
        ownedDobs,
      }),
    [mode, ownedDobs, props.item],
  );
  const tierLogoSrc = getTierLogoPath(displayItem.dobTier);

  return (
    <MintpadViewBox
      className={styles.listItem}
      controls={[
        { left: 0, top: 0, radius: 24, deg: 90, directionDegs: [90, 0] },
        { right: pxIdentity(225), top: 0, radius: 12, deg: 135, directionDegs: [180, 45] },
        { right: pxIdentity(200), top: pxIdentity(30), radius: 12, deg: 135, directionDegs: [225, 0] },
        { right: pxIdentity(0), top: pxIdentity(30), radius: 12, deg: 90, directionDegs: [180, 90] },
        { right: 0, bottom: 0, radius: 24, deg: 90, directionDegs: [-90, 180] },
        { left: 0, bottom: 0, radius: 24, deg: 90, directionDegs: [0, 270] },
      ]}
      fill="#1A1A1A"
      extraBackgrounds={[`url('${publicAsset("assets/dashboard/ui/g3.rotate.svg")}') no-repeat right 10px top 0/ 192px 22px`]}
    >
      <div className={styles.listItemInner}>
        <div className={styles.cover}>
          <img src={displayItem.coverSrc} alt={displayItem.dobName} style={{ objectFit: "cover" }} />
        </div>

        <div className={styles.header}>
          <div>
            <div className={styles.itemName}>{getDisplayText(displayItem.dobName)}</div>
            <div className={clsx(styles.clusterLink, { [styles.clusterLinkEnable]: !!displayItem.contractAddress })}>
              <ChainHash hash={displayItem.contractAddress || undefined} className={styles.clusterLinkInner}>
                <>
                  <span>Cluster Hash:</span>
                  {displayItem.contractAddress ? (
                    <>
                      <span>{displayItem.contractAddress.slice(0, 11)}...{displayItem.contractAddress.slice(-4)}</span>
                      <ExternalLinkIcon />
                    </>
                  ) : (
                    <span>-</span>
                  )}
                </>
              </ChainHash>
            </div>

            <div className={styles.promoter}>
              <img src={displayItem.issuerLogoSrc} alt="" />
              <span>{getDisplayText(displayItem.issuer)}</span>
            </div>
          </div>

          <div className={styles.infos}>
            <div className={styles.info}>
              <div className={styles.label}>Tier</div>
              <div className={styles.value}>
                {tierLogoSrc ? (
                  <img src={tierLogoSrc} className={styles.tier} />
                ) : (
                  <div className={styles.valueInner}>
                    <span className={styles.textWhite}>-</span>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.label}>Listing Time</div>
              <div className={styles.value}>
                <div className={styles.valueInner}>
                  <span className={styles.textWhite} title={displayItem.openTime || "-"}>
                    {renderDate(displayItem.openTime || "")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.dobGroups}>
          {displayItem.groups.map((dobGroup) => (
            <GroupCard
              key={dobGroup.key}
              rarity={dobGroup.rarity}
              items={dobGroup.items}
              onDobAction={mode === "redeem" ? onDobAction : undefined}
            />
          ))}
        </div>
      </div>
    </MintpadViewBox>
  );
}
