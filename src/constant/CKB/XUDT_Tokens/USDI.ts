import { NETWORK } from '@/constant/Network';
import type { ScriptLike } from '@ckb-ccc/core';

export type TokenInfo = {
  typescript: ScriptLike
  typescriptHash: string
  typeid: ScriptLike
  decimals: number
}

const INFOS: Record<typeof NETWORK, TokenInfo> = {
  testnet: {
    decimals: 6,
    typescript: {
      codeHash: "0xcc9dc33ef234e14bc788c43a4848556a5fb16401a04662fc55db9bb201987037",
      hashType: "type",
      args: "0x71fd1985b2971a9903e4d8ed0d59e6710166985217ca0681437883837b86162f"
    },
    typescriptHash: "0x07ac97b5ff3df4b49f59a59f4d80d33d22c1263a57467c512c93b9c29b7a0de3",
    typeid: {
      codeHash: "0x00000000000000000000000000000000000000000000000000545950455f4944",
      args: "0xf0bad0541211603bf14946e09ceac920dd7ed4f862f0ffd53d0d477d6e1d0f0b",
      hashType: "type"
    }
  },
  mainnet: {
    decimals: 6,
    typescript: {
      codeHash: "0xbfa35a9c38a676682b65ade8f02be164d48632281477e36f8dc2f41f79e56bfc",
      hashType: "type",
      args: "0xd591ebdc69626647e056e13345fd830c8b876bb06aa07ba610479eb77153ea9f"
    },
    typescriptHash: "0x7f3fba3fb8d6e000176f7e1ae22e8cd02841dec6a8341dc69aeef46387a20664",
    typeid: {
      codeHash: "0x00000000000000000000000000000000000000000000000000545950455f4944",
      args: "0x9105ea69838511ca609518d27855c53fed1b5ffaff4cfb334f58b40627d211c4",
      hashType: "type"
    },
  }
}

export default INFOS[NETWORK]
