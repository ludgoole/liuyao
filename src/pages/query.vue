<route lang="yaml">
meta:
  title: 卜卦
  </route>

<script lang="ts" setup>
import { types } from '@/consts'
const router = useRouter()

const 卦象 = ref('')
const 占问 = ref('')
const 占类 = ref('')
const 卦主 = ref('')
const 年建 = ref('')
const 月建 = ref('')
const 日建 = ref('')
const 时建 = ref('')
const 旬空 = ref('')
const showPicker = ref(false)
const columns = types.map((type) =>
  ({ text: type, value: type }),
)

const onConfirm = (option: any) => {
  占类.value = option.text
  showPicker.value = false
}

const onSubmit = (values: any) => {
  router.push({
    path: '/display',
    query: values,
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
        v-model="卦主"
        name="卦主"
        label="卦主"
        placeholder="自己"
      />
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
