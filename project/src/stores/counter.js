// stores/counter.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const parentMessage = ref('Hello from parent')
  const parentInput = ref('')

  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function updateParentInput(value) {
    parentInput.value = value
  }

  return { 
    count, 
    parentMessage, 
    parentInput, 
    doubleCount, 
    increment, 
    updateParentInput 
  }
})