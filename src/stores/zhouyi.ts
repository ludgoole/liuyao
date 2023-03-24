import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useZhouyiStore = defineStore('zhouyi-store', () => {
  const zhouyi = ref<DATABASE.Zhouyi>()

  return {
    zhouyi,
  }
})
