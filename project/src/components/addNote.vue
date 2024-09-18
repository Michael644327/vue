<!-- components/addNote.vue -->
<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { noteStore } from '../stores/noteStore'
import { storeToRefs } from 'pinia';

const route = useRoute();
const router = useRouter();
const todoStore = noteStore()
const { addTodo } = todoStore
const newItem = ref({
    title: '',
    content: '',
    pined: false
})

const enterAddTodo = (e) => {
    e.preventDefault()
    addTodo(newItem.value.title, newItem.value.content, newItem.value.pined)
    newItem.value = {
        title: '',
        content: '',
        pined: false
    }
    alert('資料已新增')
        router.push('/note');

}
</script>

<template>

    <h2 class="my-3">新增待辦事項</h2>
    <form @submit.prevent="enterAddTodo">
        <div class="mb-3">
            <label for="todoTitle" class="form-label">標題</label>
            <input type="text" class="form-control" id="todoTitle" v-model="newItem.title">
        </div>
        <div class="mb-3">
            <label for="todoContent" class="form-label">內容</label>
            <textarea class="form-control" id="todoContent" v-model="newItem.content"></textarea>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="todoPined" v-model="newItem.pined">
            <label class="form-check-label" for="todoPined">是否設為重要事項？</label>
        </div>
        <button type="submit" class="btn btn-primary">新增待辦事項</button>
    </form>

</template>

<style scoped></style>