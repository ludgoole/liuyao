import localforage from 'localforage'

const database = localforage.createInstance({ name: 'liuyao' })

// 定义一个带有 id 的接口用于约束
interface Identifiable {
  id: number | string
}

// 基本类型
type Type = string | number | boolean

export async function get<T>(key: string) {
  return await database.getItem<T[]>(key)
}

export async function add<T extends Identifiable>(key: string, item: T) {
  let data = await database.getItem<T[]>(key) ?? []
  data.push(item)

  // 去重
  data = data.filter((item, index, self) => self.findIndex((i) => i.id === item.id) === index)
  return database.setItem(key, data)
}

export async function bulkAdd<T extends Identifiable>(key: string, items: T[]) {
  let data = await database.getItem<T[]>(key) ?? []
  data.push(...items)

  // 去重
  data = data.filter((item, index, self) => self.findIndex((i) => i.id === item.id) === index)

  return database.setItem(key, data)
}

export async function update<T extends Identifiable>(key: string, item: T) {
  const data = await database.getItem<T[]>(key)

  if (data) {
    const index = data.findIndex((i) => i.id === item.id)
    if (index > -1) {
      data[index] = item
      return database.setItem(key, data)
    }
  }

  return data
}

export async function remove<T extends Identifiable>(key: string, id: string) {
  const data = await database.getItem<T[]>(key)

  if (data) {
    const index = data.findIndex((i) => i.id === id)
    if (index > -1) {
      data.splice(index, 1)
      return database.setItem(key, data)
    }
  }

  return data
}

export async function query<T>(key: string, prop: string, value: Type) {
  const data = await database.getItem<T[]>(key)

  if (data)
    return data.filter((i) => String(i[prop as keyof T]).includes(value.toString()))

  return data
}

export function getDatabase<T extends Identifiable>(key: string) {
  return {
    get: () => get<T>(key),
    add: (item: T) => add<T>(key, item),
    bulkAdd: (items: T[]) => bulkAdd<T>(key, items),
    update: (item: T) => update<T>(key, item),
    remove: (id: string) => remove<T>(key, id),
    query: (prop: string, value: Type) => query<T>(key, prop, value),
  }
}
