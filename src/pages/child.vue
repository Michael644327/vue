
<template>
    <div>
      <p>Message: {{ parentMessage }}</p>
      <p>Parent Input: {{ parentInput }}</p>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  import { storeToRefs } from 'pinia'
  import { useCounterStore } from '../stores/counter'
  
  const store = useCounterStore()
  const { count, parentMessage, parentInput } = storeToRefs(store)
  const { increment } = store
  </script>