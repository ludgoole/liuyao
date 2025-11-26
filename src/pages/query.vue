<route lang="yaml">
meta:
  title: 卜卦
  </route>

<script lang="ts" setup>
import { types } from '@/consts'
const router = useRouter()
const route = useRoute()

const id = route.query.id as string
const 卦象 = ref(route.query.卦象 as string)
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

  // 天干对应表
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

  // 地支对应表
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

  // 计算当前是第几个甲开始的旬（甲子、甲戌...）
  let ganIndex = ganMap[gan]
  if ((ganIndex - 1) % 2 !== 0) {
    // 如果不是从甲开始，则向前查找最近的一个甲
    ganIndex -= (ganIndex - 1) % 2
  }

  // 每个甲开头的地支位置
  const baseZhiPositions = [1, 11, 9, 7, 5, 3] // 对应甲子、甲戌、甲申、甲午、甲辰、甲寅的地支位置
  const baseZhiPosition = baseZhiPositions[(ganIndex - 1) / 2]

  // 得到当前地支的位置
  const currentZhiPos = zhiMap[zhi]

  // 算出差值模12得到偏移量
  const diff = (currentZhiPos - baseZhiPosition + 12) % 12

  // 取整除后的旬数
  const xunIndex = Math.floor(diff / 2)

  // 定义各旬对应的旬空
  const xunkongs = [
    '戌亥', '申酉', '午未',
    '辰巳', '寅卯', '子丑',
  ]

  return xunkongs[xunIndex]
}

// 在日建变化时触发计算
watch(() => 日建.value, (newVal) => {
  if (newVal && newVal.length >= 2)
    旬空.value = calculateXunkong(newVal)
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
        placeholder="678987"
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
