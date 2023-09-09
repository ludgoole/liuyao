<route lang="yaml">
meta:
  title: 理论
  leftArrow: true
  hideFooter: true
</route>

<script lang="ts" setup>
import img_dizhi from '@/assets/image/dizhi.webp'
import img_zixing from '@/assets/image/zixing.webp'
import img_wuxing from '@/assets/image/wuxing.png'

const router = useRouter()
const 卦例 = ref('')

const onSearch = (val: string) => {
  const [卦象, 月建, 日建, 旬空] = val.split(' ')
  console.log(val)
  router.replace({
    path: '/display',
    query: { 卦象, 月建, 日建, 旬空, ts: Date.now() },
  })
}
</script>

<template>
  <VanSearch v-model="卦例" class="pt-4" placeholder="请输入卦例" @search="onSearch" />
  <div>
    <img :src="img_wuxing" />
    <img :src="img_dizhi" />
    <img :src="img_zixing" />
  </div>
</template>

<style lang="scss" scoped>

</style>
