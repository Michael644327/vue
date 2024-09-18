<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../stores/counter'
import ChildComponent from './child.vue'

const store = useCounterStore()
const { count, parentInput, doubleCount } = storeToRefs(store)

const updateInput = (event) => {
    store.updateParentInput(event.target.value)
}
</script>

<template>
    <div>
        <input v-model="parentInput" type="text" @input="updateInput">
        <ChildComponent />
        <p>Count: {{ count }}</p>
        <p>Parent Input: {{ parentInput }}</p>
        <p>Double Count: {{ doubleCount }}</p>
    </div>
</template>

