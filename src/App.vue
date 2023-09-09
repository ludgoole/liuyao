<script lang="ts" setup>
import zhouyiDb from '@/indexdb/functions/zhouyi'
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

watch(() => route.meta, (meta) => {
  // isShowHeader.value = !meta.hideHeader as boolean
  isShowFooter.value = !meta.hideFooter as boolean
})
</script>

<template>
  <div flex="~ col" justify-between w-full h-100vh>
    <AppHeader v-show="isShowHeader" />

    <RouterView
      v-slot="{ Component }"
      flex-1 overflow-y-auto text-center
    >
      <KeepAlive v-if="route.meta.keepAlive">
        <Component :is="Component" />
      </KeepAlive>
      <Component :is="Component" v-else />
    </RouterView>

    <AppFooter v-if="isShowFooter" />
  </div>
</template>
