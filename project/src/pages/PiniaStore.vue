<!-- 完成今日課堂的待辦清單
在每個待辦清單項目前新增checkbox
當使用者勾選或取消勾選時，變更被點選項目的isFinished的值

小研究
	搜尋computed、watch與watchEffect相關資料並研究 -->
<script setup>
import { ref } from 'vue';
import { noteStore } from '../stores/noteStore'
import { storeToRefs } from 'pinia';

const todoStore = noteStore()
const { finishedTodos } = storeToRefs(todoStore)
const { addTodo } = todoStore
const newItem = ref('')

const enterAddTodo = () => {
    addTodo(newItem.value)
    newItem.value = ''
}

</script>

<template>
    <h1>Pinia狀態管理</h1>
    <div class="container">
        <div class="row">
            <input type="text" class="inputbox" v-model="newItem">
            <button @click="enterAddTodo">新增待辦事項</button>
            <div class="col-6">
                <div>總清單</div>
                <ul class="list2">
                    <li class="item" v-for="item in todoStore.todos" :key="item.id"><input class="form-check-input"
                            type="checkbox" value="" v-model="item.isFinished" :id="item.id"> {{ item.id }}. {{
                        item.text }}
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <div>已完成清單</div>
                <ul class="list3">
                    <li class="item" v-for="finish_item in finishedTodos"> {{ finish_item.id }}. {{ finish_item.text }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.inputbox {
    width: 100%;
    background-color: white;
    color: darkgreen;
}

button {
    margin: 20px auto;
    background-color: cadetblue;
}
</style>