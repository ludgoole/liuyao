<route lang="yaml">
meta:
  title: 排盘
  leftArrow: true
  rightText: 保存
  keepAlive: true
</route>

<script lang="ts" setup>
import moment from 'moment'
import { Lunar } from 'lunar-javascript'
import { Toast } from 'vant'
import gualiDb from '@/indexdb/functions/guali'
import { useZhouyiStore } from '@/stores/zhouyi'
import useMitt from '@/todos/use-mitt'

type TS = keyof Omit<DATABASE.Tiangan_Item, '六神'>
type DS = Partial<keyof DATABASE.Dizhi_Item>

const { zhouyi } = useZhouyiStore()
const route = useRoute()
const router = useRouter()
const { query } = route
const lunar = Lunar.fromDate(new Date())
const { tiangan, dizhi, wuxing, yijing, yinyuan, bagua } = zhouyi as DATABASE.Zhouyi
const activeName = ref('')
const 卦位中文 = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻']
const 卦象中文 = {
  '111': '天',
  '110': '泽',
  '101': '火',
  '100': '雷',
  '011': '风',
  '010': '水',
  '001': '山',
  '000': '地',
} as { [key: string]: string }
const 天干神煞 = ['贵人', '禄神', '羊刃', '文昌'] as TS[]
const 地支神煞 = ['驿马', '桃花', '将星', '劫煞', '华盖', '谋星', '灾煞'] as DS[]

// 卜卦
const id = (query.id || Date.now().toString()) as string
const 卦象 = ref((query.卦象 || '678987') as string)
const 占问 = ref((query.占问 || '今日天气如何？') as string)
const 占类 = (query.占类 || '天气') as string
const 卦主 = (query.卦主 || '自己') as string
const 卦 = computed(() => yijing.find((v) => v.卦象.toString() === 卦象.value.split('').map((v) => Number(v) % 2).toString()) || yijing[0])

// 装卦
const 主卦 = ref(卦象.value.split('').map(Number))
// const 变卦 = 主卦.map((v) => v === 6 ? 9 : v === 9 ? 6 : v)
const 年建 = query.年建 || lunar.getYearZhi()
const 月建 = query.月建 || lunar.getMonthZhi()
const 日建 = (`甲${query.日建 || lunar.getDayInGanZhi()}`).slice(-2)
const 时建 = query.时建 || lunar.getTimeInGanZhi()
const 旬空 = query.旬空 || lunar.getDayXunKong()
const 月支 = 月建.slice(-1) as DATABASE.Dizhi_Key
const 日支 = 日建.slice(-1) as DATABASE.Dizhi_Key
const 日干 = 日建.slice(0, 1) as DATABASE.Tiangan_Key
const 月支_五行 = dizhi[月支].五行 as DATABASE.Wuxing_Key
const 日支_五行 = dizhi[日支].五行 as DATABASE.Wuxing_Key
const 驿马 = dizhi[日支].驿马
const 桃花 = dizhi[日支].桃花
const 禄神 = tiangan[日干].禄神
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
const 世爻 = ref('')
const 用神 = ref(query.用神 as string || '')
const 吉凶 = ref(query.吉凶 as string || '')
const 应期 = ref(query.应期 as string || '')
const 细节 = ref(query.细节 as string || '')
const 启示 = ref(query.启示 as string || '')
const 用神_六亲 = computed(() => 用神.value.slice(0, 2) as DATABASE.Wuxing_Key)
const 用神_地支 = computed(() => 用神.value.slice(-2, -1) as DATABASE.Dizhi_Key)
const 用神_五行 = computed(() => 用神.value.slice(-1) as DATABASE.Wuxing_Key)
const 世爻_地支 = computed(() => 世爻.value.slice(-2, -1) as DATABASE.Dizhi_Key)
const 世爻_五行 = computed(() => 世爻.value.slice(-1) as DATABASE.Wuxing_Key)

// 细节
const 卦位 = ref(0)
const 六神 = ref('')
const 因缘 = ref('')
const 神煞 = ref('')
const 上卦 = computed(() => 卦象.value.slice(3).split('').map((v) => Number(v) % 2).join(''))
const 下卦 = computed(() => 卦象.value.slice(0, 3).split('').map((v) => Number(v) % 2).join(''))
const 八卦 = computed(() => 卦位.value < 3 ? bagua[下卦.value] : bagua[上卦.value])
const 生克冲合 = (爻 = '日') => {
  let str = ''
  if (爻 === '月') {
    if (wuxing[用神_五行.value][月支_五行] === '父母')
      str += '月生'
    else if (wuxing[用神_五行.value][月支_五行] === '官鬼')
      str += '月克'

    if (dizhi[用神_地支.value].六冲 === 月支)
      str += '月破'
    else if (dizhi[用神_地支.value].六合 === 月支)
      str += '月合'

    if (dizhi[用神_地支.value].三刑 === 月支)
      str += '月刑'

    if (wuxing[用神_五行.value].生 === 月支)
      str += '月长生'
    else if (wuxing[用神_五行.value].旺 === 月支)
      str += '月帝旺'
    else if (wuxing[用神_五行.value].墓 === 月支)
      str += '月墓'
    else if (wuxing[用神_五行.value].绝 === 月支)
      str += '月绝'
  }
  else if (爻 === '日') {
    if (wuxing[用神_五行.value][日支_五行] === '父母')
      str += '日生'
    else if (wuxing[用神_五行.value][日支_五行] === '官鬼')
      str += '日克'

    if (dizhi[用神_地支.value].六冲 === 日支)
      str += '日散'
    else if (dizhi[用神_地支.value].六合 === 日支)
      str += '日合'

    if (dizhi[用神_地支.value].三刑 === 日支)
      str += '日刑'

    if (wuxing[用神_五行.value].生 === 日支)
      str += '日长生'
    else if (wuxing[用神_五行.value].旺 === 日支)
      str += '日帝旺'
    else if (wuxing[用神_五行.value].墓 === 日支)
      str += '日墓'
    else if (wuxing[用神_五行.value].绝 === 日支)
      str += '日绝'
  }
  else {
    if (wuxing[用神_五行.value][世爻_五行.value] === '子孙')
      str += '生世'
    else if (wuxing[用神_五行.value][世爻_五行.value] === '妻财')
      str += '克世'

    if (dizhi[用神_地支.value].六冲 === 世爻_地支.value)
      str += '冲世'
    else if (dizhi[用神_地支.value].六合 === 世爻_地支.value)
      str += '合世'

    if (dizhi[用神_地支.value].三刑 === 世爻_地支.value)
      str += '刑世'
  }

  return str || '--'
}

// method
const onChange = (动爻: string, index = 0) => {
  if (!动爻) return

  const 五行 = 动爻.slice(-1) as DATABASE.Wuxing_Key
  const 地支 = 动爻.slice(-2, -1) as DATABASE.Dizhi_Key
  const 神煞_天干 = 天干神煞.find((神煞) => tiangan[日干][神煞] === 地支) || ''
  const 神煞_地支 = 地支神煞.find((神煞) => dizhi[日支][神煞] === 地支) || ''

  用神.value = 动爻
  元神.value = wuxing[五行].元神
  忌神.value = wuxing[五行].忌神
  墓库.value = wuxing[五行].生 + wuxing[五行].旺 + wuxing[五行].墓 + wuxing[五行].绝

  六冲.value = dizhi[地支].六冲
  六合.value = dizhi[地支].六合
  三合.value = dizhi[地支].三合
  三刑.value = dizhi[地支].三刑

  卦位.value = index
  六神.value = tiangan[日干].六神[卦位.value]
  神煞.value = [神煞_天干, 神煞_地支].filter(Boolean).join('、') || '--'
  因缘.value = yinyuan[五行][日支]
}

const onReady = (_世爻: string, index = 0) => {
  世爻.value = _世爻
  onChange(世爻.value, index)
}

const onSave = () => {
  gualiDb.add({
    id,
    占问: 占问.value,
    占类,
    卦主,
    卦象: 卦象.value,
    年建,
    月建,
    日建,
    时建,
    旬空,
    用神: 用神.value,
    吉凶: 吉凶.value,
    应期: 应期.value,
    细节: 细节.value,
    启示: 启示.value,
  }).then(() => {
    Toast('保存成功')
  })
}

const toDeatil = (query: any) => {
  router.push({
    path: '/detail',
    query,
  })
}

const toDisplay = () => {
  主卦.value = 卦象.value.split('').map(Number)
}

// bus
useMitt(onSave)

// create
// onChange(用神.value)
</script>

<template>
  <div class="Display" py-4 text-left>
    <header px-4>
      <p flex-center>
        <span whitespace-nowrap>卦象：</span><VanField v-model="卦象" class="!p-0" @change="toDisplay" />
      </p>
      <p flex-center>
        <span whitespace-nowrap @click="onSave">占问：</span><VanField v-model="占问" class="!p-0" />
      </p>
      <p>
        时间：{{ moment(new Date()).format('YYYY年MM月DD日HH时mm分') }}
      </p>
      <p>
        <span @click="router.push('/thoery')">干支：</span>{{ 年建 }}年 {{ 月建 }}月 {{ 日建 }}日 {{ 时建 }}时
        <span ml-2>({{ 旬空 }})</span>
      </p>
      <p>
        神煞：驿马-{{ 驿马 }}&nbsp;&nbsp;桃花-{{ 桃花 }}&nbsp;&nbsp;禄神-{{ 禄神 }}&nbsp;&nbsp;贵人-{{ 贵人 }}
      </p>
    </header>
    <section px-4 mt-4>
      <LiuyaoGua
        :size="24"
        :gan="日干"
        :zhi="日支"
        :yongshen="用神"
        :guaxiang="主卦"
        @on-change="onChange"
        @on-ready="onReady"
      />
    </section>
    <VanCollapse v-model="activeName" accordion :border="false" mt-4>
      <VanCollapseItem title="卦象" name="卦象" :border="false">
        <section text-size-sm>
          <h3 color-gray-6>
            {{ 卦.卦辞 }}
          </h3>
          <ul w-full>
            <li v-for="item in 卦.爻辞" :key="item">
              <p>
                {{ item }}
              </p>
            </li>
          </ul>
        </section>
      </VanCollapseItem>
      <VanCollapseItem title="吉凶" name="吉凶" :border="false">
        <section flex-justify text-size-sm whitespace-nowrap pr-3>
          <div>
            <p>月建：{{ 月建 }}</p>
            <p>月合：{{ dizhi[月支].六合 }}</p>
            <p>月破：{{ dizhi[月支].六冲 }}</p>
            <p>月刑：{{ dizhi[月支].三刑 }}</p>
            <p>三合：{{ dizhi[月支].三合 }}</p>
          </div>
          <div>
            <p>日建：{{ 日建.slice(-1) }}</p>
            <p>日合：{{ dizhi[日支].六合 }}</p>
            <p>日散：{{ dizhi[日支].六冲 }}</p>
            <p>日刑：{{ dizhi[日支].三刑 }}</p>
            <p>三合：{{ dizhi[日支].三合 }}</p>
          </div>
          <div>
            <p>用神：{{ 用神 }}</p>
            <p>冲合：{{ 六合 }}{{ 六冲 }}</p>
            <p>三刑：{{ 三刑 }}</p>
            <p>三合：{{ 三合 }}</p>
            <p>因缘：{{ wuxing[用神_五行].生 + wuxing[用神_五行].旺 + wuxing[用神_五行].墓 + wuxing[用神_五行].绝 }}</p>
          </div>
        </section>
      </VanCollapseItem>
      <VanCollapseItem title="细节" name="细节" :border="false">
        <section flex-justify text-size-sm whitespace-nowrap pr-3>
          <div>
            <p>卦名：{{ 卦.卦名 }}</p>
            <p>卦象：{{ 卦象中文[上卦] + 卦象中文[下卦] }}</p>
            <p>八卦：{{ 八卦 }}</p>
            <p @click="toDeatil({ typeName: '爻位', key: `${卦位中文[卦位]}` })">
              爻位：{{ 卦位中文[卦位] }}
            </p>
          </div>
          <div>
            <p>阴阳：{{ 主卦[卦位] % 2 === 0 ? '阴爻' : '阳爻' }}</p>
            <p>动静：{{ 主卦[卦位] % 3 === 0 ? '动爻' : '静爻' }}</p>
            <p @click="toDeatil({ typeName: '神煞', key: `${神煞}` })">
              神煞：{{ 神煞 }}
            </p>
            <p @click="toDeatil({ typeName: '因缘', key: `${因缘}` })">
              因缘：{{ 因缘 }}
            </p>
          </div>
          <div>
            <p @click="toDeatil({ typeName: '地支', key: 用神_地支 })">
              地支：{{ 用神_地支 }}
            </p>
            <p @click="toDeatil({ typeName: '五行', key: 用神_五行 })">
              五行：{{ 用神_五行 }}
            </p>
            <p @click="toDeatil({ typeName: '六亲', key: 用神_六亲 })">
              六亲：{{ 用神_六亲 }}
            </p>
            <p @click="toDeatil({ typeName: '六神', key: `${六神}` })">
              六神：{{ 六神 }}
            </p>
          </div>
          <div>
            <p>日：{{ 生克冲合('日') }}</p>
            <p>月：{{ 生克冲合('月') }}</p>
            <p>空：{{ 旬空.includes(用神_地支) ? '旬空' : '--' }}</p>
            <p>世：{{ 生克冲合('世') }}</p>
          </div>
        </section>
      </VanCollapseItem>
      <VanCollapseItem title="批注" name="批注" :border="false">
        <VanField
          v-model="吉凶"
          label="吉凶"
          rows="1"
          autosize
          type="textarea"
        />
        <VanField
          v-model="应期"
          mt-2
          label="应期"
          rows="1"
          autosize
          type="textarea"
        />
        <VanField
          v-model="细节"
          mt-2
          label="细节"
          rows="1"
          autosize
          type="textarea"
        />
        <VanField
          v-model="启示"
          mt-2
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
    // font-weight: 900;
  }
  .van-cell__title {
    font-weight: 900;
  }
  .van-cell::after {
    border: none;
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
</style>
