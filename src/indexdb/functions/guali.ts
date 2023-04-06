import db from '../db'
import bookData from '../database/book.js'
const guali = db.guali
console.log('🚀 ~ file: guali.ts:4 ~ guali:', guali)

db.transaction('rw', guali, async () => {
  // Query:
  const data = await guali.toArray()

  // Make sure we have something in DB:
  data.length === 0 && guali.bulkPut(bookData)

  // Show result:
  console.log('🚀 ~ file: guali.ts:11 ~ db.transaction ~ data:', data)
}).catch((e) => {
  console.log('🚀 ~ file: guali.ts:17 ~ db.transaction ~ e:', e)
  db.delete()
})

export const add = (data: DATABASE.Guali) => guali.put(data)
export const update = (data: DATABASE.Guali) => guali.put(data)
export const remove = (id: string) => guali.delete(id)
export const get = () => guali.toArray()
// export const query = (data: Partial<DATABASE.Guali>) => guali.where(data).toArray()
export const query = (type: DATABASE.Guali_Key, search: string) =>
  guali
    .orderBy('占问')
    .filter((卦) => !!卦[type]?.includes(search))
    .toArray()

export default {
  add,
  update,
  remove,
  get,
  query,
}
