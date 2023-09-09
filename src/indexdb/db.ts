import Dexie from 'dexie'
const VERSION = 4

export class LudgooleDatabase extends Dexie {
  zhouyi!: Dexie.Table<DATABASE.Zhouyi, number>
  guali!: Dexie.Table<DATABASE.Guali, string>

  constructor(VERSION: number) {
    super('LudgooleDatabase')

    this.version(VERSION).stores({
      zhouyi: '&id, *yijing, *tiangan, *dizhi, *wuxing, *yinyuan',
      // book: '++id, *yijing, *tiangan, *dizhi, *wuxing',
      guali: '&id, 占问, 占类, 卦主, 卦象, 年建, 月建, 日建, 时建, 旬空, 用神, 吉凶, 应期, 细节, 启示, 收藏',
    })
  }
}

const db = new LudgooleDatabase(VERSION)

export default db
