import 增删卜易 from './增删卜易'
import 六爻自修宝典 from './六爻自修宝典'
import 淮源子 from './淮源子'
import 六爻预测 from './六爻预测'
import { getDatabase } from '@/utils/db'

const database = getDatabase<Guali>('guali')

database.get().then((data) => {
  const 自占 = data?.filter((i) => i.id.startsWith('自占_')) ?? []
  console.log('🚀 ~ 自占:', 自占)

  database.set([...增删卜易, ...六爻自修宝典, ...淮源子, ...六爻预测, ...自占])
})

export type OmiType = '之卦' | '原注' | '卦象' | '卦主' | '年建' | '时建' | '旬空'
export type Guali = Omit<typeof 增删卜易[number], OmiType> & {
  收藏?: string
  之卦?: string
  原注?: string
  卦象?: string
  卦主?: string
  年建?: string
  时建?: string
  旬空?: string
}

export default database
