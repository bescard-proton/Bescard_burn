import { ccc } from '@ckb-ccc/core'
import { cccA } from '@ckb-ccc/core/advanced'

export class NoCacheClient extends ccc.ClientCache {
  async markUsableNoCache(
    ...cellLikes: (ccc.CellLike | ccc.CellLike[])[]
  ): Promise<void> {
    void cellLikes
  }

  async markUnusable(
    ...outPointLikes: (ccc.OutPointLike | ccc.OutPointLike[])[]
  ): Promise<void> {
    void outPointLikes
  }

  async clear(): Promise<void> {
  }

  async* findCells(
    keyLike: cccA.ClientCollectableSearchKeyLike,
  ): AsyncGenerator<ccc.Cell> {
    void keyLike
    yield* [] as ccc.Cell[]
  }

  async isUnusable(outPointLike: ccc.OutPointLike): Promise<boolean> {
    void outPointLike
    return false
  }
}
