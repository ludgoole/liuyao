<route lang="yaml">
meta:
  title: 首页
  roles: [ADMIN]
</route>

<script setup lang="ts">
import ShakeObserver from 'shake-observer'
import BaseGua from '@/components/BaseGua.vue'
import img_bei from '@/assets/image/bei.png'
import img_zheng from '@/assets/image/zheng.png'
import aud_coin from '@/assets/audio/coin.wav'

// data
const router = useRouter()
const audio = ref<HTMLAudioElement | null>(null)
const observer = ref<any>()
const isVibrating = ref(false)
const jinqian = ref([2, 2, 2])
const guaxiang = ref<number[]>([])

// computed
const statusText = computed(() => {
  if (isVibrating.value)
    return '摇卦中...'

  else if (guaxiang.value.length === 0)
    return '开始摇卦'

  else if (guaxiang.value.length === 6)
    return '开始排盘'

  else
    return '继续摇卦'
})

// methods
const reset = () => {
  jinqian.value = [2, 2, 2]
  guaxiang.value = []
}

const changeYao = () => {
  const getJinqian = () => {
    const jinqian = []
    for (let n = 0; n < 3; n++) {
      const yao = Math.floor(Math.random() * 10 % 2) === 0 ? 2 : 3
      jinqian.push(yao)
    }
    return jinqian
  }

  if (guaxiang.value.length === 6) {
    router.push({
      path: '/display',
      query: {
        卦象: guaxiang.value.join(''),
      },
    }).then(() => {
      reset()
    })
  }
  else {
    audio.value && audio.value.play()

    isVibrating.value = true

    setTimeout(() => {
      jinqian.value = getJinqian()
      guaxiang.value.push(jinqian.value.reduce((a, c) => a + c))
      isVibrating.value = false
    }, 1000)
  }
}

const devicemotionFn = () => {
  if (guaxiang.value.length <= 6) {
    changeYao()
    navigator.vibrate(1000)
  }
}

// mounted
onMounted(() => {
  observer.value = new ShakeObserver(devicemotionFn)
})

onUnmounted(() => {
  window.removeEventListener('devicemotion', devicemotionFn)
  try {
    // 取消监听
    observer.value.disconnect()
  }
  catch (e) {
    console.log('🚀 ~ file: index.vue:85 ~ onUnmounted ~ e:', e)
  }
})
</script>

<template>
  <div class="Home px-6 pt-8">
    <ul flex justify-between w-full>
      <li v-for="(qian, index) in jinqian" :key="index" w-20 h-20>
        <img
          :class="{ active: isVibrating }"
          :src="qian === 3 ? img_bei : img_zheng"
        />
      </li>
    </ul>
    <Suspense>
      <template #default>
        <BaseGua :is-najia="true" :size="40" mt-4 :guaxiang="guaxiang" />
      </template>

      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
    <p mt-4 border-dashed border-1 border-color-primary text-justify text-sm bg-base>
      请集中精力，默想所占之事；点击开始摇卦或者手机摇一摇，钱币开始旋转后，求得一爻，如此反复六次。
    </p>
    <div flex mt-8>
      <VanButton type="primary" size="large" :loading="isVibrating" :loading-text="statusText" @click="changeYao">
        {{ statusText }}
      </VanButton>
      <div v-if="guaxiang.length > 0" w-8>
        <!-- 占位符 -->
      </div>
      <VanButton v-if="guaxiang.length > 0" size="large" @click="reset">
        重新开始
      </VanButton>
    </div>
    <audio ref="audio" :src="aud_coin"></audio>
  </div>
</template>

<style scoped>
img.active {
  transform-style: preserve-3d;
  animation: rotate 0.3s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}
</style>
