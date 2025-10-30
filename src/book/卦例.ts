import 增删卜易 from './增删卜易'
import 六爻预测 from './六爻预测'
import { getDatabase } from '@/utils/db'

const database = getDatabase<Guali>('guali')
database.bulkAdd([...增删卜易, ...六爻预测]).then((data) => {
  console.log('🚀 ~ data:', data)
})

export type Guali = typeof 增删卜易[number] & {
  收藏?: string
}

export default database
