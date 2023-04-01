<route lang="yaml">
meta:
  title: 卦例
  leftArrow: true
  rightText: 下载
</route>

<script lang="ts" setup>
import { useZhouyiStore } from '@/stores/zhouyi'
import { getGuali } from '@/api'
import { downloadFile, en2cn } from '@/utils'
import useMitt from '@/todos/use-mitt'
const { zhouyi } = useZhouyiStore()
const router = useRouter()

// data
const { yijing } = zhouyi as DATABASE.Zhouyi
const book = ref<DATABASE.Guali[]>([])
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const maxLen = 10

const onLoad = () => {
  getGuali().then((data) => {
    if (refreshing.value) {
      book.value = []
      refreshing.value = false
    }

    book.value.push(...en2cn(data.results))
    loading.value = false

    if (book.value.length >= maxLen)
      finished.value = true
  })
}

// created
// getGuali().then((data) => {
//   book.value = en2cn(data.results)
// })

// method
const toGua = (卦: DATABASE.Guali, i: number) => {
  // 不加i，数据永远是滴一条，即book[0]
  console.log('🚀 ~ file: book.vue:56 ~ getZhigua ~ i:', i)

  router.push({
    path: '/display',
    query: {
      ...卦,
    },
  })
}

const getZhigua = (卦象: string) => {
  const 主卦象 = 卦象.split('').map((v) => Number(v))
  const 变卦象 = 主卦象.map((v) => v === 6 ? 9 : v === 9 ? 6 : v)
  const 主卦_卦象 = 主卦象.map((v) => v % 2).toString()
  const 变卦_卦象 = 变卦象.map((v) => v % 2).toString()
  const 主卦 = yijing.find((卦) => 卦.卦象.toString() === 主卦_卦象)
  const 变卦 = yijing.find((卦) => 卦.卦象.toString() === 变卦_卦象)

  return `${主卦?.卦名}之${变卦?.卦名}`
}

// bus
useMitt(() => {
  downloadFile(book.value, 'guali.json')
})
</script>

<template>
  <div class="Book">
    <VanList
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <VanCell v-for="(卦, i) in book" :key="卦.占问" :title="卦.占问" :value="getZhigua(卦.卦象)" @click="toGua(卦, i)" />
    </VanList>
  </div>
</template>
