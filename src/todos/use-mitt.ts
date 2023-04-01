import type { Emitter } from 'mitt'

export default function useMitt(onClickRight: () => void) {
  const emitter = inject('emitter') as Emitter<{ 'on-click-right': unknown }>

  // mounted
  onMounted(() => {
    emitter.on('on-click-right', onClickRight)
  })

  // destroyed
  onUnmounted(() => {
    emitter.off('on-click-right', onClickRight)
  })
}
