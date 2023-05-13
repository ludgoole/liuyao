<script lang="ts" setup>
import zhouyiDb from '@/indexdb/functions/zhouyi'
// import { getLiuyao } from '/src/api'
import { useZhouyiStore } from '@/stores/zhouyi'
const { zhouyi } = toRefs(useZhouyiStore())
const route = useRoute()
const isShowHeader = ref(false)
const isShowFooter = ref(true)

// create
zhouyiDb.get().then((res) => {
  console.log('🚀 ~ file: App.vue:12 ~ zhouyiDb.get ~ res:', res)
  zhouyi.value = res[0]
})

// getLiuyao().then((res) => {
//   zhouyi.value = res.results[0]
// })

watch(() => route.meta, (meta) => {
  // isShowHeader.value = !meta.hideHeader as boolean
  isShowFooter.value = !meta.hideFooter as boolean
})
</script>

<template>
  <div flex="~ col" justify-between w-100vw h-100vh>
    <AppHeader v-show="isShowHeader" />

    <KeepAlive v-if="route.meta.keepAlive">
      <RouterView flex-1 overflow-y-auto text-center />
    </KeepAlive>
    <RouterView v-else flex-1 overflow-y-auto text-center />

    <AppFooter v-if="isShowFooter" />
  </div>
</template>
