<route lang="yaml">
meta:
  title: 卦例
  leftArrow: true
  rightText: 下载
</route>

<script lang="ts" setup>
import { Toast } from 'vant'
import gualiDb, { type Guali } from '@/book/卦例'

import { downloadFile } from '@/utils'
import useMitt from '@/todos/use-mitt'
const router = useRouter()

// data
const types = [
  '书名',
  '占问',
  '占类',
  // '卦主',
  // '卦象',
  '之卦',
  // '月建',
  // '日辰',
  // '旬空',
  // '用神',
  // '吉凶',
  // '应期',
  '细节',
  '启示',
  // '收藏',
] as DATABASE.Guali_Key[]
const searchs = ref([])
const book = ref<Guali[]>([])
const active = ref(0)

// method
const onLoad = async () => {
  console.log('🚀 ~ file: book.vue:53 ~ onLoad ~ onLoad:')
  const data = await gualiDb.get()

  if (data)
    book.value = data
}

const queryGua = () => {
  const params = searchs.value.map((v, i) => ({ prop: types[i], value: v })).filter((v) => v.value)
  console.log('🚀 ~ queryGua ~ params:', params)
  gualiDb.query(params).then((data) => {
    if (data)
      book.value = data
  })
}

const starGua = (卦: Guali, i: number) => {
  // 不加i，数据永远是第一条，即book[0]
  console.log('🚀 ~ file: book.vue:56 ~ starGua ~ i:', i)

  const { 收藏 } = 卦
  gualiDb.update({ ...卦, 收藏: 收藏 === '1' ? '0' : '1' }).then(() => {
    Toast('收藏成功')
    onLoad()
  })
}

const editGua = (卦: Guali, i: number) => {
  // 不加i，数据永远是第一条，即book[0]
  console.log('🚀 ~ file: book.vue:56 ~ editGua ~ i:', i)

  router.push({
    path: '/query',
    query: {
      ...卦,
    },
  })
}
const delGua = (卦: Guali, i: number) => {
  // 不加i，数据永远是第一条，即book[0]
  console.log('🚀 ~ file: book.vue:56 ~ delGua ~ i:', i)

  gualiDb.remove(卦.id).then(() => {
    Toast('删除成功')
    onLoad()
  })
}

const toGua = (卦: Guali, i: number) => {
  // 不加i，数据永远是第一条，即book[0]
  console.log('🚀 ~ file: book.vue:56 ~ toGua ~ i:', i)

  router.push({
    path: '/display',
    query: {
      ...卦,
    },
  })
}

// bus
useMitt(() => {
  downloadFile(book.value.filter((v) => v.id.startsWith('自占_')), 'guali.json')
})

// created
onLoad()
</script>

<template>
  <div class="Book">
    <VanSticky :offset-top="0">
      <div bg-white py-2 px-4 whitespace-nowrap overflow-x-auto space-x-2>
        <VanTag
          v-for="(type, i) in types" :key="type" :type="i === active ? 'primary' : 'default'" size="large"
          @click="() => active = i"
        >
          {{ type }}
        </VanTag>
      </div>

      <VanField
        v-model="searchs[active]" label="" placeholder="请输入" right-icon="search" @click-right-icon="queryGua"
        @keydown.enter.prevent="queryGua"
      />
    </VanSticky>

    <ul mt-4>
      <li v-for="(卦, i) in book" :key="卦.占问">
        <VanSwipeCell>
          <template #left>
            <VanButton
              square type="primary" :icon="卦.收藏 === '1' ? 'star' : 'star-o'" :text="卦.收藏 === '1' ? '取消' : '收藏'"
              @click="starGua(卦, i)"
            />
          </template>
          <VanCell :title="卦.占问" :value="卦.之卦" @click="toGua(卦, i)" />
          <template #right>
            <VanButton square type="warning" text="编辑" @click="editGua(卦, i)" />
            <VanButton square type="danger" text="删除" @click="delGua(卦, i)" />
          </template>
        </VanSwipeCell>
      </li>
    </ul>

    <VanEmpty v-if="book.length === 0" description="暂无数据" />
  </div>
</template>

<style lang="less">
.Book {
  ul {
    .van-cell {
      justify-content: space-between;
      &__value {
        flex: none;
        margin-left: 16px;
      }
    }
  }
}
</style>
