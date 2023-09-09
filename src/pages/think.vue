<route lang="yaml">
meta:
  title: 思考
</route>

<script setup>
const ideas = ref([])
const index = ref(0)
const isShow = ref(false)
const idea = ref('')

const onReset = () => {
  ideas.value = Array(15).fill('').map((v, i) => String(i + 1))
  ideas.value[0] = '主题'
  ideas.value[1] = '1P'
  ideas.value[7] = 'Q1'
  ideas.value[9] = 'Q2'
  ideas.value[2] = 'Q3'
}

const onAdd = () => {
  idea.value === 'reset' && onReset()

  idea.value && (ideas.value[index.value] = idea.value)
  isShow.value = false
  idea.value = ''
}

onMounted(() => {
  onReset()
})
</script>

<template>
  <div class="Think">
    <VanField v-show="isShow" v-model="idea" label="" placeholder="请输入" right-icon="guide-o" @click-right-icon="onAdd" />
    <VanGrid :column-num="4" square>
      <VanGridItem v-for="(v, i) in ideas" :key="i" :class="{ 'bg-primary': i === index }" @click="isShow = true; index = i; idea = v">
        <p v-for="t in v.split(' ')" :key="t">
          {{ t }}
        </p>
      </VanGridItem>
    </VanGrid>
    <VanButton class="!mt-8" type="primary" @click="onReset">
      重置
    </VanButton>
  </div>
</template>

<style lang="scss">
.Think {
  .van-grid-item:nth-child(5) {
    // @apply color-red-400;
    color: var(--van-button-primary-background-color);
    flex-basis: 50% !important;
  }
}
</style>
