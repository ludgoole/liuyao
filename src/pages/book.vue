<route lang="yaml">
meta:
  title: 卦例
  leftArrow: true
  rightText: 下载
</route>

<script lang="ts" setup>
import { getGuali } from '@/api'
import { downloadFile, en2cn } from '@/utils'
import useMitt from '@/todos/use-mitt'
const router = useRouter()

// data
const book = ref<DATABASE.Guali[]>([])
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const maxLen = 2

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
getGuali().then((data) => {
  book.value = en2cn(data.results)
})

// method
const toGua = (卦: DATABASE.Guali) => {
  console.log('🚀 ~ file: index.vue:30 ~ toGua ~ i', 卦)
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
</script>

<template>
  <div class="Book">
    <VanList
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <VanCell v-for="卦 in book" :key="卦.占问" :title="卦.占问" @click="toGua(卦)" />
    </VanList>
  </div>
</template>
