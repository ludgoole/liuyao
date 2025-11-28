<route lang="yaml">
meta:
  title: 卜卦
  </route>

<script lang="ts" setup>
import { types } from '@/consts'
import { useZhouyiStore } from '@/stores/zhouyi'
const router = useRouter()
const route = useRoute()
const { zhouyi } = useZhouyiStore()

const id = route.query.id as string
const 卦象 = ref(route.query.卦象 as string)
const 之卦 = ref(route.query.之卦 as string)
const 占问 = ref(route.query.占问 as string)
const 占类 = ref(route.query.占类 as string)
const 年建 = ref(route.query.年建 as string)
const 月建 = ref(route.query.月建 as string)
const 日建 = ref(route.query.日建 as string)
const 时建 = ref(route.query.时建 as string)
const 旬空 = ref(route.query.旬空 as string)

const showPicker = ref(false)
const columns = types.map((type) =>
  ({ text: type, value: type }),
)

const onConfirm = (option: any) => {
  占类.value = option.text
  showPicker.value = false
}

// 添加一个新的方法用于计算旬空
const calculateXunkong = (rigan: string): string => {
  const gan = rigan[0] // 获取天干的第一个字符
  const zhi = rigan.slice(1) // 获取地支部分

  // 天干对应表（1-10）
  const ganMap: Record<string, number> = {
    甲: 1,
    乙: 2,
    丙: 3,
    丁: 4,
    戊: 5,
    己: 6,
    庚: 7,
    辛: 8,
    壬: 9,
    癸: 10,
  }

  // 地支对应表（1-12）
  const zhiMap: Record<string, number> = {
    子: 1,
    丑: 2,
    寅: 3,
    卯: 4,
    辰: 5,
    巳: 6,
    午: 7,
    未: 8,
    申: 9,
    酉: 10,
    戌: 11,
    亥: 12,
  }

  // 地支名称数组（按顺序）
  const zhiArray = ['', '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']

  // 获取当前天干和地支的序号
  const ganIndex = ganMap[gan]
  const zhiIndex = zhiMap[zhi]

  // 计算从当前天干到癸还需要多少步
  // 例如：甲(1)到癸(10)需要9步，乙(2)到癸(10)需要8步...
  const stepsToGui = 10 - ganIndex

  // 计算癸对应的地支位置
  // 当前地支位置 + 步数，然后对12取模
  let guiZhiIndex = (zhiIndex + stepsToGui) % 12
  if (guiZhiIndex === 0) guiZhiIndex = 12 // 处理模运算结果为0的情况

  // 从癸的地支位置往后数两个地支就是旬空
  let xunkongStartIndex = (guiZhiIndex + 1) % 12
  if (xunkongStartIndex === 0) xunkongStartIndex = 12

  let xunkongEndIndex = (guiZhiIndex + 2) % 12
  if (xunkongEndIndex === 0) xunkongEndIndex = 12

  // 返回旬空值
  return zhiArray[xunkongStartIndex] + zhiArray[xunkongEndIndex]
}

const getZhigua = (卦象: string) => {
  const 主卦象 = 卦象.split('').map((v) => Number(v))
  const 变卦象 = 主卦象.map((v) => v === 6 ? 9 : v === 9 ? 6 : v)
  const 主卦_卦象 = 主卦象.map((v) => v % 2).toString()
  const 变卦_卦象 = 变卦象.map((v) => v % 2).toString()
  const 主卦 = zhouyi?.yijing.find((卦) => 卦.卦象.toString() === 主卦_卦象)
  const 变卦 = zhouyi?.yijing.find((卦) => 卦.卦象.toString() === 变卦_卦象)

  return `${主卦?.卦名}之${变卦?.卦名}`
}

// 在日建变化时触发计算
watch(() => 日建.value, (newVal) => {
  if (newVal && newVal.length >= 2)
    旬空.value = calculateXunkong(newVal)
})

watch(() => 之卦.value, (newVal) => {
  const [主卦_卦名, 变卦_卦名] = newVal.split('之')
  if (!变卦_卦名 || !zhouyi) return

  const 主卦_卦象 = zhouyi.yijing.find((卦) => 卦.卦名 === 主卦_卦名)
  const 变卦_卦象 = zhouyi.yijing.find((卦) => 卦.卦名 === 变卦_卦名)

  // 遍历主卦卦象，如果主卦爻与对应的变卦爻一致，则为静爻，爻数为0返回8，为1返回7；否则为动爻，分别返回6和9
  const 卦象_爻数 = 主卦_卦象?.卦象.map((v, i) => {
    if (v === 变卦_卦象?.卦象[i])
      return v === 1 ? 7 : 8
    else
      return v === 1 ? 9 : 6
  })

  卦象.value = 卦象_爻数?.join('') ?? ''
  console.log('🚀 ~ 卦象_爻数:', 卦象_爻数)
})

watch(() => 卦象.value, (newVal) => {
  console.log('🚀 ~ newVal:', newVal)
  if (newVal.length === 6)
    之卦.value = getZhigua(newVal)
})

const onSubmit = (values: any) => {
  router.push({
    path: '/display',
    query: {
      id,
      ...values,
    },
  })
}
</script>

<template>
  <VanForm label-width="auto" @submit="onSubmit">
    <VanCellGroup inset>
      <VanField
        v-model="卦象"
        name="卦象"
        label="卦象"
        placeholder="777977"
      />
      <VanField
        v-model="之卦"
        name="之卦"
        label="之卦"
        placeholder="乾之小畜"
      />
      <VanField
        v-model="占问"
        name="占问"
        label="占问"
        placeholder="今日天气如何？"
      />
      <VanField
        v-model="占类"
        is-link
        readonly
        name="占类"
        label="占类"
        placeholder="点击选择占类"
        @click="showPicker = true"
      />
      <VanPopup v-model:show="showPicker" position="bottom">
        <VanPicker
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </VanPopup>
      <VanField
        v-model="年建"
        name="年建"
        label="年建"
        placeholder="卯"
      />
      <VanField
        v-model="月建"
        name="月建"
        label="月建"
        placeholder="丑"
      />
      <VanField
        v-model="日建"
        name="日建"
        label="日建"
        placeholder="庚午"
      />
      <VanField
        v-model="时建"
        name="时建"
        label="时建"
        placeholder="甲申"
      />
      <VanField
        v-model="旬空"
        name="旬空"
        label="旬空"
        placeholder="戌亥"
      />
    </VanCellGroup>
    <div mt-30 px-6>
      <VanButton round block type="primary" native-type="submit">
        开始排盘
      </VanButton>
    </div>
  </VanForm>
</template>

<style lang="scss" scoped>

</style>
