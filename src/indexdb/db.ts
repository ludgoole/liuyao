import Dexie from 'dexie'
const VERSION = 1

export class LudgooleDatabase extends Dexie {
  zhouyi!: Dexie.Table<DATABASE.Zhouyi, number>

  constructor(VERSION: number) {
    super('LudgooleDatabase')

    this.version(VERSION).stores({
      zhouyi: '&id, *yijing, *tiangan, *dizhi, *wuxing',
      // book: '++id, *yijing, *tiangan, *dizhi, *wuxing',
    })
  }
}

const db = new LudgooleDatabase(VERSION)

export default db
