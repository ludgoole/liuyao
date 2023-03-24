<script lang="ts" setup>
import { menus } from '@/consts'
const router = useRouter()
const route = useRoute()
const active = ref('/')
const onChange = (path: string) => {
  router.push({
    path,
  })
}

watch(() => route.path, (path) => {
  active.value = path
})
</script>

<template>
  <VanTabbar v-model="active" class="!static" @change="onChange">
    <VanTabbarItem
      v-for="item in menus"
      :key="item.icon"
      :icon="item.icon"
      :name="item.path"
    >
      {{ item.name }}
    </VanTabbarItem>
  </VanTabbar>
</template>
