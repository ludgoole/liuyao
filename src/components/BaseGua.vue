<script setup lang="ts">
import type { ComputedRef } from 'vue'
import { useZhouyiStore } from '@/stores/zhouyi'

// props
const props = withDefaults(defineProps<{
  // small | medium | large
  // 20    | 40     | 60
  size?: number
  yuezhi?: DATABASE.Dizhi_Key
  gan?: DATABASE.Tiangan_Key
  zhi?: DATABASE.Dizhi_Key
  xunkong?: string
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
  yuezhi: '子',
  gan: '甲',
  zhi: '子',
  xunkong: '子丑',
  yueyi: '子',
  yongshen: '',
  hasCenter: false,
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
const { yijing, tiangan, dizhi, wuxing, yinyuan, baguaziran } = zhouyi as DATABASE.Zhouyi
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
// 伏神
const 卦宫_卦 = computed(() => yijing.find((v) => v.卦名 === 卦.value?.八宫.slice(0, 1)) || 卦.value)
const 卦宫_纳甲 = computed(() => 卦宫_卦.value?.纳甲)
// method
const getLiuqin = (wuxing: DATABASE.Wuxing, wuxingStr: string) => {
  const wuxingKey = wuxingStr as DATABASE.Wuxing_Key
  return wuxing[八宫五行.value][wuxingKey]
}
const getYinyuan = (五行: DATABASE.Wuxing_Key, 地支: string) => yinyuan[五行][地支]

// 月建旺衰
const getYueWangShuai = (_yaozhi: string) => {
  const yaozhi = _yaozhi as DATABASE.Dizhi_Key

  const { 五行, 六冲, 六合 } = dizhi[props.yuezhi]
  const 元神 = wuxing[五行].元神
  const 忌神 = wuxing[五行].忌神

  const 爻_五行 = dizhi[yaozhi].五行
  const 爻_元神 = wuxing[爻_五行].元神
  const 爻_忌神 = wuxing[爻_五行].忌神
  // 临月建
  if (props.yuezhi === yaozhi)
    return 2

  // 月破
  if (六冲 === yaozhi)
    return -2

  if (六合 === yaozhi) {
    // 生合
    if (元神 === 爻_五行)
      return 2

    // 克合
    if (忌神 === 爻_五行)
      return -0.5

    // 平合
    return 0.5
  }

  // 月生
  if (元神 === 爻_五行)
    return 1

  // 月扶
  if (五行 === 爻_五行)
    return 1

  // 月克
  if (忌神 === 爻_五行)
    return -1

  // 月气(月囚)
  if (props.yuezhi === '辰' && ['寅', '卯'].includes(yaozhi))
    return 0
  // 月气(月休)
  if (props.yuezhi === '未' && ['巳', '午'].includes(yaozhi))
    return 0

  // 月休囚
  if (爻_元神 === 五行 || 爻_忌神 === 五行)
    return -0.1

  // 其他情况
  return 0
}

const getYueScore = (_yaozhi: string) => {
  const score = getYueWangShuai(_yaozhi)
  return score >= 0 ? `+${score}` : score
}

// 日辰旺衰
const getRiWangShuai = (_yaozhi: string) => {
  const yaozhi = _yaozhi as DATABASE.Dizhi_Key

  const { 五行, 六合 } = dizhi[props.zhi]
  const { 元神, 忌神 } = wuxing[五行]

  const 爻_五行 = dizhi[yaozhi].五行
  const { 生, 旺, 绝 } = wuxing[爻_五行]

  // 临日辰
  if (props.zhi === yaozhi)
    return 2

  // 日破——暗动
  // if (六冲 === yaozhi)
  //   return -2

  if (六合 === yaozhi) {
    // 生合
    if (元神 === 爻_五行)
      return 2

    // 克合
    if (忌神 === 爻_五行)
      return -1

    // 平合
    return 0
  }

  // 日生
  if (元神 === 爻_五行)
    return 1

  // 日扶
  if (五行 === 爻_五行)
    return 1

  // 日克
  if (忌神 === 爻_五行)
    return -1

  // 没有日气
  // if (props.yuezhi === '辰' && ['寅', '卯'].includes(yaozhi))
  //   return 0
  // if (props.yuezhi === '未' && ['巳', '午'].includes(yaozhi))
  //   return 0

  // 没有日休囚
  // if (爻_元神 === 五行 || 爻_忌神 === 五行)
  //   return -0.1

  // 日生旺
  if (props.zhi === 生 || props.zhi === 旺)
    return 1

  // 日绝
  if (props.zhi === 绝)
    return -1

  // 其他情况
  return 0
}

const getRiScore = (_yaozhi: string) => {
  const score = getRiWangShuai(_yaozhi)
  return score >= 0 ? `+${score}` : score
}

// style
const width = computed(() => `${props.size}vw`)
const height = computed(() => `${props.size / 6}vw`)
const fontSize = computed(() => `${props.size / 2}px`)

// mounted
onMounted(() => {
  if (props.yongshen) {
    爻位.value = 5 - 纳甲.value.findIndex((v) => v === props.yongshen)
    props.hasDongyao && emit('on-ready', props.yongshen, 爻位.value)
  }
  else {
    const 世爻 = 纳甲.value.find((v, i) => 世应.value[i + 1] === '世')
    爻位.value = 纳甲.value.findIndex((v, i) => 世应.value[i + 1] === '世')

    props.hasDongyao && emit('on-ready', 世爻, 爻位.value)
  }
})
</script>

<template>
  <div class="BaseGua flex flex-col-reverse">
    <!-- 爻象 -->
    <div v-for="(yao, index) in guaxiang" :key="index" class="item flex items-center" @click="爻位 = index; emit('on-change', 纳甲[index], index)">
      <!-- 爻象左侧 -->
      <div v-if="hasNajia" class="BaseGua-left">
        <div v-if="index === 5">
          <p opacity-0>
            占位符
          </p>
        </div>
        <div
          flex
        >
          <!-- 伏爻 -->
          <p
            v-if="hasDongyao" color-gray-4 mr-2 :class="{
              'color-green font-bold': wuxing[用神_五行]?.元神 === 卦宫_纳甲[index].slice(-1),
              'color-red font-bold': wuxing[用神_五行]?.忌神 === 卦宫_纳甲[index].slice(-1),
              'line-through': xunkong.includes(卦宫_纳甲[index].slice(-2, -1)),
            }"
          >
            {{ 六亲_简化[getLiuqin(wuxing, 卦宫_纳甲[index].slice(-1))] }}{{ 卦宫_纳甲[index].slice(-2, -1) }}
          </p>
          <!-- 六亲五行 -->
          <p
            :class="{
              // 用神
              'font-bold': 用神 === 纳甲[index],
              // 元神
              'color-green font-bold': wuxing[用神_五行]?.元神 === 纳甲[index].slice(-1),
              // 忌神
              'color-red font-bold': wuxing[用神_五行]?.忌神 === 纳甲[index].slice(-1),
              // 暗动，旺相或旬空之爻逢日冲
              'color-yellow-5': dizhi[zhi].六冲 === 纳甲[index].slice(-2, -1),
              //
              'line-through': xunkong.includes(纳甲[index].slice(-2, -1)),
            }"
          >
            {{ getLiuqin(wuxing, 纳甲[index].slice(-1)) }}{{ 纳甲[index].slice(-2) }}
          </p>
          <!-- 十二因缘 -->
          <p class="mr-1">
            {{ getYinyuan(用神_五行, 纳甲[index].slice(-2, -1)).slice(-1) }}
          </p>
          <!-- 旺衰 -->
          <p class="mr-1">
            <span class="inline-block w-7">
              {{ getYueScore(纳甲[index].slice(-2, -1)) }}
            </span>
            <span>
              {{ getRiScore(纳甲[index].slice(-2, -1)) }}
            </span>
          </p>
        </div>
      </div>
      <!-- 爻象 -->
      <div v-if="hasCenter" class="BaseGua-center">
        <div v-if="index === 5" flex-center>
          <p class="font-bold">
            {{ baguaziran[卦象.slice(3).join('')] }}{{ baguaziran[卦象.slice(0, 3).join('')] }}{{ 卦?.卦名 }}
          </p>
          <p>({{ 卦?.八宫.slice(0, 2) }}{{ 卦?.归游 }})</p>
        </div>
        <div class="BaseGua-yao m-1" :class="[yao % 2 === 0 ? 'yin' : 'yang']"></div>
      </div>
      <!-- 爻象右侧 -->
      <div class="BaseGua-right text-left">
        <div v-if="index === 5">
          <p opacity-0>
            <!-- 占位符 -->
            占
          </p>
        </div>
        <div flex>
          <!-- 符号 -->
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
          <!-- 世应 -->
          <p v-if="hasShiying" w-1em translate-y-6px mr-2>
            {{ 世应[`${index + 1}`] === '世' ? 卦?.八宫.slice(0, 1) : 世应[`${index + 1}`] }}
          </p>
          <!-- 六神 -->
          <p v-if="hasLiushen" translate-y-6px>
            {{ 六神[index] }}
          </p>
        </div>
      </div>
    </div>
    <!-- 卦名 -->
    <div v-if="!hasCenter" flex-center translate-y-10px>
      <p class="font-bold">
        {{ baguaziran[卦象.slice(3).join('')] }}{{ baguaziran[卦象.slice(0, 3).join('')] }}{{ 卦?.卦名 }}
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
