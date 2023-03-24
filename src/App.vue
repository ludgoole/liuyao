<script lang="ts" setup>
import zhouyiDb from '@/indexdb/functions/zhouyi'
import { useZhouyiStore } from '@/stores/zhouyi'
const { zhouyi } = toRefs(useZhouyiStore())
const route = useRoute()
const isShowHeader = ref(true)
const isShowFooter = ref(true)

// create
zhouyiDb.get().then((res) => {
  zhouyi.value = res[0]
})

watch(() => route.meta, (meta) => {
  isShowHeader.value = !meta.hideHeader as boolean
  isShowFooter.value = !meta.hideFooter as boolean
})
</script>

<template>
  <div flex="~ col" justify-between w-100vw h-100vh>
    <AppHeader v-if="isShowHeader" />
    <RouterView flex-1 overflow-y-auto text-center />
    <AppFooter v-if="isShowFooter" />
  </div>
</template>
