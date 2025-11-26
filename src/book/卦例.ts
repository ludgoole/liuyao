import 增删卜易 from './增删卜易'
import 淮源子 from './淮源子'
import 六爻预测 from './六爻预测'
import { getDatabase } from '@/utils/db'

const database = getDatabase<Guali>('guali')
const data = await database.get()
const 自占 = data?.filter((i) => i.id.startsWith('自占_')) ?? []
console.log('🚀 ~ 自占:', 自占)

database.set([...增删卜易, ...淮源子, ...六爻预测, ...自占])

export type Guali = typeof 增删卜易[number] & {
  收藏?: string
}

export default database
