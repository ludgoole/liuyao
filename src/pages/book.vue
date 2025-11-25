<route lang="yaml">
meta:
  title: 卦例
  leftArrow: true
  rightText: 下载
</route>

<script lang="ts" setup>
import { Toast } from 'vant'
import { useZhouyiStore } from '@/stores/zhouyi'
import gualiDb, { type Guali } from '@/book/卦例'

import { downloadFile } from '@/utils'
import useMitt from '@/todos/use-mitt'
const { zhouyi } = useZhouyiStore()
const router = useRouter()

// data
const { yijing } = zhouyi as DATABASE.Zhouyi
const types = [
  '书名',
  '占问',
  '占类',
  // '卦主',
  '卦象',
  // '月建',
  // '日辰',
  // '旬空',
  '用神',
  // '吉凶',
  // '应期',
  '细节',
  '启示',
  '收藏',
] as DATABASE.Guali_Key[]
const book = ref<Guali[]>([])
const typeName = ref<DATABASE.Guali_Key>('占问')
const search = ref('')

// computed
const getZhigua = (卦象: string) => {
  const 主卦象 = 卦象.split('').map((v) => Number(v))
  const 变卦象 = 主卦象.map((v) => v === 6 ? 9 : v === 9 ? 6 : v)
  const 主卦_卦象 = 主卦象.map((v) => v % 2).toString()
  const 变卦_卦象 = 变卦象.map((v) => v % 2).toString()
  const 主卦 = yijing.find((卦) => 卦.卦象.toString() === 主卦_卦象)
  const 变卦 = yijing.find((卦) => 卦.卦象.toString() === 变卦_卦象)

  return `${主卦?.卦名}之${变卦?.卦名}`
}

// method
const onLoad = async () => {
  console.log('🚀 ~ file: book.vue:53 ~ onLoad ~ onLoad:')
  const data = await gualiDb.get()

  if (data)
    book.value = data
}

const queryGua = () => {
  console.log('🚀 ~ file: book.vue:59 ~ queryGua ~ queryGua:', typeName.value, search.value)
  gualiDb.query(typeName.value, search.value).then((data) => {
    if (data)
      book.value = data
  })
}

const starGua = (卦: Guali, i: number) => {
  // 不加i，数据永远是第一条，即book[0]
  console.log('🚀 ~ file: book.vue:56 ~ getZhigua ~ i:', i)

  const { 收藏 } = 卦
  gualiDb.update({ ...卦, 收藏: 收藏 === '1' ? '0' : '1' }).then(() => {
    Toast('收藏成功')
    onLoad()
  })
}
const delGua = (卦: Guali, i: number) => {
  // 不加i，数据永远是第一条，即book[0]
  console.log('🚀 ~ file: book.vue:56 ~ getZhigua ~ i:', i)

  gualiDb.remove(卦.id).then(() => {
    Toast('删除成功')
    onLoad()
  })
}

const toGua = (卦: Guali, i: number) => {
  // 不加i，数据永远是第一条，即book[0]
  console.log('🚀 ~ file: book.vue:56 ~ getZhigua ~ i:', i)

  router.push({
    path: '/display',
    query: {
      ...卦,
    },
  })
}

// bus
useMitt(() => {
  downloadFile(book.value, 'guali.json')
})

// created
onLoad()
</script>

<template>
  <div class="Book">
    <VanSticky :offset-top="0">
      <div bg-white py-2 px-4 whitespace-nowrap overflow-x-auto space-x-2>
        <VanTag
          v-for="type in types" :key="type" :type="typeName === type ? 'primary' : 'default'" size="large"
          @click="() => typeName = type"
        >
          {{ type }}
        </VanTag>
      </div>

      <VanField
        v-model="search" label="" placeholder="请输入" right-icon="search" @click-right-icon="queryGua"
        @keydown.enter.prevent="queryGua"
      />
    </VanSticky>

    <ul mt-4>
      <li v-for="(卦, i) in book" :key="卦.占问">
        <VanSwipeCell>
          <template #left>
            <VanButton
              square type="primary" :icon="卦.收藏 === '1' ? 'star' : 'star-o'" :text="卦.收藏 === '1' ? '取消' : '收藏'"
              @click="starGua(卦, i)"
            />
          </template>
          <VanCell :title="卦.占问" :value="getZhigua(卦.卦象)" @click="toGua(卦, i)" />
          <template #right>
            <VanButton square type="danger" text="删除" @click="delGua(卦, i)" />
          </template>
        </VanSwipeCell>
      </li>
    </ul>

    <VanEmpty v-if="book.length === 0" description="暂无数据" />
  </div>
</template>
