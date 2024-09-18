<!-- components/addNote.vue -->
<script setup>
import { ref, onMounted, computed, defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { noteStore } from '../stores/noteStore';
import { storeToRefs } from 'pinia';

const route = useRoute();
const router = useRouter();
const todoStore = noteStore()
const props = defineProps({
  id: Number, // 確保 id 被正確定義
});
const editItem = ref({
    title: '',
    content: '',
    pined: false
})

onMounted(async () => {
    // 在組件掛載時獲取特定的 todo
    const todoID = parseInt(route.params.id);
    const todo = todoStore.getTodoById(todoID);
    // console.log(todoID)
    // console.log(todo)

    if (todo) {
        editItem.value = { ...todo };
    } else {
        router.push('/note');
    }
});

const updateTodo = () => {
    if (editItem.value) {
        todoStore.updateTodo(parseInt(route.params.id), editItem.value);
        alert('資料已更新')
        router.push('/note');
    }
};
</script>

<template>

    <h2 class="my-3">修改待辦事項 - {{ props.id }}</h2>
    <div v-if="editItem">
        <form @submit.prevent="updateTodo">
            <div class="mb-3">
                <label for="todoTitle" class="form-label">標題</label>
                <input type="text" class="form-control" v-model="editItem.title">
            </div>
            <div class="mb-3">
                <label for="todoContent" class="form-label">內容</label>
                <textarea class="form-control" v-model="editItem.content"></textarea>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="todoPined" v-model="editItem.pined">
                <label class="form-check-label" for="todoPined">是否設為重要事項？</label>
            </div>
            <button type="submit" class="btn btn-primary">新增待辦事項</button>
        </form>
    </div>
    <div v-else>載入中...</div>
</template>

<style scoped></style>