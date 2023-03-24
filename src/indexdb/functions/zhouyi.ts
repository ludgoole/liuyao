import db from '../db'
import zhouyiData from '../database/zhouyi.json'

const zhouyi = db.zhouyi

db.transaction('rw', zhouyi, async () => {
  // Make sure we have something in DB:
  zhouyi.put(zhouyiData)

  // Query:
  const data = await zhouyi.toArray()

  // Show result:
  console.log('🚀 ~ file: zhouyi.ts:13 ~ db.transaction ~ smithzhouyi:', data)
}).catch((e) => {
  console.log('🚀 ~ file: zhouyi.ts:17 ~ db.transaction ~ e:', e)
})

export const add = (data: DATABASE.Zhouyi) => zhouyi.put(data)
export const remove = (id: number) => zhouyi.delete(id)
export const get = () => zhouyi.toArray()
export const query = (data: Partial<DATABASE.Zhouyi>) => zhouyi.where(data).toArray()

export default {
  add,
  remove,
  get,
  query,
}
