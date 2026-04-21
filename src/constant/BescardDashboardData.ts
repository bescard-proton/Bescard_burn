export type DashboardAsset = {
  sourceValue: string
  cdnId: string
  extension: string
  fileName: string
  sourceUrl: string
  publicPath: string
}

export type DashboardItem = {
  dobItemId: string
  dataType: number
  dataContent: string
  dobName: string
  rareType: number
  floorPrice: string
  floorPriceValue: number | null
  asset: DashboardAsset | null
}

export type DashboardGroup = {
  name: string
  count: number
  items: DashboardItem[]
}

export type DashboardCluster = {
  clusterId: string
  dobId: string
  dobType: number
  dobName: string
  openTime: string
  contractAddress: string
  issuer: string
  issuerLogo: string
  onShelves: boolean
  floorPrice: string
  floorPriceValue: number | null
  change24H: string
  change24HValue: number | null
  dobTier: string
  isAirDrop: boolean
  coverAsset: DashboardAsset | null
  itemCount: number
  groupNames: string[]
  groups: DashboardGroup[]
}

export const dashboardStats = {
  "totalClusters": 26,
  "onShelves": 8,
  "airDrops": 11,
  "totalItems": 174
} as const

export const dashboardClusters: DashboardCluster[] = [
  {
    "clusterId": "0x0a777f03bf231690deaf363a2f28a1ccd9a966160d525eb973b48c101cbfa98e",
    "dobId": "0692402d-31dd-7000-9927-da960d988145",
    "dobType": 3,
    "dobName": "Word Puzzle voucher",
    "openTime": "2025-11-24T07:15:00+00:00",
    "contractAddress": "0xc539880aa78c44dc5fc5c3afa7a701632b441b975514e5445dd94e81dc5dc983",
    "issuer": "BesCARD",
    "issuerLogo": "1-57dd8a34d7284fe29e2c7a09d87411b3-EhOq4VvT_400x400.jpg",
    "onShelves": true,
    "floorPrice": "",
    "floorPriceValue": null,
    "change24H": "",
    "change24HValue": null,
    "dobTier": "S",
    "isAirDrop": true,
    "coverAsset": {
      "sourceValue": "1-c91e84ba3e384722932a35587a099506-20251124-141326.png",
      "cdnId": "c91e84ba3e384722932a35587a099506",
      "extension": ".png",
      "fileName": "c91e84ba3e384722932a35587a099506.png",
      "sourceUrl": "https://bescard.com/cdn/c91e84ba3e384722932a35587a099506",
      "publicPath": "assets/dashboard/clusters/0x0a777f03bf231690deaf363a2f28a1ccd9a966160d525eb973b48c101cbfa98e/c91e84ba3e384722932a35587a099506.png"
    },
    "itemCount": 3,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "0692402d-31dd-7001-94c9-c3eba4b1fe10",
            "dataType": 4,
            "dataContent": "1-55e1ef76e6fd4395a7f8e3fc4efc722a-20251124-105214.png",
            "dobName": "Winter Miracle",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-55e1ef76e6fd4395a7f8e3fc4efc722a-20251124-105214.png",
              "cdnId": "55e1ef76e6fd4395a7f8e3fc4efc722a",
              "extension": ".png",
              "fileName": "55e1ef76e6fd4395a7f8e3fc4efc722a.png",
              "sourceUrl": "https://bescard.com/cdn/55e1ef76e6fd4395a7f8e3fc4efc722a",
              "publicPath": "assets/dashboard/clusters/0x0a777f03bf231690deaf363a2f28a1ccd9a966160d525eb973b48c101cbfa98e/items/55e1ef76e6fd4395a7f8e3fc4efc722a.png"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "0692402d-31dd-7002-998e-2576b91451c9",
            "dataType": 4,
            "dataContent": "1-cdc3956fe6934a348c5b5def2d8f6894-20251124-105224.png",
            "dobName": "Reindeer's Treasure",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-cdc3956fe6934a348c5b5def2d8f6894-20251124-105224.png",
              "cdnId": "cdc3956fe6934a348c5b5def2d8f6894",
              "extension": ".png",
              "fileName": "cdc3956fe6934a348c5b5def2d8f6894.png",
              "sourceUrl": "https://bescard.com/cdn/cdc3956fe6934a348c5b5def2d8f6894",
              "publicPath": "assets/dashboard/clusters/0x0a777f03bf231690deaf363a2f28a1ccd9a966160d525eb973b48c101cbfa98e/items/cdc3956fe6934a348c5b5def2d8f6894.png"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 1,
        "items": [
          {
            "dobItemId": "0692402d-31dd-7003-95c4-a681f9766857",
            "dataType": 4,
            "dataContent": "1-633cc30919fd4f57ac539b26703bfb43-20251124-105231.png",
            "dobName": "Snowflake Blessing",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-633cc30919fd4f57ac539b26703bfb43-20251124-105231.png",
              "cdnId": "633cc30919fd4f57ac539b26703bfb43",
              "extension": ".png",
              "fileName": "633cc30919fd4f57ac539b26703bfb43.png",
              "sourceUrl": "https://bescard.com/cdn/633cc30919fd4f57ac539b26703bfb43",
              "publicPath": "assets/dashboard/clusters/0x0a777f03bf231690deaf363a2f28a1ccd9a966160d525eb973b48c101cbfa98e/items/633cc30919fd4f57ac539b26703bfb43.png"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94",
    "dobId": "06923f0e-51c6-7000-b196-3b1ce0c9e583",
    "dobType": 3,
    "dobName": "Word Puzzle",
    "openTime": "2025-11-24T07:00:00+00:00",
    "contractAddress": "0xae11a255530beccba0cd6b9c498b2d04edf54b96fab709c1a86fa09b842e238c",
    "issuer": "BesCARD",
    "issuerLogo": "1-4f46016cfa2b414f8c33db70654babf9-EhOq4VvT_400x400.jpg",
    "onShelves": true,
    "floorPrice": "2",
    "floorPriceValue": 2,
    "change24H": "0",
    "change24HValue": 0,
    "dobTier": "A",
    "isAirDrop": false,
    "coverAsset": {
      "sourceValue": "1-7d7a072264674ed782728ae867757d40-抽奖盲盒封面.jpeg",
      "cdnId": "7d7a072264674ed782728ae867757d40",
      "extension": ".jpeg",
      "fileName": "7d7a072264674ed782728ae867757d40.jpeg",
      "sourceUrl": "https://bescard.com/cdn/7d7a072264674ed782728ae867757d40",
      "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/7d7a072264674ed782728ae867757d40.jpeg"
    },
    "itemCount": 26,
    "groupNames": [
      "Common"
    ],
    "groups": [
      {
        "name": "Common",
        "count": 26,
        "items": [
          {
            "dobItemId": "06923f0e-51cb-700b-8261-6bca9f15a605",
            "dataType": 4,
            "dataContent": "1-660afcfbc0ff49d6b847002e97edb0bf-N.jpg",
            "dobName": "N",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-660afcfbc0ff49d6b847002e97edb0bf-N.jpg",
              "cdnId": "660afcfbc0ff49d6b847002e97edb0bf",
              "extension": ".jpg",
              "fileName": "660afcfbc0ff49d6b847002e97edb0bf.jpg",
              "sourceUrl": "https://bescard.com/cdn/660afcfbc0ff49d6b847002e97edb0bf",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/660afcfbc0ff49d6b847002e97edb0bf.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7017-bec8-b13c9dd0cf99",
            "dataType": 4,
            "dataContent": "1-16b3a35ff79440bc978f47930a16e469-Z.jpg",
            "dobName": "Z",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-16b3a35ff79440bc978f47930a16e469-Z.jpg",
              "cdnId": "16b3a35ff79440bc978f47930a16e469",
              "extension": ".jpg",
              "fileName": "16b3a35ff79440bc978f47930a16e469.jpg",
              "sourceUrl": "https://bescard.com/cdn/16b3a35ff79440bc978f47930a16e469",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/16b3a35ff79440bc978f47930a16e469.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7016-bf13-a29b19a2b50c",
            "dataType": 4,
            "dataContent": "1-7f2b43bebeb04b909f8df2536bf7eb59-Y.jpg",
            "dobName": "Y",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-7f2b43bebeb04b909f8df2536bf7eb59-Y.jpg",
              "cdnId": "7f2b43bebeb04b909f8df2536bf7eb59",
              "extension": ".jpg",
              "fileName": "7f2b43bebeb04b909f8df2536bf7eb59.jpg",
              "sourceUrl": "https://bescard.com/cdn/7f2b43bebeb04b909f8df2536bf7eb59",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/7f2b43bebeb04b909f8df2536bf7eb59.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7015-b89e-0d26f729dbea",
            "dataType": 4,
            "dataContent": "1-1983e38eebb449e8838b9c14f0462181-X.jpg",
            "dobName": "X",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-1983e38eebb449e8838b9c14f0462181-X.jpg",
              "cdnId": "1983e38eebb449e8838b9c14f0462181",
              "extension": ".jpg",
              "fileName": "1983e38eebb449e8838b9c14f0462181.jpg",
              "sourceUrl": "https://bescard.com/cdn/1983e38eebb449e8838b9c14f0462181",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/1983e38eebb449e8838b9c14f0462181.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7014-b3c2-1e080b063853",
            "dataType": 4,
            "dataContent": "1-aca22238c7e243cebe90d549a8e1a1f6-W.jpg",
            "dobName": "W",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-aca22238c7e243cebe90d549a8e1a1f6-W.jpg",
              "cdnId": "aca22238c7e243cebe90d549a8e1a1f6",
              "extension": ".jpg",
              "fileName": "aca22238c7e243cebe90d549a8e1a1f6.jpg",
              "sourceUrl": "https://bescard.com/cdn/aca22238c7e243cebe90d549a8e1a1f6",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/aca22238c7e243cebe90d549a8e1a1f6.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7013-b1bc-17c6c235a9cb",
            "dataType": 4,
            "dataContent": "1-f7c7b2be2bd245f1ae35fc627f2f5fa2-V.jpg",
            "dobName": "V",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-f7c7b2be2bd245f1ae35fc627f2f5fa2-V.jpg",
              "cdnId": "f7c7b2be2bd245f1ae35fc627f2f5fa2",
              "extension": ".jpg",
              "fileName": "f7c7b2be2bd245f1ae35fc627f2f5fa2.jpg",
              "sourceUrl": "https://bescard.com/cdn/f7c7b2be2bd245f1ae35fc627f2f5fa2",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/f7c7b2be2bd245f1ae35fc627f2f5fa2.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7012-b15b-bdce8aa1f15b",
            "dataType": 4,
            "dataContent": "1-e826bef2956d451995c1efc214d5d855-U.jpg",
            "dobName": "U",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-e826bef2956d451995c1efc214d5d855-U.jpg",
              "cdnId": "e826bef2956d451995c1efc214d5d855",
              "extension": ".jpg",
              "fileName": "e826bef2956d451995c1efc214d5d855.jpg",
              "sourceUrl": "https://bescard.com/cdn/e826bef2956d451995c1efc214d5d855",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/e826bef2956d451995c1efc214d5d855.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7011-8b2f-3cbfa4df085e",
            "dataType": 4,
            "dataContent": "1-3fe5c7bdc9ba4162a94bd978e82a5384-T.jpg",
            "dobName": "T",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-3fe5c7bdc9ba4162a94bd978e82a5384-T.jpg",
              "cdnId": "3fe5c7bdc9ba4162a94bd978e82a5384",
              "extension": ".jpg",
              "fileName": "3fe5c7bdc9ba4162a94bd978e82a5384.jpg",
              "sourceUrl": "https://bescard.com/cdn/3fe5c7bdc9ba4162a94bd978e82a5384",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/3fe5c7bdc9ba4162a94bd978e82a5384.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7010-9823-63b565462856",
            "dataType": 4,
            "dataContent": "1-a2e3fe3976474b3f9bea37073754a1fd-S.jpg",
            "dobName": "S",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-a2e3fe3976474b3f9bea37073754a1fd-S.jpg",
              "cdnId": "a2e3fe3976474b3f9bea37073754a1fd",
              "extension": ".jpg",
              "fileName": "a2e3fe3976474b3f9bea37073754a1fd.jpg",
              "sourceUrl": "https://bescard.com/cdn/a2e3fe3976474b3f9bea37073754a1fd",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/a2e3fe3976474b3f9bea37073754a1fd.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-700f-a6a2-953b044f507b",
            "dataType": 4,
            "dataContent": "1-dc9cb7a8609d4a23b04e83842b87cefb-R.jpg",
            "dobName": "R",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-dc9cb7a8609d4a23b04e83842b87cefb-R.jpg",
              "cdnId": "dc9cb7a8609d4a23b04e83842b87cefb",
              "extension": ".jpg",
              "fileName": "dc9cb7a8609d4a23b04e83842b87cefb.jpg",
              "sourceUrl": "https://bescard.com/cdn/dc9cb7a8609d4a23b04e83842b87cefb",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/dc9cb7a8609d4a23b04e83842b87cefb.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-700e-a436-521e2fe4ea93",
            "dataType": 4,
            "dataContent": "1-c83e4004ad98464ba09a2d65c5dc1c3f-Q.jpg",
            "dobName": "Q",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-c83e4004ad98464ba09a2d65c5dc1c3f-Q.jpg",
              "cdnId": "c83e4004ad98464ba09a2d65c5dc1c3f",
              "extension": ".jpg",
              "fileName": "c83e4004ad98464ba09a2d65c5dc1c3f.jpg",
              "sourceUrl": "https://bescard.com/cdn/c83e4004ad98464ba09a2d65c5dc1c3f",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/c83e4004ad98464ba09a2d65c5dc1c3f.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-700d-a965-1dc46c24e4db",
            "dataType": 4,
            "dataContent": "1-03ecc74120544d9685b7ca629c4d68e2-P.jpg",
            "dobName": "P",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-03ecc74120544d9685b7ca629c4d68e2-P.jpg",
              "cdnId": "03ecc74120544d9685b7ca629c4d68e2",
              "extension": ".jpg",
              "fileName": "03ecc74120544d9685b7ca629c4d68e2.jpg",
              "sourceUrl": "https://bescard.com/cdn/03ecc74120544d9685b7ca629c4d68e2",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/03ecc74120544d9685b7ca629c4d68e2.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-700c-8b1a-8dd2db963fd4",
            "dataType": 4,
            "dataContent": "1-94bad306ddfc45d6a07827e6ab2d06c9-O.jpg",
            "dobName": "O",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-94bad306ddfc45d6a07827e6ab2d06c9-O.jpg",
              "cdnId": "94bad306ddfc45d6a07827e6ab2d06c9",
              "extension": ".jpg",
              "fileName": "94bad306ddfc45d6a07827e6ab2d06c9.jpg",
              "sourceUrl": "https://bescard.com/cdn/94bad306ddfc45d6a07827e6ab2d06c9",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/94bad306ddfc45d6a07827e6ab2d06c9.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51c7-7000-8781-2f8034be9dbf",
            "dataType": 4,
            "dataContent": "1-4d430a5b1bd043bfb295731da8ba4e4d-A.jpg",
            "dobName": "A",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-4d430a5b1bd043bfb295731da8ba4e4d-A.jpg",
              "cdnId": "4d430a5b1bd043bfb295731da8ba4e4d",
              "extension": ".jpg",
              "fileName": "4d430a5b1bd043bfb295731da8ba4e4d.jpg",
              "sourceUrl": "https://bescard.com/cdn/4d430a5b1bd043bfb295731da8ba4e4d",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/4d430a5b1bd043bfb295731da8ba4e4d.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-700a-a9e8-97d92d7465fd",
            "dataType": 4,
            "dataContent": "1-05800832de614cef92df5bf282d69f62-M.jpg",
            "dobName": "M",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-05800832de614cef92df5bf282d69f62-M.jpg",
              "cdnId": "05800832de614cef92df5bf282d69f62",
              "extension": ".jpg",
              "fileName": "05800832de614cef92df5bf282d69f62.jpg",
              "sourceUrl": "https://bescard.com/cdn/05800832de614cef92df5bf282d69f62",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/05800832de614cef92df5bf282d69f62.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7009-a79b-87aae94433e3",
            "dataType": 4,
            "dataContent": "1-f0de4ad62fb641db89a95b7f5c1ca187-L.jpg",
            "dobName": "L",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-f0de4ad62fb641db89a95b7f5c1ca187-L.jpg",
              "cdnId": "f0de4ad62fb641db89a95b7f5c1ca187",
              "extension": ".jpg",
              "fileName": "f0de4ad62fb641db89a95b7f5c1ca187.jpg",
              "sourceUrl": "https://bescard.com/cdn/f0de4ad62fb641db89a95b7f5c1ca187",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/f0de4ad62fb641db89a95b7f5c1ca187.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7008-9626-6909969eb2bd",
            "dataType": 4,
            "dataContent": "1-32c7e8dd4ad34ea9800bb020d6ead0c4-K.jpg",
            "dobName": "K",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-32c7e8dd4ad34ea9800bb020d6ead0c4-K.jpg",
              "cdnId": "32c7e8dd4ad34ea9800bb020d6ead0c4",
              "extension": ".jpg",
              "fileName": "32c7e8dd4ad34ea9800bb020d6ead0c4.jpg",
              "sourceUrl": "https://bescard.com/cdn/32c7e8dd4ad34ea9800bb020d6ead0c4",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/32c7e8dd4ad34ea9800bb020d6ead0c4.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7007-86d6-0755ca014ab1",
            "dataType": 4,
            "dataContent": "1-624350e4909e4ba48136ce28d65c2d29-J.jpg",
            "dobName": "J",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-624350e4909e4ba48136ce28d65c2d29-J.jpg",
              "cdnId": "624350e4909e4ba48136ce28d65c2d29",
              "extension": ".jpg",
              "fileName": "624350e4909e4ba48136ce28d65c2d29.jpg",
              "sourceUrl": "https://bescard.com/cdn/624350e4909e4ba48136ce28d65c2d29",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/624350e4909e4ba48136ce28d65c2d29.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7006-a4f4-62c828a9f915",
            "dataType": 4,
            "dataContent": "1-4ecdec5526a04ab4bce8fcd0af45cfe0-I.jpg",
            "dobName": "I",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-4ecdec5526a04ab4bce8fcd0af45cfe0-I.jpg",
              "cdnId": "4ecdec5526a04ab4bce8fcd0af45cfe0",
              "extension": ".jpg",
              "fileName": "4ecdec5526a04ab4bce8fcd0af45cfe0.jpg",
              "sourceUrl": "https://bescard.com/cdn/4ecdec5526a04ab4bce8fcd0af45cfe0",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/4ecdec5526a04ab4bce8fcd0af45cfe0.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7005-aa31-a8a5570610e6",
            "dataType": 4,
            "dataContent": "1-6fa95eea90744cb8a263894f2f03ddae-H.jpg",
            "dobName": "H",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-6fa95eea90744cb8a263894f2f03ddae-H.jpg",
              "cdnId": "6fa95eea90744cb8a263894f2f03ddae",
              "extension": ".jpg",
              "fileName": "6fa95eea90744cb8a263894f2f03ddae.jpg",
              "sourceUrl": "https://bescard.com/cdn/6fa95eea90744cb8a263894f2f03ddae",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/6fa95eea90744cb8a263894f2f03ddae.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7004-8ed2-48334c2c4e87",
            "dataType": 4,
            "dataContent": "1-8007fd70accc40f2a8072425c5f6d4c4-G.jpg",
            "dobName": "G",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-8007fd70accc40f2a8072425c5f6d4c4-G.jpg",
              "cdnId": "8007fd70accc40f2a8072425c5f6d4c4",
              "extension": ".jpg",
              "fileName": "8007fd70accc40f2a8072425c5f6d4c4.jpg",
              "sourceUrl": "https://bescard.com/cdn/8007fd70accc40f2a8072425c5f6d4c4",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/8007fd70accc40f2a8072425c5f6d4c4.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7003-b6f7-4b8d7b1063ba",
            "dataType": 4,
            "dataContent": "1-bfeaac78cb774c15aebbc4deb8d31111-F.jpg",
            "dobName": "F",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-bfeaac78cb774c15aebbc4deb8d31111-F.jpg",
              "cdnId": "bfeaac78cb774c15aebbc4deb8d31111",
              "extension": ".jpg",
              "fileName": "bfeaac78cb774c15aebbc4deb8d31111.jpg",
              "sourceUrl": "https://bescard.com/cdn/bfeaac78cb774c15aebbc4deb8d31111",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/bfeaac78cb774c15aebbc4deb8d31111.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7002-8f22-aafe5011900e",
            "dataType": 4,
            "dataContent": "1-85a4e5c674b14f6f8133289d19a3b0d5-E.jpg",
            "dobName": "E",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-85a4e5c674b14f6f8133289d19a3b0d5-E.jpg",
              "cdnId": "85a4e5c674b14f6f8133289d19a3b0d5",
              "extension": ".jpg",
              "fileName": "85a4e5c674b14f6f8133289d19a3b0d5.jpg",
              "sourceUrl": "https://bescard.com/cdn/85a4e5c674b14f6f8133289d19a3b0d5",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/85a4e5c674b14f6f8133289d19a3b0d5.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7001-9f94-beeab040f22f",
            "dataType": 4,
            "dataContent": "1-85a02a304f2a442fb5e756752a7cc9fb-D.jpg",
            "dobName": "D",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-85a02a304f2a442fb5e756752a7cc9fb-D.jpg",
              "cdnId": "85a02a304f2a442fb5e756752a7cc9fb",
              "extension": ".jpg",
              "fileName": "85a02a304f2a442fb5e756752a7cc9fb.jpg",
              "sourceUrl": "https://bescard.com/cdn/85a02a304f2a442fb5e756752a7cc9fb",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/85a02a304f2a442fb5e756752a7cc9fb.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51cb-7000-87d8-7779af80fc7e",
            "dataType": 4,
            "dataContent": "1-1aa7d8c726a4462cb733569a1364dd7b-C.jpg",
            "dobName": "C",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-1aa7d8c726a4462cb733569a1364dd7b-C.jpg",
              "cdnId": "1aa7d8c726a4462cb733569a1364dd7b",
              "extension": ".jpg",
              "fileName": "1aa7d8c726a4462cb733569a1364dd7b.jpg",
              "sourceUrl": "https://bescard.com/cdn/1aa7d8c726a4462cb733569a1364dd7b",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/1aa7d8c726a4462cb733569a1364dd7b.jpg"
            }
          },
          {
            "dobItemId": "06923f0e-51c9-7000-b9ac-82f03fa8bf96",
            "dataType": 4,
            "dataContent": "1-21aa72951cff498da7a4550bbf5622d6-B.jpg",
            "dobName": "B",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-21aa72951cff498da7a4550bbf5622d6-B.jpg",
              "cdnId": "21aa72951cff498da7a4550bbf5622d6",
              "extension": ".jpg",
              "fileName": "21aa72951cff498da7a4550bbf5622d6.jpg",
              "sourceUrl": "https://bescard.com/cdn/21aa72951cff498da7a4550bbf5622d6",
              "publicPath": "assets/dashboard/clusters/0xe1fc04c65ed9df7ff634dc2daeb45cb599d55ee059cd9c47b4e19c6fb43bfa94/items/21aa72951cff498da7a4550bbf5622d6.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0xefd59e0ff3b54b6a6a48d58751fff230f736f29c385ec394fe8031faadae39f9",
    "dobId": "06915421-120b-7000-be06-126707e0f632",
    "dobType": 3,
    "dobName": "CKB Gacha",
    "openTime": "2025-11-13T07:00:00+00:00",
    "contractAddress": "0x2bbe3d94eedcd21a954843975ef8d685e10967d27a97188e91ddad5e49944fb4",
    "issuer": "BesCARD",
    "issuerLogo": "1-e33a70cf69ec44e1b8fc4946ab836164-bByl-EGf_400x400.jpg",
    "onShelves": true,
    "floorPrice": "",
    "floorPriceValue": null,
    "change24H": "",
    "change24HValue": null,
    "dobTier": "A",
    "isAirDrop": false,
    "coverAsset": {
      "sourceValue": "1-ba592f52f27f42a19a8d47e0762c0a98-img_v3_02ru_bfacc80a-6715-420e-a70d-1fb92fc3a93g.gif",
      "cdnId": "ba592f52f27f42a19a8d47e0762c0a98",
      "extension": ".gif",
      "fileName": "ba592f52f27f42a19a8d47e0762c0a98.gif",
      "sourceUrl": "https://bescard.com/cdn/ba592f52f27f42a19a8d47e0762c0a98",
      "publicPath": "assets/dashboard/clusters/0xefd59e0ff3b54b6a6a48d58751fff230f736f29c385ec394fe8031faadae39f9/ba592f52f27f42a19a8d47e0762c0a98.gif"
    },
    "itemCount": 6,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "06915421-1251-7000-9c3d-b5af04150b68",
            "dataType": 4,
            "dataContent": "1-e2f103ae785446bcb5111ba2735fe9ab-Radiant Aegis.gif",
            "dobName": "Radiant Aegis",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-e2f103ae785446bcb5111ba2735fe9ab-Radiant Aegis.gif",
              "cdnId": "e2f103ae785446bcb5111ba2735fe9ab",
              "extension": ".gif",
              "fileName": "e2f103ae785446bcb5111ba2735fe9ab.gif",
              "sourceUrl": "https://bescard.com/cdn/e2f103ae785446bcb5111ba2735fe9ab",
              "publicPath": "assets/dashboard/clusters/0xefd59e0ff3b54b6a6a48d58751fff230f736f29c385ec394fe8031faadae39f9/items/e2f103ae785446bcb5111ba2735fe9ab.gif"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "06915421-1273-7000-bc52-854c8b293015",
            "dataType": 4,
            "dataContent": "1-74573f3ab7bb4b2b89b3656e73592df4-Lucky Gleam.gif",
            "dobName": "Lucky Gleam",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-74573f3ab7bb4b2b89b3656e73592df4-Lucky Gleam.gif",
              "cdnId": "74573f3ab7bb4b2b89b3656e73592df4",
              "extension": ".gif",
              "fileName": "74573f3ab7bb4b2b89b3656e73592df4.gif",
              "sourceUrl": "https://bescard.com/cdn/74573f3ab7bb4b2b89b3656e73592df4",
              "publicPath": "assets/dashboard/clusters/0xefd59e0ff3b54b6a6a48d58751fff230f736f29c385ec394fe8031faadae39f9/items/74573f3ab7bb4b2b89b3656e73592df4.gif"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 3,
        "items": [
          {
            "dobItemId": "06915421-1273-7001-8af6-6be0ddc8cd99",
            "dataType": 4,
            "dataContent": "1-738fdc445d4f4610a72a10861b2f2ce5-Baigujing.jpg",
            "dobName": "Baigujing",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-738fdc445d4f4610a72a10861b2f2ce5-Baigujing.jpg",
              "cdnId": "738fdc445d4f4610a72a10861b2f2ce5",
              "extension": ".jpg",
              "fileName": "738fdc445d4f4610a72a10861b2f2ce5.jpg",
              "sourceUrl": "https://bescard.com/cdn/738fdc445d4f4610a72a10861b2f2ce5",
              "publicPath": "assets/dashboard/clusters/0xefd59e0ff3b54b6a6a48d58751fff230f736f29c385ec394fe8031faadae39f9/items/738fdc445d4f4610a72a10861b2f2ce5.jpg"
            }
          },
          {
            "dobItemId": "06915421-1273-7002-ac37-6a701443ff71",
            "dataType": 4,
            "dataContent": "1-3538b84472bd43f4ac63fe9b09b099e4-Tieshan Gongzhu.jpg",
            "dobName": "Tieshan Gongzhu",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-3538b84472bd43f4ac63fe9b09b099e4-Tieshan Gongzhu.jpg",
              "cdnId": "3538b84472bd43f4ac63fe9b09b099e4",
              "extension": ".jpg",
              "fileName": "3538b84472bd43f4ac63fe9b09b099e4.jpg",
              "sourceUrl": "https://bescard.com/cdn/3538b84472bd43f4ac63fe9b09b099e4",
              "publicPath": "assets/dashboard/clusters/0xefd59e0ff3b54b6a6a48d58751fff230f736f29c385ec394fe8031faadae39f9/items/3538b84472bd43f4ac63fe9b09b099e4.jpg"
            }
          },
          {
            "dobItemId": "06915421-1273-7003-afa8-4180cecd5550",
            "dataType": 4,
            "dataContent": "1-512bdc955ec94413903c0afd3c97f4e9-Xiezijing.jpg",
            "dobName": "Xiezijing",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-512bdc955ec94413903c0afd3c97f4e9-Xiezijing.jpg",
              "cdnId": "512bdc955ec94413903c0afd3c97f4e9",
              "extension": ".jpg",
              "fileName": "512bdc955ec94413903c0afd3c97f4e9.jpg",
              "sourceUrl": "https://bescard.com/cdn/512bdc955ec94413903c0afd3c97f4e9",
              "publicPath": "assets/dashboard/clusters/0xefd59e0ff3b54b6a6a48d58751fff230f736f29c385ec394fe8031faadae39f9/items/512bdc955ec94413903c0afd3c97f4e9.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 1,
        "items": [
          {
            "dobItemId": "06915421-1273-7004-be17-65b4a6ccbf99",
            "dataType": 4,
            "dataContent": "1-efcf4e018db0458eac71cb25e5ea2aff-BesCARD Explorer.jpg",
            "dobName": "BesCARD Explorer",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-efcf4e018db0458eac71cb25e5ea2aff-BesCARD Explorer.jpg",
              "cdnId": "efcf4e018db0458eac71cb25e5ea2aff",
              "extension": ".jpg",
              "fileName": "efcf4e018db0458eac71cb25e5ea2aff.jpg",
              "sourceUrl": "https://bescard.com/cdn/efcf4e018db0458eac71cb25e5ea2aff",
              "publicPath": "assets/dashboard/clusters/0xefd59e0ff3b54b6a6a48d58751fff230f736f29c385ec394fe8031faadae39f9/items/efcf4e018db0458eac71cb25e5ea2aff.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0x7231e4834382f15bf218e807b20a88433ffdce8919cf8d8715625cbc035361bc",
    "dobId": "06908404-2167-7000-ba07-e2671d248003",
    "dobType": 3,
    "dobName": "Gold Gacha Ⅶ",
    "openTime": "2025-11-03T07:00:00+00:00",
    "contractAddress": "0xa9bbcade38d1df0b47f92f511dacbccd41563a60b329016f39449af36901649b",
    "issuer": "BesCARD",
    "issuerLogo": "1-649ca469853f4a6d8207e73ba386bb3f-bByl-EGf_400x400.jpg",
    "onShelves": false,
    "floorPrice": "",
    "floorPriceValue": null,
    "change24H": "",
    "change24HValue": null,
    "dobTier": "A",
    "isAirDrop": false,
    "coverAsset": {
      "sourceValue": "1-746428a9aca84f90956413b1f8a3a291-盲盒封面.gif",
      "cdnId": "746428a9aca84f90956413b1f8a3a291",
      "extension": ".gif",
      "fileName": "746428a9aca84f90956413b1f8a3a291.gif",
      "sourceUrl": "https://bescard.com/cdn/746428a9aca84f90956413b1f8a3a291",
      "publicPath": "assets/dashboard/clusters/0x7231e4834382f15bf218e807b20a88433ffdce8919cf8d8715625cbc035361bc/746428a9aca84f90956413b1f8a3a291.gif"
    },
    "itemCount": 5,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "06908404-21c0-7000-9ae4-98ffbdbddf51",
            "dataType": 4,
            "dataContent": "1-9745e2c2be6548169aba0cffa5c6d4d3-Legendary.gif",
            "dobName": "Fortune Flake",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-9745e2c2be6548169aba0cffa5c6d4d3-Legendary.gif",
              "cdnId": "9745e2c2be6548169aba0cffa5c6d4d3",
              "extension": ".gif",
              "fileName": "9745e2c2be6548169aba0cffa5c6d4d3.gif",
              "sourceUrl": "https://bescard.com/cdn/9745e2c2be6548169aba0cffa5c6d4d3",
              "publicPath": "assets/dashboard/clusters/0x7231e4834382f15bf218e807b20a88433ffdce8919cf8d8715625cbc035361bc/items/9745e2c2be6548169aba0cffa5c6d4d3.gif"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "06908404-21e3-7000-9406-de9e842fef9b",
            "dataType": 4,
            "dataContent": "1-6693cbb0b5394b2a9f2277970c9bfa6a-Epic.gif",
            "dobName": "Shimmer Prize",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-6693cbb0b5394b2a9f2277970c9bfa6a-Epic.gif",
              "cdnId": "6693cbb0b5394b2a9f2277970c9bfa6a",
              "extension": ".gif",
              "fileName": "6693cbb0b5394b2a9f2277970c9bfa6a.gif",
              "sourceUrl": "https://bescard.com/cdn/6693cbb0b5394b2a9f2277970c9bfa6a",
              "publicPath": "assets/dashboard/clusters/0x7231e4834382f15bf218e807b20a88433ffdce8919cf8d8715625cbc035361bc/items/6693cbb0b5394b2a9f2277970c9bfa6a.gif"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 2,
        "items": [
          {
            "dobItemId": "06908404-21e4-7000-a048-7d05480718b5",
            "dataType": 4,
            "dataContent": "1-fbf55a00a3fa45a1bca6c041c50e97df-Jinchi Zhanglao.jpg",
            "dobName": "Jinchi Zhanglao",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-fbf55a00a3fa45a1bca6c041c50e97df-Jinchi Zhanglao.jpg",
              "cdnId": "fbf55a00a3fa45a1bca6c041c50e97df",
              "extension": ".jpg",
              "fileName": "fbf55a00a3fa45a1bca6c041c50e97df.jpg",
              "sourceUrl": "https://bescard.com/cdn/fbf55a00a3fa45a1bca6c041c50e97df",
              "publicPath": "assets/dashboard/clusters/0x7231e4834382f15bf218e807b20a88433ffdce8919cf8d8715625cbc035361bc/items/fbf55a00a3fa45a1bca6c041c50e97df.jpg"
            }
          },
          {
            "dobItemId": "06908404-21e4-7001-88a1-32d5933bb4df",
            "dataType": 4,
            "dataContent": "1-d138d680ee524d1887ee1aecacdced8e-Nverguo Guowang.jpg",
            "dobName": "Nverguo Guowang",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-d138d680ee524d1887ee1aecacdced8e-Nverguo Guowang.jpg",
              "cdnId": "d138d680ee524d1887ee1aecacdced8e",
              "extension": ".jpg",
              "fileName": "d138d680ee524d1887ee1aecacdced8e.jpg",
              "sourceUrl": "https://bescard.com/cdn/d138d680ee524d1887ee1aecacdced8e",
              "publicPath": "assets/dashboard/clusters/0x7231e4834382f15bf218e807b20a88433ffdce8919cf8d8715625cbc035361bc/items/d138d680ee524d1887ee1aecacdced8e.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 1,
        "items": [
          {
            "dobItemId": "06908404-21e4-7002-b5dd-dfd9f93ba3c9",
            "dataType": 4,
            "dataContent": "1-e7ec0ec577ec47109ea8fe6e6ae5d9c4-BesCARD Explorer.jpg",
            "dobName": "BesCARD Explorer",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-e7ec0ec577ec47109ea8fe6e6ae5d9c4-BesCARD Explorer.jpg",
              "cdnId": "e7ec0ec577ec47109ea8fe6e6ae5d9c4",
              "extension": ".jpg",
              "fileName": "e7ec0ec577ec47109ea8fe6e6ae5d9c4.jpg",
              "sourceUrl": "https://bescard.com/cdn/e7ec0ec577ec47109ea8fe6e6ae5d9c4",
              "publicPath": "assets/dashboard/clusters/0x7231e4834382f15bf218e807b20a88433ffdce8919cf8d8715625cbc035361bc/items/e7ec0ec577ec47109ea8fe6e6ae5d9c4.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0xa5116d63f08a5795871ab5e94a0594ef263e713a95e4d50b9220f7352fa6aac5",
    "dobId": "06901a82-b08a-7000-ad66-00cef2fb7211",
    "dobType": 3,
    "dobName": "Vampire Gacha",
    "openTime": "2025-10-29T07:00:00+00:00",
    "contractAddress": "0x50ae5ae97933798f5a15211b53ab6bf07a4b7be366b56011e7e93d7fdaa0c6b9",
    "issuer": "BesCARD",
    "issuerLogo": "1-275c5074dc184847abb8611ffe01932f-bByl-EGf_400x400.jpg",
    "onShelves": false,
    "floorPrice": "",
    "floorPriceValue": null,
    "change24H": "",
    "change24HValue": null,
    "dobTier": "A",
    "isAirDrop": false,
    "coverAsset": {
      "sourceValue": "1-7a453701c3bf4f8ea485c58355710fe5-盲盒封面.gif",
      "cdnId": "7a453701c3bf4f8ea485c58355710fe5",
      "extension": ".gif",
      "fileName": "7a453701c3bf4f8ea485c58355710fe5.gif",
      "sourceUrl": "https://bescard.com/cdn/7a453701c3bf4f8ea485c58355710fe5",
      "publicPath": "assets/dashboard/clusters/0xa5116d63f08a5795871ab5e94a0594ef263e713a95e4d50b9220f7352fa6aac5/7a453701c3bf4f8ea485c58355710fe5.gif"
    },
    "itemCount": 4,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "06901a82-b08b-7000-96a4-708e97438597",
            "dataType": 4,
            "dataContent": "1-e660fcdf56784b87aa89e41892268e54-大奖.gif",
            "dobName": "Fortune Flake",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-e660fcdf56784b87aa89e41892268e54-大奖.gif",
              "cdnId": "e660fcdf56784b87aa89e41892268e54",
              "extension": ".gif",
              "fileName": "e660fcdf56784b87aa89e41892268e54.gif",
              "sourceUrl": "https://bescard.com/cdn/e660fcdf56784b87aa89e41892268e54",
              "publicPath": "assets/dashboard/clusters/0xa5116d63f08a5795871ab5e94a0594ef263e713a95e4d50b9220f7352fa6aac5/items/e660fcdf56784b87aa89e41892268e54.gif"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "06901a82-b08c-7000-b4e2-5277e36aff31",
            "dataType": 4,
            "dataContent": "1-078c11734cc64edca494cf75a287887f-小奖.gif",
            "dobName": "Shimmer Prize",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-078c11734cc64edca494cf75a287887f-小奖.gif",
              "cdnId": "078c11734cc64edca494cf75a287887f",
              "extension": ".gif",
              "fileName": "078c11734cc64edca494cf75a287887f.gif",
              "sourceUrl": "https://bescard.com/cdn/078c11734cc64edca494cf75a287887f",
              "publicPath": "assets/dashboard/clusters/0xa5116d63f08a5795871ab5e94a0594ef263e713a95e4d50b9220f7352fa6aac5/items/078c11734cc64edca494cf75a287887f.gif"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 1,
        "items": [
          {
            "dobItemId": "06901a82-b08c-7001-9efd-d658c5d7e668",
            "dataType": 4,
            "dataContent": "1-7a46d83050f34b0a8c45c588de7d8e70-IP卡-Game Time.jpg",
            "dobName": "Game Time",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-7a46d83050f34b0a8c45c588de7d8e70-IP卡-Game Time.jpg",
              "cdnId": "7a46d83050f34b0a8c45c588de7d8e70",
              "extension": ".jpg",
              "fileName": "7a46d83050f34b0a8c45c588de7d8e70.jpg",
              "sourceUrl": "https://bescard.com/cdn/7a46d83050f34b0a8c45c588de7d8e70",
              "publicPath": "assets/dashboard/clusters/0xa5116d63f08a5795871ab5e94a0594ef263e713a95e4d50b9220f7352fa6aac5/items/7a46d83050f34b0a8c45c588de7d8e70.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 1,
        "items": [
          {
            "dobItemId": "06901a82-b08c-7002-b014-0617c2cd71ee",
            "dataType": 4,
            "dataContent": "1-144636034e5a43b59f8c3b6be58c4184-BesCARD Explorer.jpg",
            "dobName": "BesCARD Explorer",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-144636034e5a43b59f8c3b6be58c4184-BesCARD Explorer.jpg",
              "cdnId": "144636034e5a43b59f8c3b6be58c4184",
              "extension": ".jpg",
              "fileName": "144636034e5a43b59f8c3b6be58c4184.jpg",
              "sourceUrl": "https://bescard.com/cdn/144636034e5a43b59f8c3b6be58c4184",
              "publicPath": "assets/dashboard/clusters/0xa5116d63f08a5795871ab5e94a0594ef263e713a95e4d50b9220f7352fa6aac5/items/144636034e5a43b59f8c3b6be58c4184.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0x030cfc8850dd9c1054d3ccab11549636fd9a86941f497d224f4c9229094a3ba4",
    "dobId": "068fb21b-71d6-7000-a32d-e95fbe01b185",
    "dobType": 3,
    "dobName": "Card Claw",
    "openTime": "2025-10-24T07:01:00+00:00",
    "contractAddress": "0xe7547990702819d618483fa7ef33cc54fc1f0b5884b032cda777ede7a82b02a9",
    "issuer": "BesCARD",
    "issuerLogo": "1-d5e72924203543ad9cac2913b2255466-bByl-EGf_400x400.jpg",
    "onShelves": true,
    "floorPrice": "",
    "floorPriceValue": null,
    "change24H": "",
    "change24HValue": null,
    "dobTier": "A",
    "isAirDrop": false,
    "coverAsset": {
      "sourceValue": "1-ff1a2b5c13b54c4e94b97e0f74ae9d6b-盲盒封面.gif",
      "cdnId": "ff1a2b5c13b54c4e94b97e0f74ae9d6b",
      "extension": ".gif",
      "fileName": "ff1a2b5c13b54c4e94b97e0f74ae9d6b.gif",
      "sourceUrl": "https://bescard.com/cdn/ff1a2b5c13b54c4e94b97e0f74ae9d6b",
      "publicPath": "assets/dashboard/clusters/0x030cfc8850dd9c1054d3ccab11549636fd9a86941f497d224f4c9229094a3ba4/ff1a2b5c13b54c4e94b97e0f74ae9d6b.gif"
    },
    "itemCount": 7,
    "groupNames": [
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Rare",
        "count": 6,
        "items": [
          {
            "dobItemId": "068fb21b-71d6-7001-b298-392ee73fbb18",
            "dataType": 4,
            "dataContent": "1-e6edacb9b15e405088e104e9e12b5452-Heixiongjing.jpg",
            "dobName": "Heixiongjing",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-e6edacb9b15e405088e104e9e12b5452-Heixiongjing.jpg",
              "cdnId": "e6edacb9b15e405088e104e9e12b5452",
              "extension": ".jpg",
              "fileName": "e6edacb9b15e405088e104e9e12b5452.jpg",
              "sourceUrl": "https://bescard.com/cdn/e6edacb9b15e405088e104e9e12b5452",
              "publicPath": "assets/dashboard/clusters/0x030cfc8850dd9c1054d3ccab11549636fd9a86941f497d224f4c9229094a3ba4/items/e6edacb9b15e405088e104e9e12b5452.jpg"
            }
          },
          {
            "dobItemId": "068fb21b-71d6-7002-913a-9ba714e6f274",
            "dataType": 4,
            "dataContent": "1-a4a7b0da1fab41a48ceaed3cb06b058b-Jinchi Zhanglao.jpg",
            "dobName": "Jinchi Zhanglao",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-a4a7b0da1fab41a48ceaed3cb06b058b-Jinchi Zhanglao.jpg",
              "cdnId": "a4a7b0da1fab41a48ceaed3cb06b058b",
              "extension": ".jpg",
              "fileName": "a4a7b0da1fab41a48ceaed3cb06b058b.jpg",
              "sourceUrl": "https://bescard.com/cdn/a4a7b0da1fab41a48ceaed3cb06b058b",
              "publicPath": "assets/dashboard/clusters/0x030cfc8850dd9c1054d3ccab11549636fd9a86941f497d224f4c9229094a3ba4/items/a4a7b0da1fab41a48ceaed3cb06b058b.jpg"
            }
          },
          {
            "dobItemId": "068fb21b-71d6-7003-a1a8-667719f904d9",
            "dataType": 4,
            "dataContent": "1-1825ba9e029c4fa9b4338aff862cc8fb-Baigujing.jpg",
            "dobName": "Baigujing",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-1825ba9e029c4fa9b4338aff862cc8fb-Baigujing.jpg",
              "cdnId": "1825ba9e029c4fa9b4338aff862cc8fb",
              "extension": ".jpg",
              "fileName": "1825ba9e029c4fa9b4338aff862cc8fb.jpg",
              "sourceUrl": "https://bescard.com/cdn/1825ba9e029c4fa9b4338aff862cc8fb",
              "publicPath": "assets/dashboard/clusters/0x030cfc8850dd9c1054d3ccab11549636fd9a86941f497d224f4c9229094a3ba4/items/1825ba9e029c4fa9b4338aff862cc8fb.jpg"
            }
          },
          {
            "dobItemId": "068fb21b-71d6-7004-aae6-672b68a2e2fe",
            "dataType": 4,
            "dataContent": "1-5942bd7e695349e491630e555d1d4863-Tieshan Gongzhu.jpg",
            "dobName": "Tieshan Gongzhu",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-5942bd7e695349e491630e555d1d4863-Tieshan Gongzhu.jpg",
              "cdnId": "5942bd7e695349e491630e555d1d4863",
              "extension": ".jpg",
              "fileName": "5942bd7e695349e491630e555d1d4863.jpg",
              "sourceUrl": "https://bescard.com/cdn/5942bd7e695349e491630e555d1d4863",
              "publicPath": "assets/dashboard/clusters/0x030cfc8850dd9c1054d3ccab11549636fd9a86941f497d224f4c9229094a3ba4/items/5942bd7e695349e491630e555d1d4863.jpg"
            }
          },
          {
            "dobItemId": "068fb21b-71d6-7005-b1b2-97ee2a4ec8d9",
            "dataType": 4,
            "dataContent": "1-ca430c0bc1874b11bf19bf675229becd-Xiezijing.jpg",
            "dobName": "Xiezijing",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-ca430c0bc1874b11bf19bf675229becd-Xiezijing.jpg",
              "cdnId": "ca430c0bc1874b11bf19bf675229becd",
              "extension": ".jpg",
              "fileName": "ca430c0bc1874b11bf19bf675229becd.jpg",
              "sourceUrl": "https://bescard.com/cdn/ca430c0bc1874b11bf19bf675229becd",
              "publicPath": "assets/dashboard/clusters/0x030cfc8850dd9c1054d3ccab11549636fd9a86941f497d224f4c9229094a3ba4/items/ca430c0bc1874b11bf19bf675229becd.jpg"
            }
          },
          {
            "dobItemId": "068fb21b-71d6-7006-a35b-4d9713ff192d",
            "dataType": 4,
            "dataContent": "1-e8f6787a5c114f59ad1d92a31c81525c-Nverguo Guowang.jpg",
            "dobName": "Nverguo Guowang",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-e8f6787a5c114f59ad1d92a31c81525c-Nverguo Guowang.jpg",
              "cdnId": "e8f6787a5c114f59ad1d92a31c81525c",
              "extension": ".jpg",
              "fileName": "e8f6787a5c114f59ad1d92a31c81525c.jpg",
              "sourceUrl": "https://bescard.com/cdn/e8f6787a5c114f59ad1d92a31c81525c",
              "publicPath": "assets/dashboard/clusters/0x030cfc8850dd9c1054d3ccab11549636fd9a86941f497d224f4c9229094a3ba4/items/e8f6787a5c114f59ad1d92a31c81525c.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 1,
        "items": [
          {
            "dobItemId": "068fb21b-71d6-7007-9950-db1cf7b709a6",
            "dataType": 4,
            "dataContent": "1-8b0765701ccc4dc593d7379f56d6dc46-BesCARD Explorer.jpg",
            "dobName": "BesCARD Explorer",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-8b0765701ccc4dc593d7379f56d6dc46-BesCARD Explorer.jpg",
              "cdnId": "8b0765701ccc4dc593d7379f56d6dc46",
              "extension": ".jpg",
              "fileName": "8b0765701ccc4dc593d7379f56d6dc46.jpg",
              "sourceUrl": "https://bescard.com/cdn/8b0765701ccc4dc593d7379f56d6dc46",
              "publicPath": "assets/dashboard/clusters/0x030cfc8850dd9c1054d3ccab11549636fd9a86941f497d224f4c9229094a3ba4/items/8b0765701ccc4dc593d7379f56d6dc46.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0x2549bd76dfd1b98120587c7c3bac7429ea24e61b098a4d346ac0b1d8949cff2f",
    "dobId": "068fb1de-a09d-7000-b92f-b9df33e23cd5",
    "dobType": 3,
    "dobName": "Gold Gacha Ⅵ",
    "openTime": "2025-10-24T07:00:00+00:00",
    "contractAddress": "0xe5cd1d32b005e29f63cc6d26d2468992c8056415cf20accaedad7d354baa52bd",
    "issuer": "BesCARD",
    "issuerLogo": "1-211b551659134dbdb0d054f878d5d30f-bByl-EGf_400x400.jpg",
    "onShelves": false,
    "floorPrice": "",
    "floorPriceValue": null,
    "change24H": "",
    "change24HValue": null,
    "dobTier": "A",
    "isAirDrop": false,
    "coverAsset": {
      "sourceValue": "1-2b853a33198d4f44bbc6b031ce5e8161-盲盒封面.gif",
      "cdnId": "2b853a33198d4f44bbc6b031ce5e8161",
      "extension": ".gif",
      "fileName": "2b853a33198d4f44bbc6b031ce5e8161.gif",
      "sourceUrl": "https://bescard.com/cdn/2b853a33198d4f44bbc6b031ce5e8161",
      "publicPath": "assets/dashboard/clusters/0x2549bd76dfd1b98120587c7c3bac7429ea24e61b098a4d346ac0b1d8949cff2f/2b853a33198d4f44bbc6b031ce5e8161.gif"
    },
    "itemCount": 5,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "068fb1de-a09e-7000-b552-406a99ae47ef",
            "dataType": 4,
            "dataContent": "1-7c4caf6b924d4fe3b4ffe40de080d7fe-Legendary.gif",
            "dobName": "Fortune Flake",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-7c4caf6b924d4fe3b4ffe40de080d7fe-Legendary.gif",
              "cdnId": "7c4caf6b924d4fe3b4ffe40de080d7fe",
              "extension": ".gif",
              "fileName": "7c4caf6b924d4fe3b4ffe40de080d7fe.gif",
              "sourceUrl": "https://bescard.com/cdn/7c4caf6b924d4fe3b4ffe40de080d7fe",
              "publicPath": "assets/dashboard/clusters/0x2549bd76dfd1b98120587c7c3bac7429ea24e61b098a4d346ac0b1d8949cff2f/items/7c4caf6b924d4fe3b4ffe40de080d7fe.gif"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "068fb1de-a09e-7001-a6e7-46e35cb89d93",
            "dataType": 4,
            "dataContent": "1-3eb8729be7a64909ace1ee998b29a96b-Epic.gif",
            "dobName": "Shimmer Prize",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-3eb8729be7a64909ace1ee998b29a96b-Epic.gif",
              "cdnId": "3eb8729be7a64909ace1ee998b29a96b",
              "extension": ".gif",
              "fileName": "3eb8729be7a64909ace1ee998b29a96b.gif",
              "sourceUrl": "https://bescard.com/cdn/3eb8729be7a64909ace1ee998b29a96b",
              "publicPath": "assets/dashboard/clusters/0x2549bd76dfd1b98120587c7c3bac7429ea24e61b098a4d346ac0b1d8949cff2f/items/3eb8729be7a64909ace1ee998b29a96b.gif"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 3,
        "items": [
          {
            "dobItemId": "068fb1de-a09e-7002-8c73-45dd2b27df92",
            "dataType": 4,
            "dataContent": "1-d58776c6d3b04e00b30469b3470c1001-Tieshan Gongzhu.jpg",
            "dobName": "Tieshan Gongzhu",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-d58776c6d3b04e00b30469b3470c1001-Tieshan Gongzhu.jpg",
              "cdnId": "d58776c6d3b04e00b30469b3470c1001",
              "extension": ".jpg",
              "fileName": "d58776c6d3b04e00b30469b3470c1001.jpg",
              "sourceUrl": "https://bescard.com/cdn/d58776c6d3b04e00b30469b3470c1001",
              "publicPath": "assets/dashboard/clusters/0x2549bd76dfd1b98120587c7c3bac7429ea24e61b098a4d346ac0b1d8949cff2f/items/d58776c6d3b04e00b30469b3470c1001.jpg"
            }
          },
          {
            "dobItemId": "068fb1de-a09e-7003-bb3d-9639bf4c988d",
            "dataType": 4,
            "dataContent": "1-efaec448a1bf487fa422ef000c083c01-Xiezijing.jpg",
            "dobName": "Xiezijing",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-efaec448a1bf487fa422ef000c083c01-Xiezijing.jpg",
              "cdnId": "efaec448a1bf487fa422ef000c083c01",
              "extension": ".jpg",
              "fileName": "efaec448a1bf487fa422ef000c083c01.jpg",
              "sourceUrl": "https://bescard.com/cdn/efaec448a1bf487fa422ef000c083c01",
              "publicPath": "assets/dashboard/clusters/0x2549bd76dfd1b98120587c7c3bac7429ea24e61b098a4d346ac0b1d8949cff2f/items/efaec448a1bf487fa422ef000c083c01.jpg"
            }
          },
          {
            "dobItemId": "068fb1de-a09e-7004-ad72-f1dda96e836a",
            "dataType": 4,
            "dataContent": "1-a49c04898bdc4595a6562e0f731e47af-BesCARD Explorer.jpg",
            "dobName": "BesCARD Explorer",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-a49c04898bdc4595a6562e0f731e47af-BesCARD Explorer.jpg",
              "cdnId": "a49c04898bdc4595a6562e0f731e47af",
              "extension": ".jpg",
              "fileName": "a49c04898bdc4595a6562e0f731e47af.jpg",
              "sourceUrl": "https://bescard.com/cdn/a49c04898bdc4595a6562e0f731e47af",
              "publicPath": "assets/dashboard/clusters/0x2549bd76dfd1b98120587c7c3bac7429ea24e61b098a4d346ac0b1d8949cff2f/items/a49c04898bdc4595a6562e0f731e47af.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0x0bf90662a44bcdb0da5d8cd116adce6a92b7063b2e9aec437ee40ca408e9de69",
    "dobId": "068fb1c6-5144-7000-9fa9-23825e7d47d7",
    "dobType": 3,
    "dobName": "BesCARD Evolution Chamber",
    "openTime": "2025-10-24T06:55:00+00:00",
    "contractAddress": "0x25fdf1ee0415532cf8956a600103666b68164b9f52e651109f7c84faa3a672c5",
    "issuer": "BesCARD",
    "issuerLogo": "1-da32c0fa671647b489bac637ec21136e-bByl-EGf_400x400.jpg",
    "onShelves": true,
    "floorPrice": "25",
    "floorPriceValue": 25,
    "change24H": "0",
    "change24HValue": 0,
    "dobTier": "A",
    "isAirDrop": true,
    "coverAsset": {
      "sourceValue": "1-4c911de78ffe43d5a7b8e4e6215b35de-进化舱封面.jpg",
      "cdnId": "4c911de78ffe43d5a7b8e4e6215b35de",
      "extension": ".jpg",
      "fileName": "4c911de78ffe43d5a7b8e4e6215b35de.jpg",
      "sourceUrl": "https://bescard.com/cdn/4c911de78ffe43d5a7b8e4e6215b35de",
      "publicPath": "assets/dashboard/clusters/0x0bf90662a44bcdb0da5d8cd116adce6a92b7063b2e9aec437ee40ca408e9de69/4c911de78ffe43d5a7b8e4e6215b35de.jpg"
    },
    "itemCount": 6,
    "groupNames": [
      "Rare"
    ],
    "groups": [
      {
        "name": "Rare",
        "count": 6,
        "items": [
          {
            "dobItemId": "068fb1c6-5149-7000-9de7-e298900afde8",
            "dataType": 4,
            "dataContent": "1-75a24b4724c14e50a33e06b1926bfb63-Heixiongjing.jpg",
            "dobName": "Heixiongjing",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-75a24b4724c14e50a33e06b1926bfb63-Heixiongjing.jpg",
              "cdnId": "75a24b4724c14e50a33e06b1926bfb63",
              "extension": ".jpg",
              "fileName": "75a24b4724c14e50a33e06b1926bfb63.jpg",
              "sourceUrl": "https://bescard.com/cdn/75a24b4724c14e50a33e06b1926bfb63",
              "publicPath": "assets/dashboard/clusters/0x0bf90662a44bcdb0da5d8cd116adce6a92b7063b2e9aec437ee40ca408e9de69/items/75a24b4724c14e50a33e06b1926bfb63.jpg"
            }
          },
          {
            "dobItemId": "068fb1c6-514f-7000-a7ea-60298ad715b1",
            "dataType": 4,
            "dataContent": "1-2ad2e4c0b65f47bdb5f7a83aacf913e6-Jinchi Zhanglao.jpg",
            "dobName": "Jinchi Zhanglao",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-2ad2e4c0b65f47bdb5f7a83aacf913e6-Jinchi Zhanglao.jpg",
              "cdnId": "2ad2e4c0b65f47bdb5f7a83aacf913e6",
              "extension": ".jpg",
              "fileName": "2ad2e4c0b65f47bdb5f7a83aacf913e6.jpg",
              "sourceUrl": "https://bescard.com/cdn/2ad2e4c0b65f47bdb5f7a83aacf913e6",
              "publicPath": "assets/dashboard/clusters/0x0bf90662a44bcdb0da5d8cd116adce6a92b7063b2e9aec437ee40ca408e9de69/items/2ad2e4c0b65f47bdb5f7a83aacf913e6.jpg"
            }
          },
          {
            "dobItemId": "068fb1c6-5150-7000-aeac-35c01669ac79",
            "dataType": 4,
            "dataContent": "1-ef89ef0b3b844d9b82bf3a2ff34531c3-Baigujing.jpg",
            "dobName": "Baigujing",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-ef89ef0b3b844d9b82bf3a2ff34531c3-Baigujing.jpg",
              "cdnId": "ef89ef0b3b844d9b82bf3a2ff34531c3",
              "extension": ".jpg",
              "fileName": "ef89ef0b3b844d9b82bf3a2ff34531c3.jpg",
              "sourceUrl": "https://bescard.com/cdn/ef89ef0b3b844d9b82bf3a2ff34531c3",
              "publicPath": "assets/dashboard/clusters/0x0bf90662a44bcdb0da5d8cd116adce6a92b7063b2e9aec437ee40ca408e9de69/items/ef89ef0b3b844d9b82bf3a2ff34531c3.jpg"
            }
          },
          {
            "dobItemId": "068fb1c6-5150-7001-b644-3bde18302e30",
            "dataType": 4,
            "dataContent": "1-6b931430f47041578c3c52440c628a50-Tieshan Gongzhu.jpg",
            "dobName": "Tieshan Gongzhu",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-6b931430f47041578c3c52440c628a50-Tieshan Gongzhu.jpg",
              "cdnId": "6b931430f47041578c3c52440c628a50",
              "extension": ".jpg",
              "fileName": "6b931430f47041578c3c52440c628a50.jpg",
              "sourceUrl": "https://bescard.com/cdn/6b931430f47041578c3c52440c628a50",
              "publicPath": "assets/dashboard/clusters/0x0bf90662a44bcdb0da5d8cd116adce6a92b7063b2e9aec437ee40ca408e9de69/items/6b931430f47041578c3c52440c628a50.jpg"
            }
          },
          {
            "dobItemId": "068fb1c6-5150-7002-b5bf-dabc0140ae22",
            "dataType": 4,
            "dataContent": "1-457c0ee5639f47338a1966ab0c9af15e-Xiezijing.jpg",
            "dobName": "Xiezijing",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-457c0ee5639f47338a1966ab0c9af15e-Xiezijing.jpg",
              "cdnId": "457c0ee5639f47338a1966ab0c9af15e",
              "extension": ".jpg",
              "fileName": "457c0ee5639f47338a1966ab0c9af15e.jpg",
              "sourceUrl": "https://bescard.com/cdn/457c0ee5639f47338a1966ab0c9af15e",
              "publicPath": "assets/dashboard/clusters/0x0bf90662a44bcdb0da5d8cd116adce6a92b7063b2e9aec437ee40ca408e9de69/items/457c0ee5639f47338a1966ab0c9af15e.jpg"
            }
          },
          {
            "dobItemId": "068fb1c6-5150-7003-880d-ec84427f7b4c",
            "dataType": 4,
            "dataContent": "1-173fe2be16fa499dbfc523d1581e88fd-Nverguo Guowang.jpg",
            "dobName": "Nverguo Guowang",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-173fe2be16fa499dbfc523d1581e88fd-Nverguo Guowang.jpg",
              "cdnId": "173fe2be16fa499dbfc523d1581e88fd",
              "extension": ".jpg",
              "fileName": "173fe2be16fa499dbfc523d1581e88fd.jpg",
              "sourceUrl": "https://bescard.com/cdn/173fe2be16fa499dbfc523d1581e88fd",
              "publicPath": "assets/dashboard/clusters/0x0bf90662a44bcdb0da5d8cd116adce6a92b7063b2e9aec437ee40ca408e9de69/items/173fe2be16fa499dbfc523d1581e88fd.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0x7987efdd3fddb419ee66194ba00bffa62768e02a0d97806831605860ed57ab20",
    "dobId": "068f5dbd-30de-7000-8064-c5d73a9b3924",
    "dobType": 3,
    "dobName": "Gold Gacha Ⅴ",
    "openTime": "2025-10-20T07:00:00+00:00",
    "contractAddress": "0xd56b74047bdfb5505f93789c34d7c0d445186a488dc668859ede6194befb98e4",
    "issuer": "BesCARD",
    "issuerLogo": "1-a8999c901a0447188acf29d268e0ec06-bByl-EGf_400x400.jpg",
    "onShelves": false,
    "floorPrice": "0",
    "floorPriceValue": 0,
    "change24H": "0",
    "change24HValue": 0,
    "dobTier": "A",
    "isAirDrop": false,
    "coverAsset": {
      "sourceValue": "1-737ea3eae53b4f8394405695ed1367d2-盲盒封面.gif",
      "cdnId": "737ea3eae53b4f8394405695ed1367d2",
      "extension": ".gif",
      "fileName": "737ea3eae53b4f8394405695ed1367d2.gif",
      "sourceUrl": "https://bescard.com/cdn/737ea3eae53b4f8394405695ed1367d2",
      "publicPath": "assets/dashboard/clusters/0x7987efdd3fddb419ee66194ba00bffa62768e02a0d97806831605860ed57ab20/737ea3eae53b4f8394405695ed1367d2.gif"
    },
    "itemCount": 4,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "068f5dbd-30df-7000-b2e2-4a11be7372d6",
            "dataType": 4,
            "dataContent": "1-5012c8f02c8d4698b8a95fb8004e05d5-Legendary卡牌.gif",
            "dobName": "Fortune Flake",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-5012c8f02c8d4698b8a95fb8004e05d5-Legendary卡牌.gif",
              "cdnId": "5012c8f02c8d4698b8a95fb8004e05d5",
              "extension": ".gif",
              "fileName": "5012c8f02c8d4698b8a95fb8004e05d5.gif",
              "sourceUrl": "https://bescard.com/cdn/5012c8f02c8d4698b8a95fb8004e05d5",
              "publicPath": "assets/dashboard/clusters/0x7987efdd3fddb419ee66194ba00bffa62768e02a0d97806831605860ed57ab20/items/5012c8f02c8d4698b8a95fb8004e05d5.gif"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "068f5dbd-30e0-7000-9a50-e2f2092915e6",
            "dataType": 4,
            "dataContent": "1-131593ef7a45468ebf34f0b7b40428bf-Epic卡牌.gif",
            "dobName": "Shimmer Prize",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-131593ef7a45468ebf34f0b7b40428bf-Epic卡牌.gif",
              "cdnId": "131593ef7a45468ebf34f0b7b40428bf",
              "extension": ".gif",
              "fileName": "131593ef7a45468ebf34f0b7b40428bf.gif",
              "sourceUrl": "https://bescard.com/cdn/131593ef7a45468ebf34f0b7b40428bf",
              "publicPath": "assets/dashboard/clusters/0x7987efdd3fddb419ee66194ba00bffa62768e02a0d97806831605860ed57ab20/items/131593ef7a45468ebf34f0b7b40428bf.gif"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 1,
        "items": [
          {
            "dobItemId": "068f5dbd-30e0-7001-b1ae-96d1d04f1b99",
            "dataType": 4,
            "dataContent": "1-9b72c23029c94044804d449985a94572-Baigujing.jpg",
            "dobName": "Baigujing",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-9b72c23029c94044804d449985a94572-Baigujing.jpg",
              "cdnId": "9b72c23029c94044804d449985a94572",
              "extension": ".jpg",
              "fileName": "9b72c23029c94044804d449985a94572.jpg",
              "sourceUrl": "https://bescard.com/cdn/9b72c23029c94044804d449985a94572",
              "publicPath": "assets/dashboard/clusters/0x7987efdd3fddb419ee66194ba00bffa62768e02a0d97806831605860ed57ab20/items/9b72c23029c94044804d449985a94572.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 1,
        "items": [
          {
            "dobItemId": "068f5dbd-30e0-7002-a370-92465edb1f4c",
            "dataType": 4,
            "dataContent": "1-0d4b1e2a4b59432889a91f614b9ce74b-BesCARD Explorer.jpg",
            "dobName": "BesCARD Explorer",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-0d4b1e2a4b59432889a91f614b9ce74b-BesCARD Explorer.jpg",
              "cdnId": "0d4b1e2a4b59432889a91f614b9ce74b",
              "extension": ".jpg",
              "fileName": "0d4b1e2a4b59432889a91f614b9ce74b.jpg",
              "sourceUrl": "https://bescard.com/cdn/0d4b1e2a4b59432889a91f614b9ce74b",
              "publicPath": "assets/dashboard/clusters/0x7987efdd3fddb419ee66194ba00bffa62768e02a0d97806831605860ed57ab20/items/0d4b1e2a4b59432889a91f614b9ce74b.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0xd893053256892f9ee89a991e26366de15f49719c8bae7f090caff6e0e1d20897",
    "dobId": "068f084f-f000-7000-80df-50e1e1789650",
    "dobType": 3,
    "dobName": "Gold Gacha Ⅳ",
    "openTime": "2025-10-17T07:00:00+00:00",
    "contractAddress": "0xb3edc70c923a8699bef1d2b894dfbe550f40ca92ffe4066a2ccaac602356e643",
    "issuer": "BesCARD",
    "issuerLogo": "1-9bd3f4e7a050472c9224e6470ae8fc7e-bByl-EGf_400x400.jpg",
    "onShelves": false,
    "floorPrice": "",
    "floorPriceValue": null,
    "change24H": "",
    "change24HValue": null,
    "dobTier": "A",
    "isAirDrop": false,
    "coverAsset": {
      "sourceValue": "1-7fa0ad2c4a6b4dc29a49447c078fd182-盲盒封面.gif",
      "cdnId": "7fa0ad2c4a6b4dc29a49447c078fd182",
      "extension": ".gif",
      "fileName": "7fa0ad2c4a6b4dc29a49447c078fd182.gif",
      "sourceUrl": "https://bescard.com/cdn/7fa0ad2c4a6b4dc29a49447c078fd182",
      "publicPath": "assets/dashboard/clusters/0xd893053256892f9ee89a991e26366de15f49719c8bae7f090caff6e0e1d20897/7fa0ad2c4a6b4dc29a49447c078fd182.gif"
    },
    "itemCount": 4,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "068f084f-f000-7004-807c-5523ec009ada",
            "dataType": 4,
            "dataContent": "1-24d59a1dcf014dfbafbbc3c5accafa28-Fortune Flake.gif",
            "dobName": "Fortune Flake",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-24d59a1dcf014dfbafbbc3c5accafa28-Fortune Flake.gif",
              "cdnId": "24d59a1dcf014dfbafbbc3c5accafa28",
              "extension": ".gif",
              "fileName": "24d59a1dcf014dfbafbbc3c5accafa28.gif",
              "sourceUrl": "https://bescard.com/cdn/24d59a1dcf014dfbafbbc3c5accafa28",
              "publicPath": "assets/dashboard/clusters/0xd893053256892f9ee89a991e26366de15f49719c8bae7f090caff6e0e1d20897/items/24d59a1dcf014dfbafbbc3c5accafa28.gif"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "068f084f-f000-7003-a289-4157236840fa",
            "dataType": 4,
            "dataContent": "1-45faec00985e42d4b1da3fe7775ec1a7-Shimmer Prize.gif",
            "dobName": "Shimmer Prize",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-45faec00985e42d4b1da3fe7775ec1a7-Shimmer Prize.gif",
              "cdnId": "45faec00985e42d4b1da3fe7775ec1a7",
              "extension": ".gif",
              "fileName": "45faec00985e42d4b1da3fe7775ec1a7.gif",
              "sourceUrl": "https://bescard.com/cdn/45faec00985e42d4b1da3fe7775ec1a7",
              "publicPath": "assets/dashboard/clusters/0xd893053256892f9ee89a991e26366de15f49719c8bae7f090caff6e0e1d20897/items/45faec00985e42d4b1da3fe7775ec1a7.gif"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 1,
        "items": [
          {
            "dobItemId": "068f084f-f000-7002-9ab4-f0ffb30f4fec",
            "dataType": 4,
            "dataContent": "1-fba1c1c506ca4e32ab18908008e8b6a3-Tieshan Gongzhu.jpg",
            "dobName": "Tieshan Gongzhu",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-fba1c1c506ca4e32ab18908008e8b6a3-Tieshan Gongzhu.jpg",
              "cdnId": "fba1c1c506ca4e32ab18908008e8b6a3",
              "extension": ".jpg",
              "fileName": "fba1c1c506ca4e32ab18908008e8b6a3.jpg",
              "sourceUrl": "https://bescard.com/cdn/fba1c1c506ca4e32ab18908008e8b6a3",
              "publicPath": "assets/dashboard/clusters/0xd893053256892f9ee89a991e26366de15f49719c8bae7f090caff6e0e1d20897/items/fba1c1c506ca4e32ab18908008e8b6a3.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 1,
        "items": [
          {
            "dobItemId": "068f084f-f000-7001-9721-8369132f9bc9",
            "dataType": 4,
            "dataContent": "1-c97675d424f34e8d8c524deafcd812ff-BesCARD Explorer.jpg",
            "dobName": "BesCARD Explorer",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-c97675d424f34e8d8c524deafcd812ff-BesCARD Explorer.jpg",
              "cdnId": "c97675d424f34e8d8c524deafcd812ff",
              "extension": ".jpg",
              "fileName": "c97675d424f34e8d8c524deafcd812ff.jpg",
              "sourceUrl": "https://bescard.com/cdn/c97675d424f34e8d8c524deafcd812ff",
              "publicPath": "assets/dashboard/clusters/0xd893053256892f9ee89a991e26366de15f49719c8bae7f090caff6e0e1d20897/items/c97675d424f34e8d8c524deafcd812ff.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0x374ab313cc9dc1664acdc47f30339174235bed61dbc626922c9edf0c9100082c",
    "dobId": "068ef3db-b20e-7000-b3ac-277f73770105",
    "dobType": 3,
    "dobName": "Gold Gacha Ⅲ",
    "openTime": "2025-10-15T07:00:00+00:00",
    "contractAddress": "0xd90185db231c09bee77715b4409abc1473abb64b6f45ef3e79101bbdc0aeda06",
    "issuer": "BesCARD",
    "issuerLogo": "1-551929b5a4114975af5275438cdb8190-bByl-EGf_400x400.jpg",
    "onShelves": false,
    "floorPrice": "",
    "floorPriceValue": null,
    "change24H": "",
    "change24HValue": null,
    "dobTier": "A",
    "isAirDrop": false,
    "coverAsset": {
      "sourceValue": "1-d00bac5e3d1947e8916ef11a52dcbfdf-盲盒封面GIF.gif",
      "cdnId": "d00bac5e3d1947e8916ef11a52dcbfdf",
      "extension": ".gif",
      "fileName": "d00bac5e3d1947e8916ef11a52dcbfdf.gif",
      "sourceUrl": "https://bescard.com/cdn/d00bac5e3d1947e8916ef11a52dcbfdf",
      "publicPath": "assets/dashboard/clusters/0x374ab313cc9dc1664acdc47f30339174235bed61dbc626922c9edf0c9100082c/d00bac5e3d1947e8916ef11a52dcbfdf.gif"
    },
    "itemCount": 4,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "068ef3db-b20e-7001-8cc8-f87f7e2b0529",
            "dataType": 4,
            "dataContent": "1-cfb8150b099140f8bfe69cecefa69a93-大奖动图6M.gif",
            "dobName": "Fortune Flake",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-cfb8150b099140f8bfe69cecefa69a93-大奖动图6M.gif",
              "cdnId": "cfb8150b099140f8bfe69cecefa69a93",
              "extension": ".gif",
              "fileName": "cfb8150b099140f8bfe69cecefa69a93.gif",
              "sourceUrl": "https://bescard.com/cdn/cfb8150b099140f8bfe69cecefa69a93",
              "publicPath": "assets/dashboard/clusters/0x374ab313cc9dc1664acdc47f30339174235bed61dbc626922c9edf0c9100082c/items/cfb8150b099140f8bfe69cecefa69a93.gif"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "068ef3db-b20e-7002-9ae4-a343ff9297de",
            "dataType": 4,
            "dataContent": "1-9697a3a51831457899b782ceea62ae5e-小奖动图.gif",
            "dobName": "Shimmer Prize",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-9697a3a51831457899b782ceea62ae5e-小奖动图.gif",
              "cdnId": "9697a3a51831457899b782ceea62ae5e",
              "extension": ".gif",
              "fileName": "9697a3a51831457899b782ceea62ae5e.gif",
              "sourceUrl": "https://bescard.com/cdn/9697a3a51831457899b782ceea62ae5e",
              "publicPath": "assets/dashboard/clusters/0x374ab313cc9dc1664acdc47f30339174235bed61dbc626922c9edf0c9100082c/items/9697a3a51831457899b782ceea62ae5e.gif"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 1,
        "items": [
          {
            "dobItemId": "068ef3db-b20e-7003-b28b-8d6672a05c85",
            "dataType": 4,
            "dataContent": "1-1976ecfbc9114061a7d021097850ef51-Baigujing.jpg",
            "dobName": "Baigujing",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-1976ecfbc9114061a7d021097850ef51-Baigujing.jpg",
              "cdnId": "1976ecfbc9114061a7d021097850ef51",
              "extension": ".jpg",
              "fileName": "1976ecfbc9114061a7d021097850ef51.jpg",
              "sourceUrl": "https://bescard.com/cdn/1976ecfbc9114061a7d021097850ef51",
              "publicPath": "assets/dashboard/clusters/0x374ab313cc9dc1664acdc47f30339174235bed61dbc626922c9edf0c9100082c/items/1976ecfbc9114061a7d021097850ef51.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 1,
        "items": [
          {
            "dobItemId": "068ef3db-b20e-7004-a769-d8706d68bbfe",
            "dataType": 4,
            "dataContent": "1-d6610bf244304c9ea1d2c3d0d358968e-BesCARD Explorer.jpg",
            "dobName": "BesCARD Explorer",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-d6610bf244304c9ea1d2c3d0d358968e-BesCARD Explorer.jpg",
              "cdnId": "d6610bf244304c9ea1d2c3d0d358968e",
              "extension": ".jpg",
              "fileName": "d6610bf244304c9ea1d2c3d0d358968e.jpg",
              "sourceUrl": "https://bescard.com/cdn/d6610bf244304c9ea1d2c3d0d358968e",
              "publicPath": "assets/dashboard/clusters/0x374ab313cc9dc1664acdc47f30339174235bed61dbc626922c9edf0c9100082c/items/d6610bf244304c9ea1d2c3d0d358968e.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0xd072575e14a080cf39d91857c95e72a290b91442b10354d43a07ae71eaabeed0",
    "dobId": "068ede31-11fd-7000-80b4-59b3ef17b059",
    "dobType": 3,
    "dobName": "Gold Gacha Ⅱ",
    "openTime": "2025-10-14T05:48:00+00:00",
    "contractAddress": "0xa03a9483ee5c9762b09e90bb1160c24a65848391635ccd6c423f9f9451f7a215",
    "issuer": "BesCARD",
    "issuerLogo": "1-0b218a420f054886a554dc7af0266df1-EhOq4VvT_400x400.jpg",
    "onShelves": false,
    "floorPrice": "0",
    "floorPriceValue": 0,
    "change24H": "0",
    "change24HValue": 0,
    "dobTier": "A",
    "isAirDrop": false,
    "coverAsset": {
      "sourceValue": "1-5aca78b4b73f4c198a3d8336ad41cdcb-封面.jpeg",
      "cdnId": "5aca78b4b73f4c198a3d8336ad41cdcb",
      "extension": ".jpeg",
      "fileName": "5aca78b4b73f4c198a3d8336ad41cdcb.jpeg",
      "sourceUrl": "https://bescard.com/cdn/5aca78b4b73f4c198a3d8336ad41cdcb",
      "publicPath": "assets/dashboard/clusters/0xd072575e14a080cf39d91857c95e72a290b91442b10354d43a07ae71eaabeed0/5aca78b4b73f4c198a3d8336ad41cdcb.jpeg"
    },
    "itemCount": 5,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "068ede31-11fe-7000-a58a-7f3bc9db01a7",
            "dataType": 4,
            "dataContent": "1-f00aae86d50543158c608d659e05a9cf-大奖.jpeg",
            "dobName": "Fortune Flake",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-f00aae86d50543158c608d659e05a9cf-大奖.jpeg",
              "cdnId": "f00aae86d50543158c608d659e05a9cf",
              "extension": ".jpeg",
              "fileName": "f00aae86d50543158c608d659e05a9cf.jpeg",
              "sourceUrl": "https://bescard.com/cdn/f00aae86d50543158c608d659e05a9cf",
              "publicPath": "assets/dashboard/clusters/0xd072575e14a080cf39d91857c95e72a290b91442b10354d43a07ae71eaabeed0/items/f00aae86d50543158c608d659e05a9cf.jpeg"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "068ede31-11fe-7001-967f-344c4b9a737e",
            "dataType": 4,
            "dataContent": "1-895e15d432634e9a80cb6ff710966af6-小奖.jpeg",
            "dobName": "Shimmer Prize",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-895e15d432634e9a80cb6ff710966af6-小奖.jpeg",
              "cdnId": "895e15d432634e9a80cb6ff710966af6",
              "extension": ".jpeg",
              "fileName": "895e15d432634e9a80cb6ff710966af6.jpeg",
              "sourceUrl": "https://bescard.com/cdn/895e15d432634e9a80cb6ff710966af6",
              "publicPath": "assets/dashboard/clusters/0xd072575e14a080cf39d91857c95e72a290b91442b10354d43a07ae71eaabeed0/items/895e15d432634e9a80cb6ff710966af6.jpeg"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 2,
        "items": [
          {
            "dobItemId": "068ede31-11fe-7002-94cf-42fb1b1c13b6",
            "dataType": 4,
            "dataContent": "1-4c24d36e282d44fe928b552eaeee9d5d-金池长老.jpg",
            "dobName": "Jinchi Zhanglao",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-4c24d36e282d44fe928b552eaeee9d5d-金池长老.jpg",
              "cdnId": "4c24d36e282d44fe928b552eaeee9d5d",
              "extension": ".jpg",
              "fileName": "4c24d36e282d44fe928b552eaeee9d5d.jpg",
              "sourceUrl": "https://bescard.com/cdn/4c24d36e282d44fe928b552eaeee9d5d",
              "publicPath": "assets/dashboard/clusters/0xd072575e14a080cf39d91857c95e72a290b91442b10354d43a07ae71eaabeed0/items/4c24d36e282d44fe928b552eaeee9d5d.jpg"
            }
          },
          {
            "dobItemId": "068ede31-11fe-7003-8204-0e22ae847f2c",
            "dataType": 4,
            "dataContent": "1-6a8785036fe9459493e2a68adf5ae3ff-黑熊精.jpg",
            "dobName": "Heixiongjing",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-6a8785036fe9459493e2a68adf5ae3ff-黑熊精.jpg",
              "cdnId": "6a8785036fe9459493e2a68adf5ae3ff",
              "extension": ".jpg",
              "fileName": "6a8785036fe9459493e2a68adf5ae3ff.jpg",
              "sourceUrl": "https://bescard.com/cdn/6a8785036fe9459493e2a68adf5ae3ff",
              "publicPath": "assets/dashboard/clusters/0xd072575e14a080cf39d91857c95e72a290b91442b10354d43a07ae71eaabeed0/items/6a8785036fe9459493e2a68adf5ae3ff.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 1,
        "items": [
          {
            "dobItemId": "068ede31-11fe-7004-943c-7cc7c364e8d3",
            "dataType": 4,
            "dataContent": "1-6f76b69f4cd046a1b773c52b5b30fed7-b07a0668-f22f-4f24-84e2-dd4f1a2b52b9.jpeg",
            "dobName": "BesCARD Explorer",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-6f76b69f4cd046a1b773c52b5b30fed7-b07a0668-f22f-4f24-84e2-dd4f1a2b52b9.jpeg",
              "cdnId": "6f76b69f4cd046a1b773c52b5b30fed7",
              "extension": ".jpeg",
              "fileName": "6f76b69f4cd046a1b773c52b5b30fed7.jpeg",
              "sourceUrl": "https://bescard.com/cdn/6f76b69f4cd046a1b773c52b5b30fed7",
              "publicPath": "assets/dashboard/clusters/0xd072575e14a080cf39d91857c95e72a290b91442b10354d43a07ae71eaabeed0/items/6f76b69f4cd046a1b773c52b5b30fed7.jpeg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0xfb7a408728e07ff8e6f0e3f4dd38cd0b08706cfaf9fd5cda0765d2ddaa355095",
    "dobId": "068ec60b-c167-7000-b577-6abea402d40b",
    "dobType": 3,
    "dobName": "Hi Pet！",
    "openTime": "2025-10-13T04:00:00+00:00",
    "contractAddress": "0x9537831f7fafa21d8c99a1d4549e2914efd60254be1971a50760391747ff48bb",
    "issuer": "Raven Cape Studio",
    "issuerLogo": "1-30aee759a1cd47679f0aa9d701f2d3ff-发行方头像1280X1280.PNG",
    "onShelves": false,
    "floorPrice": "0",
    "floorPriceValue": 0,
    "change24H": "0",
    "change24HValue": 0,
    "dobTier": "C",
    "isAirDrop": true,
    "coverAsset": {
      "sourceValue": "1-450cbf6039134103aa77aa6ddeeeb923-盲盒封面.jpg",
      "cdnId": "450cbf6039134103aa77aa6ddeeeb923",
      "extension": ".jpg",
      "fileName": "450cbf6039134103aa77aa6ddeeeb923.jpg",
      "sourceUrl": "https://bescard.com/cdn/450cbf6039134103aa77aa6ddeeeb923",
      "publicPath": "assets/dashboard/clusters/0xfb7a408728e07ff8e6f0e3f4dd38cd0b08706cfaf9fd5cda0765d2ddaa355095/450cbf6039134103aa77aa6ddeeeb923.jpg"
    },
    "itemCount": 7,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "068ec60b-c169-7003-8f10-ee7a61ca6b01",
            "dataType": 4,
            "dataContent": "1-d91f7347ed6744a3aa385d4c6532062b-Hi！Pet！卡牌-LazyHuman.jpg",
            "dobName": "Lazy Human",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-d91f7347ed6744a3aa385d4c6532062b-Hi！Pet！卡牌-LazyHuman.jpg",
              "cdnId": "d91f7347ed6744a3aa385d4c6532062b",
              "extension": ".jpg",
              "fileName": "d91f7347ed6744a3aa385d4c6532062b.jpg",
              "sourceUrl": "https://bescard.com/cdn/d91f7347ed6744a3aa385d4c6532062b",
              "publicPath": "assets/dashboard/clusters/0xfb7a408728e07ff8e6f0e3f4dd38cd0b08706cfaf9fd5cda0765d2ddaa355095/items/d91f7347ed6744a3aa385d4c6532062b.jpg"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 2,
        "items": [
          {
            "dobItemId": "068ec60b-c169-7001-baae-49c065f52650",
            "dataType": 4,
            "dataContent": "1-71aeccc3a26147cc87995577163667d9-Hi！Pet！卡牌-ElectricJellyfish.jpg",
            "dobName": "Electric Jellyfish",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-71aeccc3a26147cc87995577163667d9-Hi！Pet！卡牌-ElectricJellyfish.jpg",
              "cdnId": "71aeccc3a26147cc87995577163667d9",
              "extension": ".jpg",
              "fileName": "71aeccc3a26147cc87995577163667d9.jpg",
              "sourceUrl": "https://bescard.com/cdn/71aeccc3a26147cc87995577163667d9",
              "publicPath": "assets/dashboard/clusters/0xfb7a408728e07ff8e6f0e3f4dd38cd0b08706cfaf9fd5cda0765d2ddaa355095/items/71aeccc3a26147cc87995577163667d9.jpg"
            }
          },
          {
            "dobItemId": "068ec60b-c169-7002-aa24-5f56dce1eb66",
            "dataType": 4,
            "dataContent": "1-21a8071eaa3b4f5595601077d9fb4720-Hi！Pet！卡牌-PeacefulPlant.jpg",
            "dobName": "Peaceful Plant",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-21a8071eaa3b4f5595601077d9fb4720-Hi！Pet！卡牌-PeacefulPlant.jpg",
              "cdnId": "21a8071eaa3b4f5595601077d9fb4720",
              "extension": ".jpg",
              "fileName": "21a8071eaa3b4f5595601077d9fb4720.jpg",
              "sourceUrl": "https://bescard.com/cdn/21a8071eaa3b4f5595601077d9fb4720",
              "publicPath": "assets/dashboard/clusters/0xfb7a408728e07ff8e6f0e3f4dd38cd0b08706cfaf9fd5cda0765d2ddaa355095/items/21a8071eaa3b4f5595601077d9fb4720.jpg"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 2,
        "items": [
          {
            "dobItemId": "068ec60b-c168-7002-ba68-eeb8d4cc194d",
            "dataType": 4,
            "dataContent": "1-ef2df0444664487db116ceef1ac2c561-Hi！Pet！卡牌-FerociousGoose.jpg",
            "dobName": "Ferocious Goose",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-ef2df0444664487db116ceef1ac2c561-Hi！Pet！卡牌-FerociousGoose.jpg",
              "cdnId": "ef2df0444664487db116ceef1ac2c561",
              "extension": ".jpg",
              "fileName": "ef2df0444664487db116ceef1ac2c561.jpg",
              "sourceUrl": "https://bescard.com/cdn/ef2df0444664487db116ceef1ac2c561",
              "publicPath": "assets/dashboard/clusters/0xfb7a408728e07ff8e6f0e3f4dd38cd0b08706cfaf9fd5cda0765d2ddaa355095/items/ef2df0444664487db116ceef1ac2c561.jpg"
            }
          },
          {
            "dobItemId": "068ec60b-c169-7000-9404-b0e91b019e3a",
            "dataType": 4,
            "dataContent": "1-6b23904a564f4422ab782585cec1cf01-Hi！Pet！卡牌-ZenCow.jpg",
            "dobName": "Zen Cow",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-6b23904a564f4422ab782585cec1cf01-Hi！Pet！卡牌-ZenCow.jpg",
              "cdnId": "6b23904a564f4422ab782585cec1cf01",
              "extension": ".jpg",
              "fileName": "6b23904a564f4422ab782585cec1cf01.jpg",
              "sourceUrl": "https://bescard.com/cdn/6b23904a564f4422ab782585cec1cf01",
              "publicPath": "assets/dashboard/clusters/0xfb7a408728e07ff8e6f0e3f4dd38cd0b08706cfaf9fd5cda0765d2ddaa355095/items/6b23904a564f4422ab782585cec1cf01.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 2,
        "items": [
          {
            "dobItemId": "068ec60b-c168-7000-9451-e10d39eafe17",
            "dataType": 4,
            "dataContent": "1-683450686487406aa154b6427fae6464-Hi！Pet！卡牌-CrazyDog.jpg",
            "dobName": "Crazy Dog",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-683450686487406aa154b6427fae6464-Hi！Pet！卡牌-CrazyDog.jpg",
              "cdnId": "683450686487406aa154b6427fae6464",
              "extension": ".jpg",
              "fileName": "683450686487406aa154b6427fae6464.jpg",
              "sourceUrl": "https://bescard.com/cdn/683450686487406aa154b6427fae6464",
              "publicPath": "assets/dashboard/clusters/0xfb7a408728e07ff8e6f0e3f4dd38cd0b08706cfaf9fd5cda0765d2ddaa355095/items/683450686487406aa154b6427fae6464.jpg"
            }
          },
          {
            "dobItemId": "068ec60b-c168-7001-8c4b-ab8d01006762",
            "dataType": 4,
            "dataContent": "1-e9ea85f35edd426abaaf21085c19d8a7-Hi！Pet！卡牌-TransshapeCat.jpg",
            "dobName": "Transshape Cat",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-e9ea85f35edd426abaaf21085c19d8a7-Hi！Pet！卡牌-TransshapeCat.jpg",
              "cdnId": "e9ea85f35edd426abaaf21085c19d8a7",
              "extension": ".jpg",
              "fileName": "e9ea85f35edd426abaaf21085c19d8a7.jpg",
              "sourceUrl": "https://bescard.com/cdn/e9ea85f35edd426abaaf21085c19d8a7",
              "publicPath": "assets/dashboard/clusters/0xfb7a408728e07ff8e6f0e3f4dd38cd0b08706cfaf9fd5cda0765d2ddaa355095/items/e9ea85f35edd426abaaf21085c19d8a7.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0x9541537346dd237c70dcf157c62d65f43de54138b72e95912c3bb04cea505d4c",
    "dobId": "068db682-e2e4-7000-8518-3a7bd411abd4",
    "dobType": 3,
    "dobName": "Animal Bakery",
    "openTime": "2025-10-04T04:00:00+00:00",
    "contractAddress": "0xd6b20b5e06dc1638299d2483ddbb838f43386d69eeb00de3f07817cc1912569f",
    "issuer": "Cushy Studio ",
    "issuerLogo": "1-197fb762f349471d83604b9663a6e325-20250930-130701.png",
    "onShelves": false,
    "floorPrice": "",
    "floorPriceValue": null,
    "change24H": "",
    "change24HValue": null,
    "dobTier": "C",
    "isAirDrop": true,
    "coverAsset": {
      "sourceValue": "1-aefbdd880b8a4d5c8a91156a7ccf59b5-20250930-130644.jpeg",
      "cdnId": "aefbdd880b8a4d5c8a91156a7ccf59b5",
      "extension": ".jpeg",
      "fileName": "aefbdd880b8a4d5c8a91156a7ccf59b5.jpeg",
      "sourceUrl": "https://bescard.com/cdn/aefbdd880b8a4d5c8a91156a7ccf59b5",
      "publicPath": "assets/dashboard/clusters/0x9541537346dd237c70dcf157c62d65f43de54138b72e95912c3bb04cea505d4c/aefbdd880b8a4d5c8a91156a7ccf59b5.jpeg"
    },
    "itemCount": 8,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "068db682-e2e5-7000-be37-0de9931165d8",
            "dataType": 4,
            "dataContent": "1-b5b5931c390840d392d00445b2d352a1-传说1张 April——SSR.jpg",
            "dobName": "April",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-b5b5931c390840d392d00445b2d352a1-传说1张 April——SSR.jpg",
              "cdnId": "b5b5931c390840d392d00445b2d352a1",
              "extension": ".jpg",
              "fileName": "b5b5931c390840d392d00445b2d352a1.jpg",
              "sourceUrl": "https://bescard.com/cdn/b5b5931c390840d392d00445b2d352a1",
              "publicPath": "assets/dashboard/clusters/0x9541537346dd237c70dcf157c62d65f43de54138b72e95912c3bb04cea505d4c/items/b5b5931c390840d392d00445b2d352a1.jpg"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "068db682-e2e5-7001-ace4-b2a668f1a362",
            "dataType": 4,
            "dataContent": "1-9bafc9150eb44bb7a265202cb7201e80-史诗3张 Larry-SR.jpg",
            "dobName": "Larry",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-9bafc9150eb44bb7a265202cb7201e80-史诗3张 Larry-SR.jpg",
              "cdnId": "9bafc9150eb44bb7a265202cb7201e80",
              "extension": ".jpg",
              "fileName": "9bafc9150eb44bb7a265202cb7201e80.jpg",
              "sourceUrl": "https://bescard.com/cdn/9bafc9150eb44bb7a265202cb7201e80",
              "publicPath": "assets/dashboard/clusters/0x9541537346dd237c70dcf157c62d65f43de54138b72e95912c3bb04cea505d4c/items/9bafc9150eb44bb7a265202cb7201e80.jpg"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 2,
        "items": [
          {
            "dobItemId": "068db682-e2e5-7002-9d4a-7d8d60bb24b3",
            "dataType": 4,
            "dataContent": "1-29058c2a866e48b1bc050bb9ca920ee3-稀缺（1）5张 Benny——R2.jpg",
            "dobName": "Benny",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-29058c2a866e48b1bc050bb9ca920ee3-稀缺（1）5张 Benny——R2.jpg",
              "cdnId": "29058c2a866e48b1bc050bb9ca920ee3",
              "extension": ".jpg",
              "fileName": "29058c2a866e48b1bc050bb9ca920ee3.jpg",
              "sourceUrl": "https://bescard.com/cdn/29058c2a866e48b1bc050bb9ca920ee3",
              "publicPath": "assets/dashboard/clusters/0x9541537346dd237c70dcf157c62d65f43de54138b72e95912c3bb04cea505d4c/items/29058c2a866e48b1bc050bb9ca920ee3.jpg"
            }
          },
          {
            "dobItemId": "068db682-e2e5-7003-b21c-bda86718cfc5",
            "dataType": 4,
            "dataContent": "1-6e16b549cd2b404d8453270292d008ff-稀缺（2）5张 Jeffery——R.jpg",
            "dobName": "Jeffery",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-6e16b549cd2b404d8453270292d008ff-稀缺（2）5张 Jeffery——R.jpg",
              "cdnId": "6e16b549cd2b404d8453270292d008ff",
              "extension": ".jpg",
              "fileName": "6e16b549cd2b404d8453270292d008ff.jpg",
              "sourceUrl": "https://bescard.com/cdn/6e16b549cd2b404d8453270292d008ff",
              "publicPath": "assets/dashboard/clusters/0x9541537346dd237c70dcf157c62d65f43de54138b72e95912c3bb04cea505d4c/items/6e16b549cd2b404d8453270292d008ff.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 4,
        "items": [
          {
            "dobItemId": "068db682-e2e5-7004-8bd1-5f63386e4d9e",
            "dataType": 4,
            "dataContent": "1-b526780a302b436dabddd3ce39bad279-普通（1）9张 Al Pacano-N.jpg",
            "dobName": "Al Pacano",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-b526780a302b436dabddd3ce39bad279-普通（1）9张 Al Pacano-N.jpg",
              "cdnId": "b526780a302b436dabddd3ce39bad279",
              "extension": ".jpg",
              "fileName": "b526780a302b436dabddd3ce39bad279.jpg",
              "sourceUrl": "https://bescard.com/cdn/b526780a302b436dabddd3ce39bad279",
              "publicPath": "assets/dashboard/clusters/0x9541537346dd237c70dcf157c62d65f43de54138b72e95912c3bb04cea505d4c/items/b526780a302b436dabddd3ce39bad279.jpg"
            }
          },
          {
            "dobItemId": "068db682-e2e5-7005-ab85-440922233448",
            "dataType": 4,
            "dataContent": "1-5048eeed112948aca57c6e925c2c80b2-普通（2）9张 Old Huang——N2.jpg",
            "dobName": "Old Huang",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-5048eeed112948aca57c6e925c2c80b2-普通（2）9张 Old Huang——N2.jpg",
              "cdnId": "5048eeed112948aca57c6e925c2c80b2",
              "extension": ".jpg",
              "fileName": "5048eeed112948aca57c6e925c2c80b2.jpg",
              "sourceUrl": "https://bescard.com/cdn/5048eeed112948aca57c6e925c2c80b2",
              "publicPath": "assets/dashboard/clusters/0x9541537346dd237c70dcf157c62d65f43de54138b72e95912c3bb04cea505d4c/items/5048eeed112948aca57c6e925c2c80b2.jpg"
            }
          },
          {
            "dobItemId": "068db682-e2e5-7006-bc6e-eeac2aff3254",
            "dataType": 4,
            "dataContent": "1-266c47114ccf41b0a696c4a56fe35f0f-普通（3）9张 Hobo Sheep-N3.jpg",
            "dobName": "Hobo Sheep",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-266c47114ccf41b0a696c4a56fe35f0f-普通（3）9张 Hobo Sheep-N3.jpg",
              "cdnId": "266c47114ccf41b0a696c4a56fe35f0f",
              "extension": ".jpg",
              "fileName": "266c47114ccf41b0a696c4a56fe35f0f.jpg",
              "sourceUrl": "https://bescard.com/cdn/266c47114ccf41b0a696c4a56fe35f0f",
              "publicPath": "assets/dashboard/clusters/0x9541537346dd237c70dcf157c62d65f43de54138b72e95912c3bb04cea505d4c/items/266c47114ccf41b0a696c4a56fe35f0f.jpg"
            }
          },
          {
            "dobItemId": "068db682-e2e5-7007-871f-6aabd23da29b",
            "dataType": 4,
            "dataContent": "1-df5a6aa668124f4f8689fb0ef93a4b4a-普通（4）9张Hugh Wot-N4.jpg",
            "dobName": "Hugh Wot",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-df5a6aa668124f4f8689fb0ef93a4b4a-普通（4）9张Hugh Wot-N4.jpg",
              "cdnId": "df5a6aa668124f4f8689fb0ef93a4b4a",
              "extension": ".jpg",
              "fileName": "df5a6aa668124f4f8689fb0ef93a4b4a.jpg",
              "sourceUrl": "https://bescard.com/cdn/df5a6aa668124f4f8689fb0ef93a4b4a",
              "publicPath": "assets/dashboard/clusters/0x9541537346dd237c70dcf157c62d65f43de54138b72e95912c3bb04cea505d4c/items/df5a6aa668124f4f8689fb0ef93a4b4a.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0x09749ab634981b6b6c64142e1996984c8e05f6b0c7038cdc52e12f89ce06fafd",
    "dobId": "068db30c-5062-7000-b504-972a34f9e6e6",
    "dobType": 3,
    "dobName": "Gold Gacha",
    "openTime": "2025-09-30T03:00:00+00:00",
    "contractAddress": "0xd8238118e0479f715710999de1a879e4aba1034ac3562086436c76ef8d16759f",
    "issuer": "BesCARD",
    "issuerLogo": "1-3de31f03cee64515a3be7b5e5cafaf72-EhOq4VvT_400x400.jpg",
    "onShelves": false,
    "floorPrice": "0",
    "floorPriceValue": 0,
    "change24H": "0",
    "change24HValue": 0,
    "dobTier": "A",
    "isAirDrop": false,
    "coverAsset": {
      "sourceValue": "1-b33280155c9f4c17bbf12dac5f646a48-封面.png",
      "cdnId": "b33280155c9f4c17bbf12dac5f646a48",
      "extension": ".png",
      "fileName": "b33280155c9f4c17bbf12dac5f646a48.png",
      "sourceUrl": "https://bescard.com/cdn/b33280155c9f4c17bbf12dac5f646a48",
      "publicPath": "assets/dashboard/clusters/0x09749ab634981b6b6c64142e1996984c8e05f6b0c7038cdc52e12f89ce06fafd/b33280155c9f4c17bbf12dac5f646a48.png"
    },
    "itemCount": 3,
    "groupNames": [
      "Legendary",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "068db30c-50a4-7000-8edc-50985814c20a",
            "dataType": 4,
            "dataContent": "1-052cda3ee2d94aee9fc1e0deb7762c6e-传说.png",
            "dobName": "Fortune Flake",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-052cda3ee2d94aee9fc1e0deb7762c6e-传说.png",
              "cdnId": "052cda3ee2d94aee9fc1e0deb7762c6e",
              "extension": ".png",
              "fileName": "052cda3ee2d94aee9fc1e0deb7762c6e.png",
              "sourceUrl": "https://bescard.com/cdn/052cda3ee2d94aee9fc1e0deb7762c6e",
              "publicPath": "assets/dashboard/clusters/0x09749ab634981b6b6c64142e1996984c8e05f6b0c7038cdc52e12f89ce06fafd/items/052cda3ee2d94aee9fc1e0deb7762c6e.png"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 1,
        "items": [
          {
            "dobItemId": "068db30c-50c9-7000-97bc-b97340442bc9",
            "dataType": 4,
            "dataContent": "1-040bde0d087c4b099a176e7ddd9e3862-稀有.png",
            "dobName": "Shimmer Prize",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-040bde0d087c4b099a176e7ddd9e3862-稀有.png",
              "cdnId": "040bde0d087c4b099a176e7ddd9e3862",
              "extension": ".png",
              "fileName": "040bde0d087c4b099a176e7ddd9e3862.png",
              "sourceUrl": "https://bescard.com/cdn/040bde0d087c4b099a176e7ddd9e3862",
              "publicPath": "assets/dashboard/clusters/0x09749ab634981b6b6c64142e1996984c8e05f6b0c7038cdc52e12f89ce06fafd/items/040bde0d087c4b099a176e7ddd9e3862.png"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 1,
        "items": [
          {
            "dobItemId": "068db30c-50ca-7000-bcf1-cb4aad6ed80f",
            "dataType": 4,
            "dataContent": "1-559fb33f476146efa5576cb35e2f1565-普通.png",
            "dobName": "BesCARD Explorer",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-559fb33f476146efa5576cb35e2f1565-普通.png",
              "cdnId": "559fb33f476146efa5576cb35e2f1565",
              "extension": ".png",
              "fileName": "559fb33f476146efa5576cb35e2f1565.png",
              "sourceUrl": "https://bescard.com/cdn/559fb33f476146efa5576cb35e2f1565",
              "publicPath": "assets/dashboard/clusters/0x09749ab634981b6b6c64142e1996984c8e05f6b0c7038cdc52e12f89ce06fafd/items/559fb33f476146efa5576cb35e2f1565.png"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0x5d39932b841d12300ae448b8b079b5c7c879b76d0780fa6fb2ecabede7375bde",
    "dobId": "068d39b4-9214-7000-9581-155526148226",
    "dobType": 3,
    "dobName": "Ms Vampire Love to Date with Me",
    "openTime": "2025-09-24T07:20:00+00:00",
    "contractAddress": "0xb69d756c4d611d976f7f7835753e3e6535202c0df41d52aa4bea400a919372c9",
    "issuer": "卢隆制作组",
    "issuerLogo": "1-01c791b39fa24a5482cd7e54ddf16ac2-logo.jpg",
    "onShelves": false,
    "floorPrice": "100",
    "floorPriceValue": 100,
    "change24H": "0",
    "change24HValue": 0,
    "dobTier": "C",
    "isAirDrop": true,
    "coverAsset": {
      "sourceValue": "1-889a49eb398c46f080c798ef41913849-盲盒封面.jpg",
      "cdnId": "889a49eb398c46f080c798ef41913849",
      "extension": ".jpg",
      "fileName": "889a49eb398c46f080c798ef41913849.jpg",
      "sourceUrl": "https://bescard.com/cdn/889a49eb398c46f080c798ef41913849",
      "publicPath": "assets/dashboard/clusters/0x5d39932b841d12300ae448b8b079b5c7c879b76d0780fa6fb2ecabede7375bde/889a49eb398c46f080c798ef41913849.jpg"
    },
    "itemCount": 6,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "068d39b4-9215-7005-9d6a-2eff4dc469d1",
            "dataType": 4,
            "dataContent": "1-8d8cb5facf9240c8ab28b7c1e58a4a58-吸血鬼卡牌6.jpg",
            "dobName": "Irene - Date Outfit",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-8d8cb5facf9240c8ab28b7c1e58a4a58-吸血鬼卡牌6.jpg",
              "cdnId": "8d8cb5facf9240c8ab28b7c1e58a4a58",
              "extension": ".jpg",
              "fileName": "8d8cb5facf9240c8ab28b7c1e58a4a58.jpg",
              "sourceUrl": "https://bescard.com/cdn/8d8cb5facf9240c8ab28b7c1e58a4a58",
              "publicPath": "assets/dashboard/clusters/0x5d39932b841d12300ae448b8b079b5c7c879b76d0780fa6fb2ecabede7375bde/items/8d8cb5facf9240c8ab28b7c1e58a4a58.jpg"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "068d39b4-9215-7004-833c-f3db256151f3",
            "dataType": 4,
            "dataContent": "1-3b87ab27e8b44af79f57e17f0495a1d6-吸血鬼卡牌5.jpg",
            "dobName": "Irene - Childhood",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-3b87ab27e8b44af79f57e17f0495a1d6-吸血鬼卡牌5.jpg",
              "cdnId": "3b87ab27e8b44af79f57e17f0495a1d6",
              "extension": ".jpg",
              "fileName": "3b87ab27e8b44af79f57e17f0495a1d6.jpg",
              "sourceUrl": "https://bescard.com/cdn/3b87ab27e8b44af79f57e17f0495a1d6",
              "publicPath": "assets/dashboard/clusters/0x5d39932b841d12300ae448b8b079b5c7c879b76d0780fa6fb2ecabede7375bde/items/3b87ab27e8b44af79f57e17f0495a1d6.jpg"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 2,
        "items": [
          {
            "dobItemId": "068d39b4-9215-7002-9166-a9004308580c",
            "dataType": 4,
            "dataContent": "1-cec8d8096e6d49c68d0fe11f577ef77b-吸血鬼卡牌3.jpg",
            "dobName": "Her Dance Moves",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-cec8d8096e6d49c68d0fe11f577ef77b-吸血鬼卡牌3.jpg",
              "cdnId": "cec8d8096e6d49c68d0fe11f577ef77b",
              "extension": ".jpg",
              "fileName": "cec8d8096e6d49c68d0fe11f577ef77b.jpg",
              "sourceUrl": "https://bescard.com/cdn/cec8d8096e6d49c68d0fe11f577ef77b",
              "publicPath": "assets/dashboard/clusters/0x5d39932b841d12300ae448b8b079b5c7c879b76d0780fa6fb2ecabede7375bde/items/cec8d8096e6d49c68d0fe11f577ef77b.jpg"
            }
          },
          {
            "dobItemId": "068d39b4-9215-7003-8b05-a5838bc36d24",
            "dataType": 4,
            "dataContent": "1-56aa75f53930432f8d6f746abd506f3a-吸血鬼卡牌4.jpg",
            "dobName": "The First Ray of Sunlight",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-56aa75f53930432f8d6f746abd506f3a-吸血鬼卡牌4.jpg",
              "cdnId": "56aa75f53930432f8d6f746abd506f3a",
              "extension": ".jpg",
              "fileName": "56aa75f53930432f8d6f746abd506f3a.jpg",
              "sourceUrl": "https://bescard.com/cdn/56aa75f53930432f8d6f746abd506f3a",
              "publicPath": "assets/dashboard/clusters/0x5d39932b841d12300ae448b8b079b5c7c879b76d0780fa6fb2ecabede7375bde/items/56aa75f53930432f8d6f746abd506f3a.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 2,
        "items": [
          {
            "dobItemId": "068d39b4-9215-7000-8406-af898b79b30d",
            "dataType": 4,
            "dataContent": "1-1fb78ba28a4f4c5da400d502e93da925-吸血鬼卡牌1.jpg",
            "dobName": "Garden Stroll",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-1fb78ba28a4f4c5da400d502e93da925-吸血鬼卡牌1.jpg",
              "cdnId": "1fb78ba28a4f4c5da400d502e93da925",
              "extension": ".jpg",
              "fileName": "1fb78ba28a4f4c5da400d502e93da925.jpg",
              "sourceUrl": "https://bescard.com/cdn/1fb78ba28a4f4c5da400d502e93da925",
              "publicPath": "assets/dashboard/clusters/0x5d39932b841d12300ae448b8b079b5c7c879b76d0780fa6fb2ecabede7375bde/items/1fb78ba28a4f4c5da400d502e93da925.jpg"
            }
          },
          {
            "dobItemId": "068d39b4-9215-7001-813e-6542fff58e5c",
            "dataType": 4,
            "dataContent": "1-dfbc7fa6c56c4e3aa6879f776e64f611-吸血鬼卡牌2.jpg",
            "dobName": "Game Time",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-dfbc7fa6c56c4e3aa6879f776e64f611-吸血鬼卡牌2.jpg",
              "cdnId": "dfbc7fa6c56c4e3aa6879f776e64f611",
              "extension": ".jpg",
              "fileName": "dfbc7fa6c56c4e3aa6879f776e64f611.jpg",
              "sourceUrl": "https://bescard.com/cdn/dfbc7fa6c56c4e3aa6879f776e64f611",
              "publicPath": "assets/dashboard/clusters/0x5d39932b841d12300ae448b8b079b5c7c879b76d0780fa6fb2ecabede7375bde/items/dfbc7fa6c56c4e3aa6879f776e64f611.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0x7fae294326b0fe0f0762e6c3f5fb9ffd0835b24f42eb8254b1666738e6c00507",
    "dobId": "068c3c24-f047-7000-bcfc-cae692180f5d",
    "dobType": 3,
    "dobName": "Messy Up",
    "openTime": "2025-09-13T04:00:00+00:00",
    "contractAddress": "0xbf9465d0116c8fe38ac1add882cfc1b58863ea9669b4e563940769a9c99dacfe",
    "issuer": "Liquid Meow",
    "issuerLogo": "1-fc61da561e074971b4cb4b1002416e1b-logo.jpeg",
    "onShelves": false,
    "floorPrice": "47",
    "floorPriceValue": 47,
    "change24H": "0",
    "change24HValue": 0,
    "dobTier": "C",
    "isAirDrop": true,
    "coverAsset": {
      "sourceValue": "1-d048ee882e7c4cb38146bcb8e20c6fbb-盲盒封面.jpg",
      "cdnId": "d048ee882e7c4cb38146bcb8e20c6fbb",
      "extension": ".jpg",
      "fileName": "d048ee882e7c4cb38146bcb8e20c6fbb.jpg",
      "sourceUrl": "https://bescard.com/cdn/d048ee882e7c4cb38146bcb8e20c6fbb",
      "publicPath": "assets/dashboard/clusters/0x7fae294326b0fe0f0762e6c3f5fb9ffd0835b24f42eb8254b1666738e6c00507/d048ee882e7c4cb38146bcb8e20c6fbb.jpg"
    },
    "itemCount": 8,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "068c3c24-f048-7007-8ad9-7e0d067f6e10",
            "dataType": 4,
            "dataContent": "1-2999e9b4a0974bc7ad377a4d215e49d2-游戏-SSR.jpg",
            "dobName": "Demon Cat",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-2999e9b4a0974bc7ad377a4d215e49d2-游戏-SSR.jpg",
              "cdnId": "2999e9b4a0974bc7ad377a4d215e49d2",
              "extension": ".jpg",
              "fileName": "2999e9b4a0974bc7ad377a4d215e49d2.jpg",
              "sourceUrl": "https://bescard.com/cdn/2999e9b4a0974bc7ad377a4d215e49d2",
              "publicPath": "assets/dashboard/clusters/0x7fae294326b0fe0f0762e6c3f5fb9ffd0835b24f42eb8254b1666738e6c00507/items/2999e9b4a0974bc7ad377a4d215e49d2.jpg"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "068c3c24-f048-7006-814f-16238a1e5596",
            "dataType": 4,
            "dataContent": "1-5d5960ef27624c688b0784647daabf03-游戏-SR.jpg",
            "dobName": "Angel Gingerbread",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-5d5960ef27624c688b0784647daabf03-游戏-SR.jpg",
              "cdnId": "5d5960ef27624c688b0784647daabf03",
              "extension": ".jpg",
              "fileName": "5d5960ef27624c688b0784647daabf03.jpg",
              "sourceUrl": "https://bescard.com/cdn/5d5960ef27624c688b0784647daabf03",
              "publicPath": "assets/dashboard/clusters/0x7fae294326b0fe0f0762e6c3f5fb9ffd0835b24f42eb8254b1666738e6c00507/items/5d5960ef27624c688b0784647daabf03.jpg"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 2,
        "items": [
          {
            "dobItemId": "068c3c24-f048-7004-af4f-cefd9437f62d",
            "dataType": 4,
            "dataContent": "1-14fd5c91a7af41218d52761b0e0bc3fa-游戏-R1.jpg",
            "dobName": "Lyricplume Parrot",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-14fd5c91a7af41218d52761b0e0bc3fa-游戏-R1.jpg",
              "cdnId": "14fd5c91a7af41218d52761b0e0bc3fa",
              "extension": ".jpg",
              "fileName": "14fd5c91a7af41218d52761b0e0bc3fa.jpg",
              "sourceUrl": "https://bescard.com/cdn/14fd5c91a7af41218d52761b0e0bc3fa",
              "publicPath": "assets/dashboard/clusters/0x7fae294326b0fe0f0762e6c3f5fb9ffd0835b24f42eb8254b1666738e6c00507/items/14fd5c91a7af41218d52761b0e0bc3fa.jpg"
            }
          },
          {
            "dobItemId": "068c3c24-f048-7005-bff0-405c8533864e",
            "dataType": 4,
            "dataContent": "1-3e1be8d299f24d4fa648d8ebf8c3e28b-游戏-R2.jpg",
            "dobName": "Ranger Woof",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-3e1be8d299f24d4fa648d8ebf8c3e28b-游戏-R2.jpg",
              "cdnId": "3e1be8d299f24d4fa648d8ebf8c3e28b",
              "extension": ".jpg",
              "fileName": "3e1be8d299f24d4fa648d8ebf8c3e28b.jpg",
              "sourceUrl": "https://bescard.com/cdn/3e1be8d299f24d4fa648d8ebf8c3e28b",
              "publicPath": "assets/dashboard/clusters/0x7fae294326b0fe0f0762e6c3f5fb9ffd0835b24f42eb8254b1666738e6c00507/items/3e1be8d299f24d4fa648d8ebf8c3e28b.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 4,
        "items": [
          {
            "dobItemId": "068c3c24-f048-7000-b6ff-a6f17fc398fb",
            "dataType": 4,
            "dataContent": "1-1b19250d509a4585ba0a67aea9540972-游戏-N1.jpg",
            "dobName": "Dragonlike Parrot",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-1b19250d509a4585ba0a67aea9540972-游戏-N1.jpg",
              "cdnId": "1b19250d509a4585ba0a67aea9540972",
              "extension": ".jpg",
              "fileName": "1b19250d509a4585ba0a67aea9540972.jpg",
              "sourceUrl": "https://bescard.com/cdn/1b19250d509a4585ba0a67aea9540972",
              "publicPath": "assets/dashboard/clusters/0x7fae294326b0fe0f0762e6c3f5fb9ffd0835b24f42eb8254b1666738e6c00507/items/1b19250d509a4585ba0a67aea9540972.jpg"
            }
          },
          {
            "dobItemId": "068c3c24-f048-7001-8666-57490a7cc6d8",
            "dataType": 4,
            "dataContent": "1-8506ac01690d4f96a530fa113589b3ca-游戏-N2.jpg",
            "dobName": "Mercuris Meow",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-8506ac01690d4f96a530fa113589b3ca-游戏-N2.jpg",
              "cdnId": "8506ac01690d4f96a530fa113589b3ca",
              "extension": ".jpg",
              "fileName": "8506ac01690d4f96a530fa113589b3ca.jpg",
              "sourceUrl": "https://bescard.com/cdn/8506ac01690d4f96a530fa113589b3ca",
              "publicPath": "assets/dashboard/clusters/0x7fae294326b0fe0f0762e6c3f5fb9ffd0835b24f42eb8254b1666738e6c00507/items/8506ac01690d4f96a530fa113589b3ca.jpg"
            }
          },
          {
            "dobItemId": "068c3c24-f048-7002-a9db-7aa4b04efbaf",
            "dataType": 4,
            "dataContent": "1-d15a7d7b5ceb428089563695863b21b8-游戏-N3.jpg",
            "dobName": "Undead Gingerbread Man",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-d15a7d7b5ceb428089563695863b21b8-游戏-N3.jpg",
              "cdnId": "d15a7d7b5ceb428089563695863b21b8",
              "extension": ".jpg",
              "fileName": "d15a7d7b5ceb428089563695863b21b8.jpg",
              "sourceUrl": "https://bescard.com/cdn/d15a7d7b5ceb428089563695863b21b8",
              "publicPath": "assets/dashboard/clusters/0x7fae294326b0fe0f0762e6c3f5fb9ffd0835b24f42eb8254b1666738e6c00507/items/d15a7d7b5ceb428089563695863b21b8.jpg"
            }
          },
          {
            "dobItemId": "068c3c24-f048-7003-b8c0-099a66fc42f2",
            "dataType": 4,
            "dataContent": "1-6e6ab9f859ff4e68bbe6c196cd1fa09b-游戏-N4.jpg",
            "dobName": "Ironclad Woof",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-6e6ab9f859ff4e68bbe6c196cd1fa09b-游戏-N4.jpg",
              "cdnId": "6e6ab9f859ff4e68bbe6c196cd1fa09b",
              "extension": ".jpg",
              "fileName": "6e6ab9f859ff4e68bbe6c196cd1fa09b.jpg",
              "sourceUrl": "https://bescard.com/cdn/6e6ab9f859ff4e68bbe6c196cd1fa09b",
              "publicPath": "assets/dashboard/clusters/0x7fae294326b0fe0f0762e6c3f5fb9ffd0835b24f42eb8254b1666738e6c00507/items/6e6ab9f859ff4e68bbe6c196cd1fa09b.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0xe8df97e3df826f5f22d3a8087484b73813145e9a5bc98842369b2da5c31965f3",
    "dobId": "068bb8de-42a2-7000-aacb-b1f01c7084db",
    "dobType": 3,
    "dobName": "Nostalgic 80s:YinYang Street",
    "openTime": "2025-09-06T01:30:00+00:00",
    "contractAddress": "0xed7773b849ad103b7e1b1d514bc27a166a295ff0f18b11517d4a2c4c3f3ed101",
    "issuer": "OSC STUDIO",
    "issuerLogo": "1-046049399cfa4c9ca58b052ba84005e2-logo.jpg",
    "onShelves": false,
    "floorPrice": "50",
    "floorPriceValue": 50,
    "change24H": "0",
    "change24HValue": 0,
    "dobTier": "C",
    "isAirDrop": true,
    "coverAsset": {
      "sourceValue": "1-b22d27625c4b416aa0f477f98b84ec19-盲盒封面.jpg",
      "cdnId": "b22d27625c4b416aa0f477f98b84ec19",
      "extension": ".jpg",
      "fileName": "b22d27625c4b416aa0f477f98b84ec19.jpg",
      "sourceUrl": "https://bescard.com/cdn/b22d27625c4b416aa0f477f98b84ec19",
      "publicPath": "assets/dashboard/clusters/0xe8df97e3df826f5f22d3a8087484b73813145e9a5bc98842369b2da5c31965f3/b22d27625c4b416aa0f477f98b84ec19.jpg"
    },
    "itemCount": 8,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "068bb8de-42a4-7006-9e92-76063c9a5bb3",
            "dataType": 4,
            "dataContent": "1-21a4ab502dc64b969bcefd284de75e35-恐怖解谜游戏-NFT-传说.jpg",
            "dobName": "Flower of the Other Shore",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-21a4ab502dc64b969bcefd284de75e35-恐怖解谜游戏-NFT-传说.jpg",
              "cdnId": "21a4ab502dc64b969bcefd284de75e35",
              "extension": ".jpg",
              "fileName": "21a4ab502dc64b969bcefd284de75e35.jpg",
              "sourceUrl": "https://bescard.com/cdn/21a4ab502dc64b969bcefd284de75e35",
              "publicPath": "assets/dashboard/clusters/0xe8df97e3df826f5f22d3a8087484b73813145e9a5bc98842369b2da5c31965f3/items/21a4ab502dc64b969bcefd284de75e35.jpg"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "068bb8de-42a4-7005-8800-35cca0d521e6",
            "dataType": 4,
            "dataContent": "1-0c4f38327ed04a27b7050565b5ec5179-恐怖解谜游戏-NFT-史诗.jpg",
            "dobName": "Mystical Ritual Objects",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-0c4f38327ed04a27b7050565b5ec5179-恐怖解谜游戏-NFT-史诗.jpg",
              "cdnId": "0c4f38327ed04a27b7050565b5ec5179",
              "extension": ".jpg",
              "fileName": "0c4f38327ed04a27b7050565b5ec5179.jpg",
              "sourceUrl": "https://bescard.com/cdn/0c4f38327ed04a27b7050565b5ec5179",
              "publicPath": "assets/dashboard/clusters/0xe8df97e3df826f5f22d3a8087484b73813145e9a5bc98842369b2da5c31965f3/items/0c4f38327ed04a27b7050565b5ec5179.jpg"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 2,
        "items": [
          {
            "dobItemId": "068bb8de-42a4-7003-be7d-ed89e21ed299",
            "dataType": 4,
            "dataContent": "1-5df07f2b8d13495b9399867928d419d6-恐怖解谜游戏-NFT-稀有1.jpg",
            "dobName": "Midnight Alleyway",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-5df07f2b8d13495b9399867928d419d6-恐怖解谜游戏-NFT-稀有1.jpg",
              "cdnId": "5df07f2b8d13495b9399867928d419d6",
              "extension": ".jpg",
              "fileName": "5df07f2b8d13495b9399867928d419d6.jpg",
              "sourceUrl": "https://bescard.com/cdn/5df07f2b8d13495b9399867928d419d6",
              "publicPath": "assets/dashboard/clusters/0xe8df97e3df826f5f22d3a8087484b73813145e9a5bc98842369b2da5c31965f3/items/5df07f2b8d13495b9399867928d419d6.jpg"
            }
          },
          {
            "dobItemId": "068bb8de-42a4-7004-80ba-02868c885723",
            "dataType": 4,
            "dataContent": "1-df73a60aa9464931aceb26ed28757c93-恐怖解谜游戏-NFT-稀有2.jpg",
            "dobName": "Kaleidoscope",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-df73a60aa9464931aceb26ed28757c93-恐怖解谜游戏-NFT-稀有2.jpg",
              "cdnId": "df73a60aa9464931aceb26ed28757c93",
              "extension": ".jpg",
              "fileName": "df73a60aa9464931aceb26ed28757c93.jpg",
              "sourceUrl": "https://bescard.com/cdn/df73a60aa9464931aceb26ed28757c93",
              "publicPath": "assets/dashboard/clusters/0xe8df97e3df826f5f22d3a8087484b73813145e9a5bc98842369b2da5c31965f3/items/df73a60aa9464931aceb26ed28757c93.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 4,
        "items": [
          {
            "dobItemId": "068bb8de-42a3-7000-aed7-539453575335",
            "dataType": 4,
            "dataContent": "1-2dcc3748a5db4b97901077cf5f8f084b-恐怖解谜游戏-NFT-普通1.jpg",
            "dobName": "Old-School cinema",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-2dcc3748a5db4b97901077cf5f8f084b-恐怖解谜游戏-NFT-普通1.jpg",
              "cdnId": "2dcc3748a5db4b97901077cf5f8f084b",
              "extension": ".jpg",
              "fileName": "2dcc3748a5db4b97901077cf5f8f084b.jpg",
              "sourceUrl": "https://bescard.com/cdn/2dcc3748a5db4b97901077cf5f8f084b",
              "publicPath": "assets/dashboard/clusters/0xe8df97e3df826f5f22d3a8087484b73813145e9a5bc98842369b2da5c31965f3/items/2dcc3748a5db4b97901077cf5f8f084b.jpg"
            }
          },
          {
            "dobItemId": "068bb8de-42a4-7000-90ad-b89478f388e2",
            "dataType": 4,
            "dataContent": "1-10bf362e25df4e48b545892d939555a2-恐怖解谜游戏-NFT-普通2.jpg",
            "dobName": "Guard's Lodge",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-10bf362e25df4e48b545892d939555a2-恐怖解谜游戏-NFT-普通2.jpg",
              "cdnId": "10bf362e25df4e48b545892d939555a2",
              "extension": ".jpg",
              "fileName": "10bf362e25df4e48b545892d939555a2.jpg",
              "sourceUrl": "https://bescard.com/cdn/10bf362e25df4e48b545892d939555a2",
              "publicPath": "assets/dashboard/clusters/0xe8df97e3df826f5f22d3a8087484b73813145e9a5bc98842369b2da5c31965f3/items/10bf362e25df4e48b545892d939555a2.jpg"
            }
          },
          {
            "dobItemId": "068bb8de-42a4-7001-8009-da969c10e451",
            "dataType": 4,
            "dataContent": "1-9e6f5e024c7746c1bfe1be726b7fbbcb-恐怖解谜游戏-NFT-普通3.jpg",
            "dobName": "Living Room in a Residential Home",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-9e6f5e024c7746c1bfe1be726b7fbbcb-恐怖解谜游戏-NFT-普通3.jpg",
              "cdnId": "9e6f5e024c7746c1bfe1be726b7fbbcb",
              "extension": ".jpg",
              "fileName": "9e6f5e024c7746c1bfe1be726b7fbbcb.jpg",
              "sourceUrl": "https://bescard.com/cdn/9e6f5e024c7746c1bfe1be726b7fbbcb",
              "publicPath": "assets/dashboard/clusters/0xe8df97e3df826f5f22d3a8087484b73813145e9a5bc98842369b2da5c31965f3/items/9e6f5e024c7746c1bfe1be726b7fbbcb.jpg"
            }
          },
          {
            "dobItemId": "068bb8de-42a4-7002-8175-455d13b07a35",
            "dataType": 4,
            "dataContent": "1-50456dcf92aa49f6b705bb42d4f4f11e-恐怖解谜游戏-NFT-普通4.jpg",
            "dobName": "Corner Grocery Store",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-50456dcf92aa49f6b705bb42d4f4f11e-恐怖解谜游戏-NFT-普通4.jpg",
              "cdnId": "50456dcf92aa49f6b705bb42d4f4f11e",
              "extension": ".jpg",
              "fileName": "50456dcf92aa49f6b705bb42d4f4f11e.jpg",
              "sourceUrl": "https://bescard.com/cdn/50456dcf92aa49f6b705bb42d4f4f11e",
              "publicPath": "assets/dashboard/clusters/0xe8df97e3df826f5f22d3a8087484b73813145e9a5bc98842369b2da5c31965f3/items/50456dcf92aa49f6b705bb42d4f4f11e.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0xf5f7e85e10a82203783035ce34baa9333191784a2da4abe7bb248c53288a8eb6",
    "dobId": "068b511d-2115-7000-9190-7c83c1de9f24",
    "dobType": 3,
    "dobName": "Herba Project",
    "openTime": "2025-09-01T06:00:00+00:00",
    "contractAddress": "0xe177505ddf9db16fe44ac62330ab0a0e231aabdc8b009ec53df8bc2e24b9f82f",
    "issuer": "IndieCainStudio",
    "issuerLogo": "1-5deaee5fd4ad47e39a27e9e785d61c2b-发行方头像jpg.jpg",
    "onShelves": false,
    "floorPrice": "30",
    "floorPriceValue": 30,
    "change24H": "-0.47368421052631576",
    "change24HValue": -0.47368421052631576,
    "dobTier": "C",
    "isAirDrop": true,
    "coverAsset": {
      "sourceValue": "1-a50ee4c75a3d42adbb8c0be795627b09-盲盒封面.jpg",
      "cdnId": "a50ee4c75a3d42adbb8c0be795627b09",
      "extension": ".jpg",
      "fileName": "a50ee4c75a3d42adbb8c0be795627b09.jpg",
      "sourceUrl": "https://bescard.com/cdn/a50ee4c75a3d42adbb8c0be795627b09",
      "publicPath": "assets/dashboard/clusters/0xf5f7e85e10a82203783035ce34baa9333191784a2da4abe7bb248c53288a8eb6/a50ee4c75a3d42adbb8c0be795627b09.jpg"
    },
    "itemCount": 8,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "068b511d-211d-7005-bee2-8f0ae7f2f050",
            "dataType": 4,
            "dataContent": "1-c49d5305fb104941b2013c36cf554242-SSR-凯恩-Hiberhomo, Aestiphyte.png",
            "dobName": "Hiberhomo, Aestiphyte",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-c49d5305fb104941b2013c36cf554242-SSR-凯恩-Hiberhomo, Aestiphyte.png",
              "cdnId": "c49d5305fb104941b2013c36cf554242",
              "extension": ".png",
              "fileName": "c49d5305fb104941b2013c36cf554242.png",
              "sourceUrl": "https://bescard.com/cdn/c49d5305fb104941b2013c36cf554242",
              "publicPath": "assets/dashboard/clusters/0xf5f7e85e10a82203783035ce34baa9333191784a2da4abe7bb248c53288a8eb6/items/c49d5305fb104941b2013c36cf554242.png"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 2,
        "items": [
          {
            "dobItemId": "068b511d-211d-7003-8481-1cd8524dc889",
            "dataType": 4,
            "dataContent": "1-bbcdc109b56547dcb7c801062a27a0a0-SR-凯恩-Corrodervine.jpg",
            "dobName": "Corrodervine",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-bbcdc109b56547dcb7c801062a27a0a0-SR-凯恩-Corrodervine.jpg",
              "cdnId": "bbcdc109b56547dcb7c801062a27a0a0",
              "extension": ".jpg",
              "fileName": "bbcdc109b56547dcb7c801062a27a0a0.jpg",
              "sourceUrl": "https://bescard.com/cdn/bbcdc109b56547dcb7c801062a27a0a0",
              "publicPath": "assets/dashboard/clusters/0xf5f7e85e10a82203783035ce34baa9333191784a2da4abe7bb248c53288a8eb6/items/bbcdc109b56547dcb7c801062a27a0a0.jpg"
            }
          },
          {
            "dobItemId": "068b511d-211d-7004-9a98-6b1bd7abe322",
            "dataType": 4,
            "dataContent": "1-748797ca32754fc8b70ea038f4d0ea3a-SR凯恩-Moonsickle.jpg",
            "dobName": "Moonsickle",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-748797ca32754fc8b70ea038f4d0ea3a-SR凯恩-Moonsickle.jpg",
              "cdnId": "748797ca32754fc8b70ea038f4d0ea3a",
              "extension": ".jpg",
              "fileName": "748797ca32754fc8b70ea038f4d0ea3a.jpg",
              "sourceUrl": "https://bescard.com/cdn/748797ca32754fc8b70ea038f4d0ea3a",
              "publicPath": "assets/dashboard/clusters/0xf5f7e85e10a82203783035ce34baa9333191784a2da4abe7bb248c53288a8eb6/items/748797ca32754fc8b70ea038f4d0ea3a.jpg"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 2,
        "items": [
          {
            "dobItemId": "068b511d-211d-7001-a180-99177e19ede1",
            "dataType": 4,
            "dataContent": "1-033b072d11314777b2e9cd91633c7282-R-凯恩-Night-Moth-Orchid.jpg",
            "dobName": "Night Moth Orchid",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-033b072d11314777b2e9cd91633c7282-R-凯恩-Night-Moth-Orchid.jpg",
              "cdnId": "033b072d11314777b2e9cd91633c7282",
              "extension": ".jpg",
              "fileName": "033b072d11314777b2e9cd91633c7282.jpg",
              "sourceUrl": "https://bescard.com/cdn/033b072d11314777b2e9cd91633c7282",
              "publicPath": "assets/dashboard/clusters/0xf5f7e85e10a82203783035ce34baa9333191784a2da4abe7bb248c53288a8eb6/items/033b072d11314777b2e9cd91633c7282.jpg"
            }
          },
          {
            "dobItemId": "068b511d-211d-7002-b3b4-0a6934733cc8",
            "dataType": 4,
            "dataContent": "1-e43f5b19a72b4144ac1ec7c6a70881b2-R-凯恩-Thousand-Eye-Toadstool.jpg",
            "dobName": "Thousand-Eye Toadstool",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-e43f5b19a72b4144ac1ec7c6a70881b2-R-凯恩-Thousand-Eye-Toadstool.jpg",
              "cdnId": "e43f5b19a72b4144ac1ec7c6a70881b2",
              "extension": ".jpg",
              "fileName": "e43f5b19a72b4144ac1ec7c6a70881b2.jpg",
              "sourceUrl": "https://bescard.com/cdn/e43f5b19a72b4144ac1ec7c6a70881b2",
              "publicPath": "assets/dashboard/clusters/0xf5f7e85e10a82203783035ce34baa9333191784a2da4abe7bb248c53288a8eb6/items/e43f5b19a72b4144ac1ec7c6a70881b2.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 3,
        "items": [
          {
            "dobItemId": "068b511d-211b-7000-9660-5780f537d0ff",
            "dataType": 4,
            "dataContent": "1-f1db46e252f944a8a9b55d5d93144b20-N-凯恩-Sandorchid.jpg",
            "dobName": "Sandorchid",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-f1db46e252f944a8a9b55d5d93144b20-N-凯恩-Sandorchid.jpg",
              "cdnId": "f1db46e252f944a8a9b55d5d93144b20",
              "extension": ".jpg",
              "fileName": "f1db46e252f944a8a9b55d5d93144b20.jpg",
              "sourceUrl": "https://bescard.com/cdn/f1db46e252f944a8a9b55d5d93144b20",
              "publicPath": "assets/dashboard/clusters/0xf5f7e85e10a82203783035ce34baa9333191784a2da4abe7bb248c53288a8eb6/items/f1db46e252f944a8a9b55d5d93144b20.jpg"
            }
          },
          {
            "dobItemId": "068b511d-211c-7000-9d83-85eed2f838e1",
            "dataType": 4,
            "dataContent": "1-b1a5a48ddf794355807c1f71bc3984ff-N-凯恩-Stonevine.jpg",
            "dobName": "Stonevine",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-b1a5a48ddf794355807c1f71bc3984ff-N-凯恩-Stonevine.jpg",
              "cdnId": "b1a5a48ddf794355807c1f71bc3984ff",
              "extension": ".jpg",
              "fileName": "b1a5a48ddf794355807c1f71bc3984ff.jpg",
              "sourceUrl": "https://bescard.com/cdn/b1a5a48ddf794355807c1f71bc3984ff",
              "publicPath": "assets/dashboard/clusters/0xf5f7e85e10a82203783035ce34baa9333191784a2da4abe7bb248c53288a8eb6/items/b1a5a48ddf794355807c1f71bc3984ff.jpg"
            }
          },
          {
            "dobItemId": "068b511d-211d-7000-bb13-6c76990ef195",
            "dataType": 4,
            "dataContent": "1-7c642206b45546748dbe1cf9df5300c0-N-凯恩-Ember-Heart-Banyan.jpg",
            "dobName": "Ember-Heart Banyan",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-7c642206b45546748dbe1cf9df5300c0-N-凯恩-Ember-Heart-Banyan.jpg",
              "cdnId": "7c642206b45546748dbe1cf9df5300c0",
              "extension": ".jpg",
              "fileName": "7c642206b45546748dbe1cf9df5300c0.jpg",
              "sourceUrl": "https://bescard.com/cdn/7c642206b45546748dbe1cf9df5300c0",
              "publicPath": "assets/dashboard/clusters/0xf5f7e85e10a82203783035ce34baa9333191784a2da4abe7bb248c53288a8eb6/items/7c642206b45546748dbe1cf9df5300c0.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0x46ce4538741ae906a7baae3fe0c4a704cc44f819b67127b06a085b3296602f94",
    "dobId": "068afc21-5207-7000-b2c8-6fad25130f19",
    "dobType": 3,
    "dobName": "Rider Valkyries",
    "openTime": "2025-08-28T02:43:00+00:00",
    "contractAddress": "0x14a5b27933b76334325d2f45f4df048a0f03b1bb5bd0b553761433f4b92f26a2",
    "issuer": "Chasing Dreams Studio",
    "issuerLogo": "1-a39beade65a24c78a39ae47cf6b374b2-发行头像.jpg",
    "onShelves": false,
    "floorPrice": "86",
    "floorPriceValue": 86,
    "change24H": "0",
    "change24HValue": 0,
    "dobTier": "C",
    "isAirDrop": true,
    "coverAsset": {
      "sourceValue": "1-fa2ef9301b614cec8e7ba9c9710e2fae-盲盒封面.png",
      "cdnId": "fa2ef9301b614cec8e7ba9c9710e2fae",
      "extension": ".png",
      "fileName": "fa2ef9301b614cec8e7ba9c9710e2fae.png",
      "sourceUrl": "https://bescard.com/cdn/fa2ef9301b614cec8e7ba9c9710e2fae",
      "publicPath": "assets/dashboard/clusters/0x46ce4538741ae906a7baae3fe0c4a704cc44f819b67127b06a085b3296602f94/fa2ef9301b614cec8e7ba9c9710e2fae.png"
    },
    "itemCount": 8,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "068afc21-5286-7004-80cc-e704df9f7260",
            "dataType": 4,
            "dataContent": "1-40f04d376c924592a32c9a13ed1a9a5b-竞速-SSR.jpg",
            "dobName": "Sky-Cloud Sovereign",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-40f04d376c924592a32c9a13ed1a9a5b-竞速-SSR.jpg",
              "cdnId": "40f04d376c924592a32c9a13ed1a9a5b",
              "extension": ".jpg",
              "fileName": "40f04d376c924592a32c9a13ed1a9a5b.jpg",
              "sourceUrl": "https://bescard.com/cdn/40f04d376c924592a32c9a13ed1a9a5b",
              "publicPath": "assets/dashboard/clusters/0x46ce4538741ae906a7baae3fe0c4a704cc44f819b67127b06a085b3296602f94/items/40f04d376c924592a32c9a13ed1a9a5b.jpg"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "068afc21-5286-7003-8472-fb9aa133ef3b",
            "dataType": 4,
            "dataContent": "1-7a0ad5dca020415396dec494a492eb73-竞速-SR.jpg",
            "dobName": "Corrosion Rider",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-7a0ad5dca020415396dec494a492eb73-竞速-SR.jpg",
              "cdnId": "7a0ad5dca020415396dec494a492eb73",
              "extension": ".jpg",
              "fileName": "7a0ad5dca020415396dec494a492eb73.jpg",
              "sourceUrl": "https://bescard.com/cdn/7a0ad5dca020415396dec494a492eb73",
              "publicPath": "assets/dashboard/clusters/0x46ce4538741ae906a7baae3fe0c4a704cc44f819b67127b06a085b3296602f94/items/7a0ad5dca020415396dec494a492eb73.jpg"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 2,
        "items": [
          {
            "dobItemId": "068afc21-5286-7001-8cf6-934206391b79",
            "dataType": 4,
            "dataContent": "1-a51b9119439048c1b981bc294b5f0425-竞速-R-1.jpg",
            "dobName": "Lyna Xiaoyun",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-a51b9119439048c1b981bc294b5f0425-竞速-R-1.jpg",
              "cdnId": "a51b9119439048c1b981bc294b5f0425",
              "extension": ".jpg",
              "fileName": "a51b9119439048c1b981bc294b5f0425.jpg",
              "sourceUrl": "https://bescard.com/cdn/a51b9119439048c1b981bc294b5f0425",
              "publicPath": "assets/dashboard/clusters/0x46ce4538741ae906a7baae3fe0c4a704cc44f819b67127b06a085b3296602f94/items/a51b9119439048c1b981bc294b5f0425.jpg"
            }
          },
          {
            "dobItemId": "068afc21-5286-7002-9f81-193874eb3ea1",
            "dataType": 4,
            "dataContent": "1-a05c992f204f485d8555e5d50b0bf4c9-竞速-R-2.jpg",
            "dobName": "Kero Myng",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-a05c992f204f485d8555e5d50b0bf4c9-竞速-R-2.jpg",
              "cdnId": "a05c992f204f485d8555e5d50b0bf4c9",
              "extension": ".jpg",
              "fileName": "a05c992f204f485d8555e5d50b0bf4c9.jpg",
              "sourceUrl": "https://bescard.com/cdn/a05c992f204f485d8555e5d50b0bf4c9",
              "publicPath": "assets/dashboard/clusters/0x46ce4538741ae906a7baae3fe0c4a704cc44f819b67127b06a085b3296602f94/items/a05c992f204f485d8555e5d50b0bf4c9.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 4,
        "items": [
          {
            "dobItemId": "068afc21-525e-7000-bb4c-944825326c1c",
            "dataType": 4,
            "dataContent": "1-d2027650d7774a0d8d694140c8c0bf49-竞速-N1.jpg",
            "dobName": "Eileen Veyl",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-d2027650d7774a0d8d694140c8c0bf49-竞速-N1.jpg",
              "cdnId": "d2027650d7774a0d8d694140c8c0bf49",
              "extension": ".jpg",
              "fileName": "d2027650d7774a0d8d694140c8c0bf49.jpg",
              "sourceUrl": "https://bescard.com/cdn/d2027650d7774a0d8d694140c8c0bf49",
              "publicPath": "assets/dashboard/clusters/0x46ce4538741ae906a7baae3fe0c4a704cc44f819b67127b06a085b3296602f94/items/d2027650d7774a0d8d694140c8c0bf49.jpg"
            }
          },
          {
            "dobItemId": "068afc21-5284-7000-92d4-d80ba03346ba",
            "dataType": 4,
            "dataContent": "1-35affcf8bec5489bb049f889f8741793-竞速-N2.jpg",
            "dobName": "Quinna Lin",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-35affcf8bec5489bb049f889f8741793-竞速-N2.jpg",
              "cdnId": "35affcf8bec5489bb049f889f8741793",
              "extension": ".jpg",
              "fileName": "35affcf8bec5489bb049f889f8741793.jpg",
              "sourceUrl": "https://bescard.com/cdn/35affcf8bec5489bb049f889f8741793",
              "publicPath": "assets/dashboard/clusters/0x46ce4538741ae906a7baae3fe0c4a704cc44f819b67127b06a085b3296602f94/items/35affcf8bec5489bb049f889f8741793.jpg"
            }
          },
          {
            "dobItemId": "068afc21-5285-7000-acde-c0593f635c6e",
            "dataType": 4,
            "dataContent": "1-bdacb1fd6045494e80cc8eba9f474de0-竞速-N3.jpg",
            "dobName": "Milu Bell",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-bdacb1fd6045494e80cc8eba9f474de0-竞速-N3.jpg",
              "cdnId": "bdacb1fd6045494e80cc8eba9f474de0",
              "extension": ".jpg",
              "fileName": "bdacb1fd6045494e80cc8eba9f474de0.jpg",
              "sourceUrl": "https://bescard.com/cdn/bdacb1fd6045494e80cc8eba9f474de0",
              "publicPath": "assets/dashboard/clusters/0x46ce4538741ae906a7baae3fe0c4a704cc44f819b67127b06a085b3296602f94/items/bdacb1fd6045494e80cc8eba9f474de0.jpg"
            }
          },
          {
            "dobItemId": "068afc21-5286-7000-9170-a09d67c57bcc",
            "dataType": 4,
            "dataContent": "1-18aa448e7d9e4585b65152394deedea2-竞速-N4.jpg",
            "dobName": "Esther Reinhardt",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-18aa448e7d9e4585b65152394deedea2-竞速-N4.jpg",
              "cdnId": "18aa448e7d9e4585b65152394deedea2",
              "extension": ".jpg",
              "fileName": "18aa448e7d9e4585b65152394deedea2.jpg",
              "sourceUrl": "https://bescard.com/cdn/18aa448e7d9e4585b65152394deedea2",
              "publicPath": "assets/dashboard/clusters/0x46ce4538741ae906a7baae3fe0c4a704cc44f819b67127b06a085b3296602f94/items/18aa448e7d9e4585b65152394deedea2.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0x46099a99050ca8f4f25c7bc16589ff64190f932f08c843558fba088359c40f11",
    "dobId": "068b14c5-b2b1-7000-80c0-7ad2be29ba50",
    "dobType": 3,
    "dobName": "Rise of the Nano Titan Volume 1",
    "openTime": "2025-08-29T06:45:00+00:00",
    "contractAddress": "0xa7c76570659c1f482b49d7acb976a4914113fcd51d0f207a9f71f1aa458af82c",
    "issuer": "LusoCryptoLabs",
    "issuerLogo": "1-7b014a928d2d4ce0bd6df5ab990678e0-发行方.jpg",
    "onShelves": false,
    "floorPrice": "49",
    "floorPriceValue": 49,
    "change24H": "0",
    "change24HValue": 0,
    "dobTier": "C",
    "isAirDrop": true,
    "coverAsset": {
      "sourceValue": "1-fa80e2b4fa054bf6bdadecec233d434c-盲盒封面.jpg",
      "cdnId": "fa80e2b4fa054bf6bdadecec233d434c",
      "extension": ".jpg",
      "fileName": "fa80e2b4fa054bf6bdadecec233d434c.jpg",
      "sourceUrl": "https://bescard.com/cdn/fa80e2b4fa054bf6bdadecec233d434c",
      "publicPath": "assets/dashboard/clusters/0x46099a99050ca8f4f25c7bc16589ff64190f932f08c843558fba088359c40f11/fa80e2b4fa054bf6bdadecec233d434c.jpg"
    },
    "itemCount": 8,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "068b14c5-b2b6-7006-92d1-b6b23b22f288",
            "dataType": 4,
            "dataContent": "1-f9ebe90fbeb345d4add4c985d6573140-漫画-NFT-传说.jpg",
            "dobName": "Fatal blow",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-f9ebe90fbeb345d4add4c985d6573140-漫画-NFT-传说.jpg",
              "cdnId": "f9ebe90fbeb345d4add4c985d6573140",
              "extension": ".jpg",
              "fileName": "f9ebe90fbeb345d4add4c985d6573140.jpg",
              "sourceUrl": "https://bescard.com/cdn/f9ebe90fbeb345d4add4c985d6573140",
              "publicPath": "assets/dashboard/clusters/0x46099a99050ca8f4f25c7bc16589ff64190f932f08c843558fba088359c40f11/items/f9ebe90fbeb345d4add4c985d6573140.jpg"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "068b14c5-b2b6-7005-8d92-4655e47e2b64",
            "dataType": 4,
            "dataContent": "1-940fc28c40b647d28e2882a38495bd35-漫画-NFT-史诗.jpg",
            "dobName": "Pride smasher",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-940fc28c40b647d28e2882a38495bd35-漫画-NFT-史诗.jpg",
              "cdnId": "940fc28c40b647d28e2882a38495bd35",
              "extension": ".jpg",
              "fileName": "940fc28c40b647d28e2882a38495bd35.jpg",
              "sourceUrl": "https://bescard.com/cdn/940fc28c40b647d28e2882a38495bd35",
              "publicPath": "assets/dashboard/clusters/0x46099a99050ca8f4f25c7bc16589ff64190f932f08c843558fba088359c40f11/items/940fc28c40b647d28e2882a38495bd35.jpg"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 2,
        "items": [
          {
            "dobItemId": "068b14c5-b2b6-7003-b52b-9c409b89222e",
            "dataType": 4,
            "dataContent": "1-392f8f7fc1d94181be3bda0909279e8d-漫画-NFT-稀有1.jpg",
            "dobName": "Arrow annihilation",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-392f8f7fc1d94181be3bda0909279e8d-漫画-NFT-稀有1.jpg",
              "cdnId": "392f8f7fc1d94181be3bda0909279e8d",
              "extension": ".jpg",
              "fileName": "392f8f7fc1d94181be3bda0909279e8d.jpg",
              "sourceUrl": "https://bescard.com/cdn/392f8f7fc1d94181be3bda0909279e8d",
              "publicPath": "assets/dashboard/clusters/0x46099a99050ca8f4f25c7bc16589ff64190f932f08c843558fba088359c40f11/items/392f8f7fc1d94181be3bda0909279e8d.jpg"
            }
          },
          {
            "dobItemId": "068b14c5-b2b6-7004-b67f-cf6df99a96ae",
            "dataType": 4,
            "dataContent": "1-84e9296be5da4df6bcc03faa4c626cd0-漫画-NFT-普通2.jpg",
            "dobName": "Horux's Dark Majesty",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-84e9296be5da4df6bcc03faa4c626cd0-漫画-NFT-普通2.jpg",
              "cdnId": "84e9296be5da4df6bcc03faa4c626cd0",
              "extension": ".jpg",
              "fileName": "84e9296be5da4df6bcc03faa4c626cd0.jpg",
              "sourceUrl": "https://bescard.com/cdn/84e9296be5da4df6bcc03faa4c626cd0",
              "publicPath": "assets/dashboard/clusters/0x46099a99050ca8f4f25c7bc16589ff64190f932f08c843558fba088359c40f11/items/84e9296be5da4df6bcc03faa4c626cd0.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 4,
        "items": [
          {
            "dobItemId": "068b14c5-b2b5-7000-b1c7-1c8ea5ee2533",
            "dataType": 4,
            "dataContent": "1-b272e3ce808b4842a25384df5ec85209-漫画-NFT-普通1.jpg",
            "dobName": "Head-On Fury",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-b272e3ce808b4842a25384df5ec85209-漫画-NFT-普通1.jpg",
              "cdnId": "b272e3ce808b4842a25384df5ec85209",
              "extension": ".jpg",
              "fileName": "b272e3ce808b4842a25384df5ec85209.jpg",
              "sourceUrl": "https://bescard.com/cdn/b272e3ce808b4842a25384df5ec85209",
              "publicPath": "assets/dashboard/clusters/0x46099a99050ca8f4f25c7bc16589ff64190f932f08c843558fba088359c40f11/items/b272e3ce808b4842a25384df5ec85209.jpg"
            }
          },
          {
            "dobItemId": "068b14c5-b2b6-7000-8b75-23b807e77cf4",
            "dataType": 4,
            "dataContent": "1-e01f5245f48449109e4456781a33aee8-漫画-NFT-普通3.jpg",
            "dobName": "Wrath of Horux",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-e01f5245f48449109e4456781a33aee8-漫画-NFT-普通3.jpg",
              "cdnId": "e01f5245f48449109e4456781a33aee8",
              "extension": ".jpg",
              "fileName": "e01f5245f48449109e4456781a33aee8.jpg",
              "sourceUrl": "https://bescard.com/cdn/e01f5245f48449109e4456781a33aee8",
              "publicPath": "assets/dashboard/clusters/0x46099a99050ca8f4f25c7bc16589ff64190f932f08c843558fba088359c40f11/items/e01f5245f48449109e4456781a33aee8.jpg"
            }
          },
          {
            "dobItemId": "068b14c5-b2b6-7001-bfda-76050cf0fc25",
            "dataType": 4,
            "dataContent": "1-27d498c9b6b04bb7bed0dafbab3448ef-漫画-NFT-普通4.jpg",
            "dobName": "Jorge Voxx's Arcane",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-27d498c9b6b04bb7bed0dafbab3448ef-漫画-NFT-普通4.jpg",
              "cdnId": "27d498c9b6b04bb7bed0dafbab3448ef",
              "extension": ".jpg",
              "fileName": "27d498c9b6b04bb7bed0dafbab3448ef.jpg",
              "sourceUrl": "https://bescard.com/cdn/27d498c9b6b04bb7bed0dafbab3448ef",
              "publicPath": "assets/dashboard/clusters/0x46099a99050ca8f4f25c7bc16589ff64190f932f08c843558fba088359c40f11/items/27d498c9b6b04bb7bed0dafbab3448ef.jpg"
            }
          },
          {
            "dobItemId": "068b14c5-b2b6-7002-b084-f67810b778d3",
            "dataType": 4,
            "dataContent": "1-1592a33276b24a288db6b85dca0c15bb-漫画-NFT-普通5.jpg",
            "dobName": "Demon Stare",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-1592a33276b24a288db6b85dca0c15bb-漫画-NFT-普通5.jpg",
              "cdnId": "1592a33276b24a288db6b85dca0c15bb",
              "extension": ".jpg",
              "fileName": "1592a33276b24a288db6b85dca0c15bb.jpg",
              "sourceUrl": "https://bescard.com/cdn/1592a33276b24a288db6b85dca0c15bb",
              "publicPath": "assets/dashboard/clusters/0x46099a99050ca8f4f25c7bc16589ff64190f932f08c843558fba088359c40f11/items/1592a33276b24a288db6b85dca0c15bb.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0xb2f2633d2a88e4653323c24b39dcae442e36d1022e3645e2c051c443bec12170",
    "dobId": "068a67ca-83bd-7000-88d9-2664d956bd9f",
    "dobType": 3,
    "dobName": "Reproduction · Greek Mythology",
    "openTime": "2025-08-21T02:00:00+00:00",
    "contractAddress": "0xab0b383c25caa9809db8da48d449077d7b0821ab5cbda421c1793361e6f85c98",
    "issuer": "MOYOGAMES",
    "issuerLogo": "1-1681242d97534f49b1ee29948148caee-MOYOlogo.jpg",
    "onShelves": false,
    "floorPrice": "48",
    "floorPriceValue": 48,
    "change24H": "0",
    "change24HValue": 0,
    "dobTier": "C",
    "isAirDrop": true,
    "coverAsset": {
      "sourceValue": "1-2c77426a0a7a4991b47ac2fa7921d971-盲盒封面.jpg",
      "cdnId": "2c77426a0a7a4991b47ac2fa7921d971",
      "extension": ".jpg",
      "fileName": "2c77426a0a7a4991b47ac2fa7921d971.jpg",
      "sourceUrl": "https://bescard.com/cdn/2c77426a0a7a4991b47ac2fa7921d971",
      "publicPath": "assets/dashboard/clusters/0xb2f2633d2a88e4653323c24b39dcae442e36d1022e3645e2c051c443bec12170/2c77426a0a7a4991b47ac2fa7921d971.jpg"
    },
    "itemCount": 8,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "068a67ca-904b-7005-9858-5965de73dfd8",
            "dataType": 4,
            "dataContent": "1-f20707352439469bb3ef42bd3c2e7442-JOKER小王.png",
            "dobName": "Mount Olympus",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-f20707352439469bb3ef42bd3c2e7442-JOKER小王.png",
              "cdnId": "f20707352439469bb3ef42bd3c2e7442",
              "extension": ".png",
              "fileName": "f20707352439469bb3ef42bd3c2e7442.png",
              "sourceUrl": "https://bescard.com/cdn/f20707352439469bb3ef42bd3c2e7442",
              "publicPath": "assets/dashboard/clusters/0xb2f2633d2a88e4653323c24b39dcae442e36d1022e3645e2c051c443bec12170/items/f20707352439469bb3ef42bd3c2e7442.png"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "068a67ca-904b-7004-af75-8c6b563bbcbf",
            "dataType": 4,
            "dataContent": "1-0ffc2a40ec9d42cbad08fd44ea0264da-梅花K.png",
            "dobName": "Lord of the Underworld",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-0ffc2a40ec9d42cbad08fd44ea0264da-梅花K.png",
              "cdnId": "0ffc2a40ec9d42cbad08fd44ea0264da",
              "extension": ".png",
              "fileName": "0ffc2a40ec9d42cbad08fd44ea0264da.png",
              "sourceUrl": "https://bescard.com/cdn/0ffc2a40ec9d42cbad08fd44ea0264da",
              "publicPath": "assets/dashboard/clusters/0xb2f2633d2a88e4653323c24b39dcae442e36d1022e3645e2c051c443bec12170/items/0ffc2a40ec9d42cbad08fd44ea0264da.png"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 2,
        "items": [
          {
            "dobItemId": "068a67ca-904b-7002-ae3d-a9b0ef5ef7d7",
            "dataType": 4,
            "dataContent": "1-96578256baff40b9a802832f78870609-红桃Q.png",
            "dobName": "Goddess of Love and Beauty",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-96578256baff40b9a802832f78870609-红桃Q.png",
              "cdnId": "96578256baff40b9a802832f78870609",
              "extension": ".png",
              "fileName": "96578256baff40b9a802832f78870609.png",
              "sourceUrl": "https://bescard.com/cdn/96578256baff40b9a802832f78870609",
              "publicPath": "assets/dashboard/clusters/0xb2f2633d2a88e4653323c24b39dcae442e36d1022e3645e2c051c443bec12170/items/96578256baff40b9a802832f78870609.png"
            }
          },
          {
            "dobItemId": "068a67ca-904b-7003-b495-a94a719f3108",
            "dataType": 4,
            "dataContent": "1-baf600e31c7d489b9bccd07a344dab07-梅花Q.png",
            "dobName": "Goddess of the Hunt",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-baf600e31c7d489b9bccd07a344dab07-梅花Q.png",
              "cdnId": "baf600e31c7d489b9bccd07a344dab07",
              "extension": ".png",
              "fileName": "baf600e31c7d489b9bccd07a344dab07.png",
              "sourceUrl": "https://bescard.com/cdn/baf600e31c7d489b9bccd07a344dab07",
              "publicPath": "assets/dashboard/clusters/0xb2f2633d2a88e4653323c24b39dcae442e36d1022e3645e2c051c443bec12170/items/baf600e31c7d489b9bccd07a344dab07.png"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 4,
        "items": [
          {
            "dobItemId": "068a67ca-901d-7000-afe0-8683dda447aa",
            "dataType": 4,
            "dataContent": "1-a2cc7ebe6334448e8356aeaaf030564d-红桃J.png",
            "dobName": "Goddess of Wisdom",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-a2cc7ebe6334448e8356aeaaf030564d-红桃J.png",
              "cdnId": "a2cc7ebe6334448e8356aeaaf030564d",
              "extension": ".png",
              "fileName": "a2cc7ebe6334448e8356aeaaf030564d.png",
              "sourceUrl": "https://bescard.com/cdn/a2cc7ebe6334448e8356aeaaf030564d",
              "publicPath": "assets/dashboard/clusters/0xb2f2633d2a88e4653323c24b39dcae442e36d1022e3645e2c051c443bec12170/items/a2cc7ebe6334448e8356aeaaf030564d.png"
            }
          },
          {
            "dobItemId": "068a67ca-9049-7000-82d0-22066d35b35a",
            "dataType": 4,
            "dataContent": "1-bcc6a32cac7a41c5a0aa431cee9a060e-黑桃J.png",
            "dobName": "God of War",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-bcc6a32cac7a41c5a0aa431cee9a060e-黑桃J.png",
              "cdnId": "bcc6a32cac7a41c5a0aa431cee9a060e",
              "extension": ".png",
              "fileName": "bcc6a32cac7a41c5a0aa431cee9a060e.png",
              "sourceUrl": "https://bescard.com/cdn/bcc6a32cac7a41c5a0aa431cee9a060e",
              "publicPath": "assets/dashboard/clusters/0xb2f2633d2a88e4653323c24b39dcae442e36d1022e3645e2c051c443bec12170/items/bcc6a32cac7a41c5a0aa431cee9a060e.png"
            }
          },
          {
            "dobItemId": "068a67ca-904b-7000-a28d-1d6c29e33318",
            "dataType": 4,
            "dataContent": "1-bb0afb137c744adf8879ce7b791ba978-梅花J.png",
            "dobName": "God of Wine",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-bb0afb137c744adf8879ce7b791ba978-梅花J.png",
              "cdnId": "bb0afb137c744adf8879ce7b791ba978",
              "extension": ".png",
              "fileName": "bb0afb137c744adf8879ce7b791ba978.png",
              "sourceUrl": "https://bescard.com/cdn/bb0afb137c744adf8879ce7b791ba978",
              "publicPath": "assets/dashboard/clusters/0xb2f2633d2a88e4653323c24b39dcae442e36d1022e3645e2c051c443bec12170/items/bb0afb137c744adf8879ce7b791ba978.png"
            }
          },
          {
            "dobItemId": "068a67ca-904b-7001-9041-dcd1d678abce",
            "dataType": 4,
            "dataContent": "1-3e42fbde668148e190fb0919fcbada7e-方片J.png",
            "dobName": "God of Fire",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-3e42fbde668148e190fb0919fcbada7e-方片J.png",
              "cdnId": "3e42fbde668148e190fb0919fcbada7e",
              "extension": ".png",
              "fileName": "3e42fbde668148e190fb0919fcbada7e.png",
              "sourceUrl": "https://bescard.com/cdn/3e42fbde668148e190fb0919fcbada7e",
              "publicPath": "assets/dashboard/clusters/0xb2f2633d2a88e4653323c24b39dcae442e36d1022e3645e2c051c443bec12170/items/3e42fbde668148e190fb0919fcbada7e.png"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0x0d5580cd9924723144b0fa6131fedea73ea12d198990e2af83be44243f05d3eb",
    "dobId": "06866118-8032-7000-aa06-1cab3f48ab21",
    "dobType": 3,
    "dobName": "Taibai Jinxing",
    "openTime": "2025-07-03T05:15:00+00:00",
    "contractAddress": "0x04313efecf286d3130c30dab802eab210849450885b5ef0d8b1092758561fb49",
    "issuer": "IPN",
    "issuerLogo": "1-78efc7241e1646f28d297b7900824098-IPN.jpg",
    "onShelves": true,
    "floorPrice": "200",
    "floorPriceValue": 200,
    "change24H": "0.010101010101010102",
    "change24HValue": 0.010101010101010102,
    "dobTier": "B",
    "isAirDrop": false,
    "coverAsset": {
      "sourceValue": "1-07d63c750c5f4bdbb01552a1186a3902-20250702-133010.png",
      "cdnId": "07d63c750c5f4bdbb01552a1186a3902",
      "extension": ".png",
      "fileName": "07d63c750c5f4bdbb01552a1186a3902.png",
      "sourceUrl": "https://bescard.com/cdn/07d63c750c5f4bdbb01552a1186a3902",
      "publicPath": "assets/dashboard/clusters/0x0d5580cd9924723144b0fa6131fedea73ea12d198990e2af83be44243f05d3eb/07d63c750c5f4bdbb01552a1186a3902.png"
    },
    "itemCount": 8,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "06866118-8034-7007-aff7-aa5c0c5893dc",
            "dataType": 4,
            "dataContent": "1-39711f573aa74cbd96d5f77dae1c2a22-太白金星白美男-NFT传说版本.jpg",
            "dobName": "Golden Savior",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-39711f573aa74cbd96d5f77dae1c2a22-太白金星白美男-NFT传说版本.jpg",
              "cdnId": "39711f573aa74cbd96d5f77dae1c2a22",
              "extension": ".jpg",
              "fileName": "39711f573aa74cbd96d5f77dae1c2a22.jpg",
              "sourceUrl": "https://bescard.com/cdn/39711f573aa74cbd96d5f77dae1c2a22",
              "publicPath": "assets/dashboard/clusters/0x0d5580cd9924723144b0fa6131fedea73ea12d198990e2af83be44243f05d3eb/items/39711f573aa74cbd96d5f77dae1c2a22.jpg"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "06866118-8034-7006-8dc3-a722dc7da4a3",
            "dataType": 4,
            "dataContent": "1-fc947284755c405db9ff958d012decd6-太白金星白美男-NFT史诗版.jpg",
            "dobName": "Jade Advisor",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-fc947284755c405db9ff958d012decd6-太白金星白美男-NFT史诗版.jpg",
              "cdnId": "fc947284755c405db9ff958d012decd6",
              "extension": ".jpg",
              "fileName": "fc947284755c405db9ff958d012decd6.jpg",
              "sourceUrl": "https://bescard.com/cdn/fc947284755c405db9ff958d012decd6",
              "publicPath": "assets/dashboard/clusters/0x0d5580cd9924723144b0fa6131fedea73ea12d198990e2af83be44243f05d3eb/items/fc947284755c405db9ff958d012decd6.jpg"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 2,
        "items": [
          {
            "dobItemId": "06866118-8034-7004-aac3-6cd04d20f897",
            "dataType": 4,
            "dataContent": "1-bd00ab72994a413392f712c9e0f89581-太白金星白美男-NFT稀有版-1.jpg",
            "dobName": "Heavenly Stablemaster",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-bd00ab72994a413392f712c9e0f89581-太白金星白美男-NFT稀有版-1.jpg",
              "cdnId": "bd00ab72994a413392f712c9e0f89581",
              "extension": ".jpg",
              "fileName": "bd00ab72994a413392f712c9e0f89581.jpg",
              "sourceUrl": "https://bescard.com/cdn/bd00ab72994a413392f712c9e0f89581",
              "publicPath": "assets/dashboard/clusters/0x0d5580cd9924723144b0fa6131fedea73ea12d198990e2af83be44243f05d3eb/items/bd00ab72994a413392f712c9e0f89581.jpg"
            }
          },
          {
            "dobItemId": "06866118-8034-7005-a608-5e74ae36422a",
            "dataType": 4,
            "dataContent": "1-1910b20a40e04ce8933889b086266536-太白金星白美男-NFT稀有版-2.jpg",
            "dobName": "Demon Investigator",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-1910b20a40e04ce8933889b086266536-太白金星白美男-NFT稀有版-2.jpg",
              "cdnId": "1910b20a40e04ce8933889b086266536",
              "extension": ".jpg",
              "fileName": "1910b20a40e04ce8933889b086266536.jpg",
              "sourceUrl": "https://bescard.com/cdn/1910b20a40e04ce8933889b086266536",
              "publicPath": "assets/dashboard/clusters/0x0d5580cd9924723144b0fa6131fedea73ea12d198990e2af83be44243f05d3eb/items/1910b20a40e04ce8933889b086266536.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 4,
        "items": [
          {
            "dobItemId": "06866118-8034-7000-9386-39f6688bdc6f",
            "dataType": 4,
            "dataContent": "1-786009d01a654ce69649983f4d394771-太白金星白美男-NFT普通款-1.jpg",
            "dobName": "Star Judge",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-786009d01a654ce69649983f4d394771-太白金星白美男-NFT普通款-1.jpg",
              "cdnId": "786009d01a654ce69649983f4d394771",
              "extension": ".jpg",
              "fileName": "786009d01a654ce69649983f4d394771.jpg",
              "sourceUrl": "https://bescard.com/cdn/786009d01a654ce69649983f4d394771",
              "publicPath": "assets/dashboard/clusters/0x0d5580cd9924723144b0fa6131fedea73ea12d198990e2af83be44243f05d3eb/items/786009d01a654ce69649983f4d394771.jpg"
            }
          },
          {
            "dobItemId": "06866118-8034-7001-900a-fcf2af03139f",
            "dataType": 4,
            "dataContent": "1-ad20cc63cf5d4822a0e5c013298ab1f1-太白金星白美男-NFT普通款-2.jpg",
            "dobName": "Imperial Herald",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-ad20cc63cf5d4822a0e5c013298ab1f1-太白金星白美男-NFT普通款-2.jpg",
              "cdnId": "ad20cc63cf5d4822a0e5c013298ab1f1",
              "extension": ".jpg",
              "fileName": "ad20cc63cf5d4822a0e5c013298ab1f1.jpg",
              "sourceUrl": "https://bescard.com/cdn/ad20cc63cf5d4822a0e5c013298ab1f1",
              "publicPath": "assets/dashboard/clusters/0x0d5580cd9924723144b0fa6131fedea73ea12d198990e2af83be44243f05d3eb/items/ad20cc63cf5d4822a0e5c013298ab1f1.jpg"
            }
          },
          {
            "dobItemId": "06866118-8034-7002-bd6b-17fdbcc59f98",
            "dataType": 4,
            "dataContent": "1-7f44d264768042abb89f89a43d4d5da4-太白金星白美男-NFT普通款-3.jpg",
            "dobName": "Cloud Selfie",
            "rareType": 4,
            "floorPrice": "200.00",
            "floorPriceValue": 200,
            "asset": {
              "sourceValue": "1-7f44d264768042abb89f89a43d4d5da4-太白金星白美男-NFT普通款-3.jpg",
              "cdnId": "7f44d264768042abb89f89a43d4d5da4",
              "extension": ".jpg",
              "fileName": "7f44d264768042abb89f89a43d4d5da4.jpg",
              "sourceUrl": "https://bescard.com/cdn/7f44d264768042abb89f89a43d4d5da4",
              "publicPath": "assets/dashboard/clusters/0x0d5580cd9924723144b0fa6131fedea73ea12d198990e2af83be44243f05d3eb/items/7f44d264768042abb89f89a43d4d5da4.jpg"
            }
          },
          {
            "dobItemId": "06866118-8034-7003-8b73-ecdbc1a71a79",
            "dataType": 4,
            "dataContent": "1-26fde6eee6df4c47b97946ce001a8730-太白金星白美男-NFT普通款-4.jpg",
            "dobName": "Morning Star",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-26fde6eee6df4c47b97946ce001a8730-太白金星白美男-NFT普通款-4.jpg",
              "cdnId": "26fde6eee6df4c47b97946ce001a8730",
              "extension": ".jpg",
              "fileName": "26fde6eee6df4c47b97946ce001a8730.jpg",
              "sourceUrl": "https://bescard.com/cdn/26fde6eee6df4c47b97946ce001a8730",
              "publicPath": "assets/dashboard/clusters/0x0d5580cd9924723144b0fa6131fedea73ea12d198990e2af83be44243f05d3eb/items/26fde6eee6df4c47b97946ce001a8730.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0xb8cdd6db2dfe877a4599bae573b7dac49d4f7848c770f1cb118722e71de75544",
    "dobId": "0685cdf9-11c2-7000-ae62-fc8d512da97c",
    "dobType": 3,
    "dobName": "Yin Jiangjun",
    "openTime": "2025-06-26T05:51:00+00:00",
    "contractAddress": "0x5da48926ccbbd88cbe0bd4bcb795f738c09a49000dfff935fcd79de3f35114c3",
    "issuer": "IPN",
    "issuerLogo": "1-ccd236ccc73e4d9186d925a5d9056acc-IPN.jpg",
    "onShelves": true,
    "floorPrice": "99",
    "floorPriceValue": 99,
    "change24H": "0.1511627906976744",
    "change24HValue": 0.1511627906976744,
    "dobTier": "C",
    "isAirDrop": false,
    "coverAsset": {
      "sourceValue": "1-0a7a8124234640ad98face84727435d6-yin将军.jpeg",
      "cdnId": "0a7a8124234640ad98face84727435d6",
      "extension": ".jpeg",
      "fileName": "0a7a8124234640ad98face84727435d6.jpeg",
      "sourceUrl": "https://bescard.com/cdn/0a7a8124234640ad98face84727435d6",
      "publicPath": "assets/dashboard/clusters/0xb8cdd6db2dfe877a4599bae573b7dac49d4f7848c770f1cb118722e71de75544/0a7a8124234640ad98face84727435d6.jpeg"
    },
    "itemCount": 8,
    "groupNames": [
      "Legendary",
      "Epic",
      "Rare",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "0685cdf9-11d1-7006-a5f1-ec7e8ac825ec",
            "dataType": 4,
            "dataContent": "1-f81a9b218bbe4ea2a0496630a1fa4271-寅将军-传说版-NFT.jpg",
            "dobName": "Roaring Mountain Lord",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-f81a9b218bbe4ea2a0496630a1fa4271-寅将军-传说版-NFT.jpg",
              "cdnId": "f81a9b218bbe4ea2a0496630a1fa4271",
              "extension": ".jpg",
              "fileName": "f81a9b218bbe4ea2a0496630a1fa4271.jpg",
              "sourceUrl": "https://bescard.com/cdn/f81a9b218bbe4ea2a0496630a1fa4271",
              "publicPath": "assets/dashboard/clusters/0xb8cdd6db2dfe877a4599bae573b7dac49d4f7848c770f1cb118722e71de75544/items/f81a9b218bbe4ea2a0496630a1fa4271.jpg"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "0685cdf9-11d1-7005-9ed8-95dd95d06759",
            "dataType": 4,
            "dataContent": "1-0e4a371acbb44e2a9685b39618e9e402-寅将军-史诗版-NFT.jpg",
            "dobName": "Thunderous Awe",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-0e4a371acbb44e2a9685b39618e9e402-寅将军-史诗版-NFT.jpg",
              "cdnId": "0e4a371acbb44e2a9685b39618e9e402",
              "extension": ".jpg",
              "fileName": "0e4a371acbb44e2a9685b39618e9e402.jpg",
              "sourceUrl": "https://bescard.com/cdn/0e4a371acbb44e2a9685b39618e9e402",
              "publicPath": "assets/dashboard/clusters/0xb8cdd6db2dfe877a4599bae573b7dac49d4f7848c770f1cb118722e71de75544/items/0e4a371acbb44e2a9685b39618e9e402.jpg"
            }
          }
        ]
      },
      {
        "name": "Rare",
        "count": 2,
        "items": [
          {
            "dobItemId": "0685cdf9-11d1-7003-923e-91936446183b",
            "dataType": 4,
            "dataContent": "1-4b9646f84c92407a8f66e608bfdab24c-寅将军-稀有NFT1.jpg",
            "dobName": "Apex Predator",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-4b9646f84c92407a8f66e608bfdab24c-寅将军-稀有NFT1.jpg",
              "cdnId": "4b9646f84c92407a8f66e608bfdab24c",
              "extension": ".jpg",
              "fileName": "4b9646f84c92407a8f66e608bfdab24c.jpg",
              "sourceUrl": "https://bescard.com/cdn/4b9646f84c92407a8f66e608bfdab24c",
              "publicPath": "assets/dashboard/clusters/0xb8cdd6db2dfe877a4599bae573b7dac49d4f7848c770f1cb118722e71de75544/items/4b9646f84c92407a8f66e608bfdab24c.jpg"
            }
          },
          {
            "dobItemId": "0685cdf9-11d1-7004-a43b-3e1a3ebb91d3",
            "dataType": 4,
            "dataContent": "1-aeb59dd0142d454687ed199e51cb5e9e-寅将军-稀有NFT2.jpg",
            "dobName": "Scorched Peaks",
            "rareType": 3,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-aeb59dd0142d454687ed199e51cb5e9e-寅将军-稀有NFT2.jpg",
              "cdnId": "aeb59dd0142d454687ed199e51cb5e9e",
              "extension": ".jpg",
              "fileName": "aeb59dd0142d454687ed199e51cb5e9e.jpg",
              "sourceUrl": "https://bescard.com/cdn/aeb59dd0142d454687ed199e51cb5e9e",
              "publicPath": "assets/dashboard/clusters/0xb8cdd6db2dfe877a4599bae573b7dac49d4f7848c770f1cb118722e71de75544/items/aeb59dd0142d454687ed199e51cb5e9e.jpg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 4,
        "items": [
          {
            "dobItemId": "0685cdf9-11ce-7000-b090-025cb149bf32",
            "dataType": 4,
            "dataContent": "1-4cef904de16f4b55b1729113eafec9a5-寅将军-普通NFT-1.jpg",
            "dobName": "Stone Tyrant",
            "rareType": 4,
            "floorPrice": "99.00",
            "floorPriceValue": 99,
            "asset": {
              "sourceValue": "1-4cef904de16f4b55b1729113eafec9a5-寅将军-普通NFT-1.jpg",
              "cdnId": "4cef904de16f4b55b1729113eafec9a5",
              "extension": ".jpg",
              "fileName": "4cef904de16f4b55b1729113eafec9a5.jpg",
              "sourceUrl": "https://bescard.com/cdn/4cef904de16f4b55b1729113eafec9a5",
              "publicPath": "assets/dashboard/clusters/0xb8cdd6db2dfe877a4599bae573b7dac49d4f7848c770f1cb118722e71de75544/items/4cef904de16f4b55b1729113eafec9a5.jpg"
            }
          },
          {
            "dobItemId": "0685cdf9-11d1-7000-ac96-0a0397e414bb",
            "dataType": 4,
            "dataContent": "1-29ff1179bb3b4fe49804a0ab6810d2fb-寅将军-普通NFT-2.jpg",
            "dobName": "Fanged Rift",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-29ff1179bb3b4fe49804a0ab6810d2fb-寅将军-普通NFT-2.jpg",
              "cdnId": "29ff1179bb3b4fe49804a0ab6810d2fb",
              "extension": ".jpg",
              "fileName": "29ff1179bb3b4fe49804a0ab6810d2fb.jpg",
              "sourceUrl": "https://bescard.com/cdn/29ff1179bb3b4fe49804a0ab6810d2fb",
              "publicPath": "assets/dashboard/clusters/0xb8cdd6db2dfe877a4599bae573b7dac49d4f7848c770f1cb118722e71de75544/items/29ff1179bb3b4fe49804a0ab6810d2fb.jpg"
            }
          },
          {
            "dobItemId": "0685cdf9-11d1-7001-b7f1-f73a20590e7d",
            "dataType": 4,
            "dataContent": "1-2227fb8c5f8440be93561d6a55a49072-寅将军-普通NFT-3.jpg",
            "dobName": "Night Reaper",
            "rareType": 4,
            "floorPrice": "100.00",
            "floorPriceValue": 100,
            "asset": {
              "sourceValue": "1-2227fb8c5f8440be93561d6a55a49072-寅将军-普通NFT-3.jpg",
              "cdnId": "2227fb8c5f8440be93561d6a55a49072",
              "extension": ".jpg",
              "fileName": "2227fb8c5f8440be93561d6a55a49072.jpg",
              "sourceUrl": "https://bescard.com/cdn/2227fb8c5f8440be93561d6a55a49072",
              "publicPath": "assets/dashboard/clusters/0xb8cdd6db2dfe877a4599bae573b7dac49d4f7848c770f1cb118722e71de75544/items/2227fb8c5f8440be93561d6a55a49072.jpg"
            }
          },
          {
            "dobItemId": "0685cdf9-11d1-7002-9f2c-c1161fe2d0c4",
            "dataType": 4,
            "dataContent": "1-763e259015e649d7abed43edef393d1c-寅将军-普通NFT-4.jpg",
            "dobName": "Crimson Mane",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-763e259015e649d7abed43edef393d1c-寅将军-普通NFT-4.jpg",
              "cdnId": "763e259015e649d7abed43edef393d1c",
              "extension": ".jpg",
              "fileName": "763e259015e649d7abed43edef393d1c.jpg",
              "sourceUrl": "https://bescard.com/cdn/763e259015e649d7abed43edef393d1c",
              "publicPath": "assets/dashboard/clusters/0xb8cdd6db2dfe877a4599bae573b7dac49d4f7848c770f1cb118722e71de75544/items/763e259015e649d7abed43edef393d1c.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0x0dc066d54ded8e2c39ef9c53e215ff1d332d2a37a1f49f87b77639e7dfad0a69",
    "dobId": "06855090-b194-7000-9076-fb269beb2d41",
    "dobType": 3,
    "dobName": "Te Chushi",
    "openTime": "2025-06-20T07:00:00+00:00",
    "contractAddress": "0xabc42e9d8f631fe7d372a5e9880f2ba8b7a1eb55a877360c3337e4dc0b8e8e14",
    "issuer": "IPN",
    "issuerLogo": "1-17c0d4500027422f9e18e9dc340d6374-发行方IPN .jpeg",
    "onShelves": false,
    "floorPrice": "45",
    "floorPriceValue": 45,
    "change24H": "-0.3076923076923077",
    "change24HValue": -0.3076923076923077,
    "dobTier": "C",
    "isAirDrop": false,
    "coverAsset": {
      "sourceValue": "1-7c1f580496884a9f90b747549ca2cf40-封面.jpeg",
      "cdnId": "7c1f580496884a9f90b747549ca2cf40",
      "extension": ".jpeg",
      "fileName": "7c1f580496884a9f90b747549ca2cf40.jpeg",
      "sourceUrl": "https://bescard.com/cdn/7c1f580496884a9f90b747549ca2cf40",
      "publicPath": "assets/dashboard/clusters/0x0dc066d54ded8e2c39ef9c53e215ff1d332d2a37a1f49f87b77639e7dfad0a69/7c1f580496884a9f90b747549ca2cf40.jpeg"
    },
    "itemCount": 4,
    "groupNames": [
      "Common"
    ],
    "groups": [
      {
        "name": "Common",
        "count": 4,
        "items": [
          {
            "dobItemId": "06855090-b1d8-7000-ac3d-ca0a5a3dac0e",
            "dataType": 4,
            "dataContent": "1-5c85e993193f47019d861b1c9aca2343-特处士-普通NFT-1.jpg",
            "dobName": "Fangs Vanguard",
            "rareType": 4,
            "floorPrice": "45.00",
            "floorPriceValue": 45,
            "asset": {
              "sourceValue": "1-5c85e993193f47019d861b1c9aca2343-特处士-普通NFT-1.jpg",
              "cdnId": "5c85e993193f47019d861b1c9aca2343",
              "extension": ".jpg",
              "fileName": "5c85e993193f47019d861b1c9aca2343.jpg",
              "sourceUrl": "https://bescard.com/cdn/5c85e993193f47019d861b1c9aca2343",
              "publicPath": "assets/dashboard/clusters/0x0dc066d54ded8e2c39ef9c53e215ff1d332d2a37a1f49f87b77639e7dfad0a69/items/5c85e993193f47019d861b1c9aca2343.jpg"
            }
          },
          {
            "dobItemId": "06855090-b1fb-7000-b7f4-b9eb0c9c8817",
            "dataType": 4,
            "dataContent": "1-02e741f7d2e041dd80ff33108df0d0ed-特处士-普通NFT-2.jpg",
            "dobName": "Guileful Masked Strider",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-02e741f7d2e041dd80ff33108df0d0ed-特处士-普通NFT-2.jpg",
              "cdnId": "02e741f7d2e041dd80ff33108df0d0ed",
              "extension": ".jpg",
              "fileName": "02e741f7d2e041dd80ff33108df0d0ed.jpg",
              "sourceUrl": "https://bescard.com/cdn/02e741f7d2e041dd80ff33108df0d0ed",
              "publicPath": "assets/dashboard/clusters/0x0dc066d54ded8e2c39ef9c53e215ff1d332d2a37a1f49f87b77639e7dfad0a69/items/02e741f7d2e041dd80ff33108df0d0ed.jpg"
            }
          },
          {
            "dobItemId": "06855090-b1fb-7001-92a9-411641c4e2ea",
            "dataType": 4,
            "dataContent": "1-48fc576e85f2417d960951086ce711dd-特处士-普通NFT-3.jpg",
            "dobName": "Ink-Word Deceiver",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-48fc576e85f2417d960951086ce711dd-特处士-普通NFT-3.jpg",
              "cdnId": "48fc576e85f2417d960951086ce711dd",
              "extension": ".jpg",
              "fileName": "48fc576e85f2417d960951086ce711dd.jpg",
              "sourceUrl": "https://bescard.com/cdn/48fc576e85f2417d960951086ce711dd",
              "publicPath": "assets/dashboard/clusters/0x0dc066d54ded8e2c39ef9c53e215ff1d332d2a37a1f49f87b77639e7dfad0a69/items/48fc576e85f2417d960951086ce711dd.jpg"
            }
          },
          {
            "dobItemId": "06855090-b1fb-7002-adfe-2ad2943414d9",
            "dataType": 4,
            "dataContent": "1-edf0349948b44a098430a3417e3fa71c-特处士-普通NFT-4.jpg",
            "dobName": "Frostclaw Envoy",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-edf0349948b44a098430a3417e3fa71c-特处士-普通NFT-4.jpg",
              "cdnId": "edf0349948b44a098430a3417e3fa71c",
              "extension": ".jpg",
              "fileName": "edf0349948b44a098430a3417e3fa71c.jpg",
              "sourceUrl": "https://bescard.com/cdn/edf0349948b44a098430a3417e3fa71c",
              "publicPath": "assets/dashboard/clusters/0x0dc066d54ded8e2c39ef9c53e215ff1d332d2a37a1f49f87b77639e7dfad0a69/items/edf0349948b44a098430a3417e3fa71c.jpg"
            }
          }
        ]
      }
    ]
  },
  {
    "clusterId": "0xb6543abef29e2e8f2a5335f33ad073a5a05961e8fcf36d9319777d0352a923a5",
    "dobId": "0684a9e6-11e2-7000-a4aa-68743ec7bd99",
    "dobType": 3,
    "dobName": "Tang Sanzang",
    "openTime": "2025-06-12T09:32:00+00:00",
    "contractAddress": "0x744a4d9dc26986be5cc9594fab122a82244c7c2d63dcc600e9172341cdffd818",
    "issuer": "IPN",
    "issuerLogo": "1-e437770f066c49baa87cc3a8c2c57150-ipn logo.jpeg",
    "onShelves": true,
    "floorPrice": "0",
    "floorPriceValue": 0,
    "change24H": "-1",
    "change24HValue": -1,
    "dobTier": "S",
    "isAirDrop": false,
    "coverAsset": {
      "sourceValue": "1-e41202a1537448f884a651466b6e9df3-唐僧盲盒封面图.jpeg",
      "cdnId": "e41202a1537448f884a651466b6e9df3",
      "extension": ".jpeg",
      "fileName": "e41202a1537448f884a651466b6e9df3.jpeg",
      "sourceUrl": "https://bescard.com/cdn/e41202a1537448f884a651466b6e9df3",
      "publicPath": "assets/dashboard/clusters/0xb6543abef29e2e8f2a5335f33ad073a5a05961e8fcf36d9319777d0352a923a5/e41202a1537448f884a651466b6e9df3.jpeg"
    },
    "itemCount": 3,
    "groupNames": [
      "Legendary",
      "Epic",
      "Common"
    ],
    "groups": [
      {
        "name": "Legendary",
        "count": 1,
        "items": [
          {
            "dobItemId": "0684a9e6-11e2-7003-a44d-8268b4c5c634",
            "dataType": 4,
            "dataContent": "1-b5511699b6224a549bc50b16ce3af5ad- Samsara Seeker.jpeg",
            "dobName": "Samsara Seeker",
            "rareType": 1,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-b5511699b6224a549bc50b16ce3af5ad- Samsara Seeker.jpeg",
              "cdnId": "b5511699b6224a549bc50b16ce3af5ad",
              "extension": ".jpeg",
              "fileName": "b5511699b6224a549bc50b16ce3af5ad.jpeg",
              "sourceUrl": "https://bescard.com/cdn/b5511699b6224a549bc50b16ce3af5ad",
              "publicPath": "assets/dashboard/clusters/0xb6543abef29e2e8f2a5335f33ad073a5a05961e8fcf36d9319777d0352a923a5/items/b5511699b6224a549bc50b16ce3af5ad.jpeg"
            }
          }
        ]
      },
      {
        "name": "Epic",
        "count": 1,
        "items": [
          {
            "dobItemId": "0684a9e6-11e2-7002-bd2e-d01ac8f362b3",
            "dataType": 4,
            "dataContent": "1-b05f0ab686e841ba8fc2d39ec63d8371-Zen Heart Monk.jpeg",
            "dobName": "Zen Heart Monk",
            "rareType": 2,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-b05f0ab686e841ba8fc2d39ec63d8371-Zen Heart Monk.jpeg",
              "cdnId": "b05f0ab686e841ba8fc2d39ec63d8371",
              "extension": ".jpeg",
              "fileName": "b05f0ab686e841ba8fc2d39ec63d8371.jpeg",
              "sourceUrl": "https://bescard.com/cdn/b05f0ab686e841ba8fc2d39ec63d8371",
              "publicPath": "assets/dashboard/clusters/0xb6543abef29e2e8f2a5335f33ad073a5a05961e8fcf36d9319777d0352a923a5/items/b05f0ab686e841ba8fc2d39ec63d8371.jpeg"
            }
          }
        ]
      },
      {
        "name": "Common",
        "count": 1,
        "items": [
          {
            "dobItemId": "0684a9e6-11e2-7001-a415-2f9864f84eed",
            "dataType": 4,
            "dataContent": "1-a8133964874549558ef318f8765da8c0- Ascetic Monk.jpeg",
            "dobName": "Ascetic Monk",
            "rareType": 4,
            "floorPrice": "",
            "floorPriceValue": null,
            "asset": {
              "sourceValue": "1-a8133964874549558ef318f8765da8c0- Ascetic Monk.jpeg",
              "cdnId": "a8133964874549558ef318f8765da8c0",
              "extension": ".jpeg",
              "fileName": "a8133964874549558ef318f8765da8c0.jpeg",
              "sourceUrl": "https://bescard.com/cdn/a8133964874549558ef318f8765da8c0",
              "publicPath": "assets/dashboard/clusters/0xb6543abef29e2e8f2a5335f33ad073a5a05961e8fcf36d9319777d0352a923a5/items/a8133964874549558ef318f8765da8c0.jpeg"
            }
          }
        ]
      }
    ]
  }
]

