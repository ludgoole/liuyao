<route lang="yaml">
meta:
  title: 取象
  leftArrow: true
  </route>

<script lang="ts" setup>
import Detail from '@/mock/detail'
type Key = '八卦' | '爻位' | '地支' | '五行' | '六亲' | '六神' | '因缘' | '神煞'

const route = useRoute()

// data
const 类型 = route.query.typeName as Key
const 键值 = route.query.key as string

const types = Object.keys(Detail) as Key[]
const typeName = ref<Key>(类型 || '八卦')
const search = ref(键值)

// computed
const detail = computed(() => Detail[typeName.value] as { [key: string]: string })

// method
const query = () => {
  console.log('🚀 ~ file: detail.vue:20 ~ query ~ data:', types)
}
</script>

<template>
  <div class="Book">
    <VanSticky :offset-top="0">
      <div bg-white py-2 px-4 flex-center justify="around">
        <VanTag
          v-for="type in types" :key="type"
          :type="typeName === type ? 'primary' : 'default'"
          size="large"
          @click="() => {
            typeName = type;
            search = '';
          }"
        >
          {{ type }}
        </VanTag>
      </div>

      <VanField v-model="search" label="" placeholder="请输入" right-icon="search" @click-right-icon="query" />
    </VanSticky>
    <ul v-if="search" m-4 text-justify>
      <li v-for="key in search.split('、')" :key="key">
        <p>
          {{ detail ? detail[key] : '' }}
        </p>
      </li>
    </ul>
    <ul v-else m-4 text-left>
      <li v-for="(val, key) in detail" :key="key">
        <p>
          <span font-800>{{ key }}</span>
          <b>：</b>
          <span>{{ val }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
