<route lang="yaml">
meta:
  title: 排盘
  leftArrow: true
  rightText: 保存
</route>

<script lang="ts" setup>
import moment from 'moment'
import { Lunar } from 'lunar-javascript'
import { cn2en } from '@/utils'
import { postGuali } from '@/api'
import { useZhouyiStore } from '@/stores/zhouyi'
import useMitt from '@/todos/use-mitt'

const { zhouyi } = useZhouyiStore()
const route = useRoute()
const { query } = route
const lunar = Lunar.fromDate(new Date())
const { tiangan, dizhi, wuxing } = zhouyi as DATABASE.Zhouyi
const activeName = ref('1')

// 卜卦
const 占问 = (query.占问 || '今日天气如何？') as string
// const 占类 = query.占类 || '天气'
// const 卦主 = query.卦主 || '自己'
const 卦象 = (query.卦象 || '678987') as string

// 装卦
const 主卦 = (卦象 as string).split('').map(Number)
// const 变卦 = 主卦.map((v) => v === 6 ? 9 : v === 9 ? 6 : v)
const 月建 = query.月建 || lunar.getMonthZhi()
const 日建 = query.日建 || lunar.getDayInGanZhi()
const 旬空 = query.旬空 || lunar.getDayXunKong()
const 月支 = 月建 as DATABASE.Dizhi_Key
const 日支 = 日建.slice(-1) as DATABASE.Dizhi_Key
const 日干 = 日建.slice(0, 1) as DATABASE.Tiangan_Key
const 驿马 = dizhi[日支].驿马
const 桃花 = dizhi[日支].桃花
const 日禄 = tiangan[日干].日禄
const 贵人 = tiangan[日干].贵人

// 辅助
// const 用神 = ref('')
const 元神 = ref('')
const 忌神 = ref('')
const 墓库 = ref('')
const 六冲 = ref('')
const 六合 = ref('')
const 三合 = ref('')
const 三刑 = ref('')

// 断卦
const 用神 = ref(query.用神 as string || '')
const 吉凶 = ref(query.吉凶 as string || '')
const 应期 = ref(query.应期 as string || '')
const 细节 = ref(query.细节 as string || '')
const 启示 = ref(query.启示 as string || '')

const onChange = (val: string) => {
  if (!val) return

  const 五行 = val.slice(-1) as DATABASE.Wuxing_Key
  const 地支 = val.slice(-2, -1) as DATABASE.Dizhi_Key

  用神.value = val
  元神.value = wuxing[五行].元神
  忌神.value = wuxing[五行].忌神
  墓库.value = wuxing[五行].生 + wuxing[五行].旺 + wuxing[五行].墓 + wuxing[五行].绝

  六冲.value = dizhi[地支].六冲
  六合.value = dizhi[地支].六合
  三合.value = dizhi[地支].三合
  三刑.value = dizhi[地支].三刑
}

// bus
useMitt(() => {
  postGuali(cn2en({
    占问,
    占类: '疾病',
    卦主: '父母',
    卦象,
    月建,
    日建,
    旬空,
    用神: 用神.value,
    吉凶: 吉凶.value,
    应期: 应期.value,
    细节: 细节.value,
    启示: 启示.value,
  })).then((res) => {
    console.log('🚀 ~ file: display.vue:98 ~ postGuali ~ res:', res)
  })
})
</script>

<template>
  <div class="Display" py-4 text-left>
    <header px-4>
      <p flex-center>
        <span whitespace-nowrap>占问：</span><VanField v-model="占问" class="!p-0" placeholder="请输入用户名" />
      </p>
      <p>
        时间：{{ moment(new Date()).format('YYYY年MM月DD日HH时mm分') }}
      </p>
      <p>
        干支：{{ 月建 }}月 {{ 日建 }}日
        <span ml-4>(旬空：{{ 旬空 }})</span>
      </p>
      <p>
        神煞：驿马-{{ 驿马 }}&nbsp;&nbsp;桃花-{{ 桃花 }}&nbsp;&nbsp;日禄-{{ 日禄 }}&nbsp;&nbsp;贵人-{{ 贵人 }}
      </p>
    </header>
    <section px-4 mt-4>
      <LiuyaoGua
        :gan="日干"
        :yongshen="用神"
        :guaxiang="主卦"
        @on-change="onChange"
      />
    </section>
    <VanCollapse v-model="activeName" accordion :border="false" mt-4>
      <VanCollapseItem title="日月" name="1" :border="false">
        <section flex-justify text-size-sm whitespace-nowrap>
          <div>
            <p>1.取用神</p>
            <p>2.断吉凶</p>
            <p>3.定应期</p>
            <p>4.看细节</p>
          </div>
          <div>
            <p>月建：{{ 月建 }}</p>
            <p>六冲：{{ dizhi[月支].六冲 }}</p>
            <p>六合：{{ dizhi[月支].六合 }}</p>
            <p>三刑：{{ dizhi[月支].三刑 }}</p>
          </div>
          <div>
            <p>日建：{{ 日建.slice(-1) }}</p>
            <p>六冲：{{ dizhi[日支].六冲 }}</p>
            <p>六合：{{ dizhi[日支].六合 }}</p>
            <p>三刑：{{ dizhi[日支].三刑 }}</p>
          </div>
        </section>
      </VanCollapseItem>
      <VanCollapseItem title="用神" name="2" :border="false">
        <section flex text-size-sm>
          <div flex-1>
            <p>用神：{{ 用神 }}</p>
            <p>元神：{{ 元神 }}</p>
            <p>忌神：{{ 忌神 }}</p>
            <p>六冲：{{ 六冲 }}</p>
          </div>
          <div flex-1>
            <p>三合：{{ 三合 }}</p>
            <p>三刑：{{ 三刑 }}</p>
            <p>墓库：{{ 墓库 }}</p>
            <p>六合：{{ 六合 }}</p>
          </div>
        </section>
      </VanCollapseItem>
      <VanCollapseItem title="批注" name="3" :border="false">
        <VanField
          v-model="吉凶"
          label="吉凶"
          rows="1"
          autosize
          type="textarea"
        />
        <VanField
          v-model="应期"
          label="应期"
          rows="1"
          autosize
          type="textarea"
        />
        <VanField
          v-model="细节"
          label="细节"
          rows="1"
          autosize
          type="textarea"
        />
        <VanField
          v-model="启示"
          label="启示"
          rows="1"
          autosize
          type="textarea"
        />
      </VanCollapseItem>
    </VanCollapse>
  </div>
</template>

<style lang="scss">
.Display {
  .van-field__body {
    font-size: 16px;
    font-weight: 900;
  }
  .van-cell__title {
    font-weight: 900;
  }
  .van-collapse {
    &-item__content {
      padding: 0 16px;
    }
    .van-field {
      padding: 0;
      &__label {
        width: 40px;
        margin: 0;
        font-weight: 400;
        color: #262626;
      }
      &__control {
        font-weight: 400;
        color: gray;
        font-size: 14px;
      }
    }
  }
}
</style>>
