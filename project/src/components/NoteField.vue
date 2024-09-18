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

    <div class="container py-5">
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="lc-block">
                    <h4 editable="inline" class="mb-5"><b>目前的待辦事項</b></h4>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4" v-for="item in todoStore.todos" :key="item.id">
                <div class="card mb todoCard" :class="{ 'pined': item.pined }">
                    <div class="card-body mb">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.content }}</p>
                        <router-link :to="{ name: 'editNote', params: { id: item.id } }"><button type="button"
                                class="btn btn-primary mb">編輯</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.mySwiper-RANDOMID .card {
    max-width: 21rem
}

.pined {
    background-color: rgb(167, 214, 237);
}

.pined h5 {
    color: red;
}


.todoCard {
    border: 2px dashed #20ebf2;
    margin-bottom: 24px;
}

.todoCard:hover {
    box-shadow: 0px 0px 5px #3dec08;
}
</style>