<script setup lang="ts">
import { useZhouyiStore } from '@/stores/zhouyi'

const props = withDefaults(defineProps<{
  guaxiang: number[]
}>(), {
  guaxiang: () => [6, 7, 8, 9, 8, 7],
})

const { zhouyi } = useZhouyiStore()

const { yijing } = zhouyi as DATABASE.Zhouyi
const 本卦_卦象 = computed(() => props.guaxiang.map((v) => v % 2))
const 变卦_卦象 = computed(() => props.guaxiang.map((yao) => yao === 6 ? 9 : yao === 9 ? 6 : yao))
const 本卦 = computed(() => yijing.find((v) => v.卦象.toString() === 本卦_卦象.value.toString()) || yijing[0])
const 本卦_五行 = computed(() => 本卦.value.五行)
const 静卦 = props.guaxiang.join() === 变卦_卦象.value.join()
console.log('🚀 ~ file: LiuyaoGua.vue:18 ~ 变卦_卦象.value:', 变卦_卦象.value)
console.log('🚀 ~ file: LiuyaoGua.vue:18 ~ props.guaxiang:', props.guaxiang)
</script>

<template>
  <div class="LiuyaoGua flex justify-around">
    <template v-if="静卦">
      <BaseGua v-bind="$attrs" :guaxiang="guaxiang" has-liushen has-shiying :size="32" />
    </template>
    <template v-else>
      <BaseGua v-bind="$attrs" :guaxiang="guaxiang" has-liushen has-shiying />
      <BaseGua v-bind="$attrs" :guaxiang="变卦_卦象" :bagong-wuxing="本卦_五行" :has-dongyao="false" />
    </template>
  </div>
</template>
