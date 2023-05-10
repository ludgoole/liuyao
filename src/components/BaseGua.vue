<script setup lang="ts">
import type { ComputedRef } from 'vue'
import { useZhouyiStore } from '@/stores/zhouyi'

// props
const props = withDefaults(defineProps<{
  // small | medium | large
  // 20    | 40     | 60
  size?: number
  gan?: DATABASE.Tiangan_Key
  yongshen?: string
  hasLiushen?: boolean
  hasNajia?: boolean
  hasDongyao?: boolean
  bagongWuxing?: string
  guaxiang: number[]
}>(), {
  size: 40,
  gan: '甲',
  yongshen: '',
  hasLiushen: false,
  hasNajia: false,
  hasDongyao: true,
  // bagongWuxing: '金',
  guaxiang: () => [6, 7, 8, 9, 8, 7],
})

// emit
const emit = defineEmits(['on-change'])

// data
const { zhouyi } = useZhouyiStore()
const { yijing, tiangan, wuxing } = zhouyi as DATABASE.Zhouyi

// computed
const 卦象 = computed(() => props.guaxiang.map((v) => v % 2))
const 卦 = computed(() => yijing.find((v) => v.卦象.toString() === 卦象.value.toString()) || yijing[0])
console.log('🚀 ~ file: BaseGua.vue:37 ~ 卦象:', 卦象.value, 卦.value)
const 纳甲 = computed(() => 卦.value?.纳甲)
const 世应 = computed(() => 卦.value?.世应) as ComputedRef<{ [key: string | number]: string }>
const 六神 = computed(() => tiangan[props.gan].六神)
const 用神 = computed(() => props.yongshen.slice(-1)) as ComputedRef<DATABASE.Wuxing_Key>
const 八宫五行 = computed(() => props.bagongWuxing || 卦.value.五行) as ComputedRef<DATABASE.Wuxing_Key>

// method
const getLiuqin = (wuxing: DATABASE.Wuxing, wuxingStr: string) => {
  const wuxingKey = wuxingStr as DATABASE.Wuxing_Key
  return wuxing[八宫五行.value][wuxingKey]
}

// style
const width = computed(() => `${props.size}vw`)
const height = computed(() => `${props.size / 6}vw`)
const fontSize = computed(() => props.size <= 24 ? `${props.size / 2}px` : '14px')
</script>

<template>
  <div class="BaseGua flex flex-col-reverse">
    <div v-for="(yao, index) in guaxiang" :key="index" class="item flex-center" @click="emit('on-change', 纳甲[index])">
      <div v-if="hasNajia" class="BaseGua-left">
        <div v-if="index === 5">
          <p opacity-0>
            占位符
          </p>
        </div>
        <div
          flex
          :class="{
            'font-bold': 用神 && 纳甲[index]?.includes(用神),
            'color-rose': wuxing[用神]?.元神 === 纳甲[index].slice(-1),
            'color-green': wuxing[用神]?.忌神 === 纳甲[index].slice(-1),
          }"
        >
          <p v-if="hasLiushen" class="mr-2">
            {{ 六神[index] }}
          </p>
          <p>{{ getLiuqin(wuxing, 纳甲[index].slice(-1)) }}{{ 纳甲[index].slice(-2) }}</p>
        </div>
      </div>
      <div class="BaseGua-center">
        <div v-if="index === 5" flex-center>
          <p class="font-bold">
            {{ 卦?.卦名 }}
          </p>
          <p>({{ 卦?.八宫.slice(0, 2) }}{{ 卦?.归游 }})</p>
        </div>
        <div class="BaseGua-yao m-1" :class="[yao % 2 === 0 ? 'yin' : 'yang']"></div>
      </div>
      <div v-if="hasDongyao" class="BaseGua-right">
        <div v-if="index === 5">
          <p opacity-0>
            <!-- 占位符 -->
            占
          </p>
        </div>
        <div flex w-6>
          <p w-3>
            {{ yao === 6 ? 'x' : yao === 9 ? 'o' : '' }}
          </p>
          <p v-if="hasNajia">
            {{ 世应[`${index + 1}`] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.BaseGua {
  font-size: v-bind(fontSize);
  &-yao {
    width:  v-bind(width);
    height: v-bind(height);

    &.yin {
      background: linear-gradient(90deg, black 40%, transparent 40%, transparent 60%, black 60%);
    }

    &.yang {
      background: darkred;
    }
  }
}
</style>
