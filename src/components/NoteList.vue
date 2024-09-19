<script setup>
import { ref } from 'vue';
import { noteStore } from '../stores/noteStore'
import { storeToRefs } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const todoStore = noteStore()
const { finishedTodos } = storeToRefs(todoStore)
const { deleteTodo } = todoStore

</script>

<template>
    <RouterLink to="/note/add"><button class="mb-3">新增待辦事項</button></RouterLink>
    <h4>
        <font-awesome-icon :icon="['fas', 'ghost']" />
    </h4>
    <table>
        <tbody>
            <tr>
                <td class="listname">
                    <h4>待辦事項</h4>
                </td>
                <td><font-awesome-icon :icon="['fas', 'thumbtack']" /></td>
                <td></td>
            </tr>
            <tr v-for="item in todoStore.todos" :key="item.id" class="listitem">
                <td class="listname"><RouterLink :to="{ name: 'editNote', params: { id: item.id } }">{{
                    item.title }}</RouterLink></td>
                <td><input class="form-check-input" type="checkbox" value="" v-model="item.pined" :id="item.id">
                </td>
                <td><button @click="deleteTodo(item.id)"><font-awesome-icon :icon="['fas', 'trash-can']" /></button></td>
            </tr>
        </tbody>
    </table>
    <h4>
        <i class="fa-solid fa-heart"></i>
    </h4>
    <table>
        <tbody>
            <tr>
                <td class="listname">
                    <h4>重要事項</h4>
                </td>
                <td></td>
            </tr>
            <tr v-for="finish_item in finishedTodos" :key="finish_item.id" class="listitem">
                <td class="listname">{{ finish_item.title }}</td>
                <td><button><font-awesome-icon :icon="['fas', 'trash-can']" /></button></td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
td.listname {
    width: 300px;
    text-align: left;
    padding: 2px 0 2px 12px;
}

.listitem {
    border-top: 1px solid azure;
}
</style>