<script setup lang="ts">
import type { ComputedRef } from 'vue'
import { useZhouyiStore } from '@/stores/zhouyi'

// props
const props = withDefaults(defineProps<{
  // small | medium | large
  // 20    | 40     | 60
  size?: number
  gan?: DATABASE.Tiangan_Key
  zhi?: DATABASE.Dizhi_Key
  yongshen?: string
  hasCenter?: boolean
  hasLiushen?: boolean
  hasNajia?: boolean
  hasDongyao?: boolean
  hasShiying?: boolean
  bagongWuxing?: string
  guaxiang: number[]
  // fontSize: string
}>(), {
  size: 40,
  gan: '甲',
  zhi: '子',
  yongshen: '',
  hasLiushen: false,
  hasNajia: true,
  hasDongyao: true,
  hasShiying: false,
  // fontSize: '14px',
  // bagongWuxing: '金',
  guaxiang: () => [6, 7, 8, 9, 8, 7],
})

// emit
const emit = defineEmits(['on-ready', 'on-change'])

const 六亲_简化 = {
  父母: '父',
  兄弟: '兄',
  子孙: '孙',
  妻财: '财',
  官鬼: '官',
} as DATABASE.Guali_EN

// data
const { zhouyi } = useZhouyiStore()
const { yijing, tiangan, dizhi, wuxing, yinyuan } = zhouyi as DATABASE.Zhouyi
const 爻位 = ref(0)

// computed
const 卦象 = computed(() => props.guaxiang.map((v) => v % 2))
const 卦 = computed(() => yijing.find((v) => v.卦象.toString() === 卦象.value.toString()) || yijing[0])
const 纳甲 = computed(() => 卦.value?.纳甲)
const 世应 = computed(() => 卦.value?.世应) as ComputedRef<{ [key: string | number]: string }>
const 六神 = computed(() => tiangan[props.gan].六神)
const 用神 = computed(() => props.yongshen || 纳甲.value[5])
const 用神_五行 = computed(() => 用神.value.slice(-1)) as ComputedRef<DATABASE.Wuxing_Key>
// const 用神_地支 = computed(() => 用神.value.slice(-2, -1)) as ComputedRef<DATABASE.Dizhi_Key>
const 八宫五行 = computed(() => props.bagongWuxing || 卦.value.五行) as ComputedRef<DATABASE.Wuxing_Key>

const 卦宫_卦 = computed(() => yijing.find((v) => v.卦名 === 卦.value?.八宫.slice(0, 1)) || 卦.value)
const 卦宫_纳甲 = computed(() => 卦宫_卦.value?.纳甲)

// method
const getLiuqin = (wuxing: DATABASE.Wuxing, wuxingStr: string) => {
  const wuxingKey = wuxingStr as DATABASE.Wuxing_Key
  return wuxing[八宫五行.value][wuxingKey]
}
const getYinyuan = (五行: DATABASE.Wuxing_Key, 地支: string) => yinyuan[五行][地支]

// style
const width = computed(() => `${props.size}vw`)
const height = computed(() => `${props.size / 6}vw`)
const fontSize = computed(() => `${props.size / 2}px`)

// mounted
onMounted(() => {
  const 世爻 = 纳甲.value.find((v, i) => 世应.value[i + 1] === '世')
  爻位.value = 纳甲.value.findIndex((v, i) => 世应.value[i + 1] === '世')

  props.hasDongyao && emit('on-ready', 世爻, 爻位.value)
})
</script>

<template>
  <div class="BaseGua flex flex-col-reverse">
    <div v-for="(yao, index) in guaxiang" :key="index" class="item flex items-center" @click="爻位 = index; emit('on-change', 纳甲[index], index)">
      <div v-if="hasNajia" class="BaseGua-left">
        <div v-if="index === 5">
          <p opacity-0>
            占位符
          </p>
        </div>
        <div
          flex
          :class="{
            'font-bold': 爻位 === index,
            'color-rose': wuxing[用神_五行]?.元神 === 纳甲[index].slice(-1),
            'color-green': wuxing[用神_五行]?.忌神 === 纳甲[index].slice(-1),
            'border-base': dizhi[zhi].六冲 === 纳甲[index].slice(-2, -1),
          }"
        >
          <template v-if="hasDongyao">
            <p color-gray-4>
              {{ 六亲_简化[getLiuqin(wuxing, 卦宫_纳甲[index].slice(-1))] }}
            </p>
            <p color-gray-4 mr-2>
              {{ 卦宫_纳甲[index].slice(-2, -1) }}
            </p>
          </template>
          <p>{{ getLiuqin(wuxing, 纳甲[index].slice(-1)) }}{{ 纳甲[index].slice(-2) }}</p>
          <p class="mr-2">
            {{ getYinyuan(用神_五行, 纳甲[index].slice(-2, -1)).slice(-1) }}
          </p>
        </div>
      </div>
      <div v-if="hasCenter" class="BaseGua-center">
        <div v-if="index === 5" flex-center>
          <p class="font-bold">
            {{ 卦?.卦名 }}
          </p>
          <p>({{ 卦?.八宫.slice(0, 2) }}{{ 卦?.归游 }})</p>
        </div>
        <div class="BaseGua-yao m-1" :class="[yao % 2 === 0 ? 'yin' : 'yang']"></div>
      </div>
      <div class="BaseGua-right text-left">
        <div v-if="index === 5">
          <p opacity-0>
            <!-- 占位符 -->
            占
          </p>
        </div>
        <div flex>
          <p w-2em text-xl color-gray-6>
            <span
              v-if="hasDongyao" inline-block :class="{
                'color-black': yao % 3 === 0,
                'translate-y--4px': yao % 3 !== 0,
                'translate-y--2px': yao === 9,
              }"
            >
              {{ yao === 6 ? '×' : yao === 9 ? 'o' : yao === 7 ? '、' : '、、' }}
            </span>
            <span v-else inline-block translate-y--4px>
              {{ yao % 2 === 0 ? '、、' : '、' }}
            </span>
          </p>
          <p v-if="hasShiying" w-1em translate-y-6px mr-2>
            {{ 世应[`${index + 1}`] === '世' ? 卦?.八宫.slice(0, 1) : 世应[`${index + 1}`] }}
          </p>
          <p v-if="hasLiushen" translate-y-6px>
            {{ 六神[index] }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="!hasCenter" flex-center translate-y-10px>
      <p class="font-bold">
        {{ 卦?.卦名 }}
      </p>
      <p>({{ 卦?.八宫.slice(0, 2) }}{{ 卦?.归游 }})</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.BaseGua {
  font-size: v-bind(fontSize);
  &-yao {
    max-width: 150px;
    max-height: 24px;
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
