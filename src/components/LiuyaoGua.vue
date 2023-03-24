<script setup lang="ts">
import { useZhouyiStore } from '@/stores/zhouyi'

const props = withDefaults(defineProps<{
  guaxiang: number[]
}>(), {
  guaxiang: () => [6, 7, 8, 9, 8, 7],
})

const { zhouyi } = useZhouyiStore()

const { yijing } = zhouyi as DATABASE.Zhouyi
const 变卦_卦象 = computed(() => props.guaxiang.map((yao) => yao === 6 ? 9 : yao === 9 ? 6 : yao))
const 变卦 = computed(() => yijing.find((v) => v.卦象.toString() === 变卦_卦象.toString()) || yijing[0])
const 变卦_五行 = computed(() => 变卦.value.五行)
</script>

<template>
  <div class="LiuyaoGua flex justify-between">
    <BaseGua v-bind="$attrs" :guaxiang="guaxiang" has-liushen has-najia :size="20" />
    <BaseGua :size="20" :guaxiang="变卦_卦象" :bagong-wuxing="变卦_五行" has-najia :has-dongyao="false" />
  </div>
</template>
