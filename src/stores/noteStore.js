// stores/testStore.js

import { defineStore } from "pinia";
export const noteStore = defineStore("lists", {
    state: () => ({
        todos: [
            {
                id: 1,
                title: '完成練習',
                content: '完成練習題、補充作品集',
                pined: false
            },
            {
                id: 2,
                title: '整理房間',
                content: '物歸原位、拖地',
                pined: false
            },
            {
                id: 3,
                title: '買菜',
                content: '雞蛋、牛奶、青菜、水果',
                pined: true
            },
            {
                id: 4,
                title: '照顧小貓',
                content: '準備飼料、清理貓砂、陪小貓玩',
                pined: true
            },
        ],        
        idCounter: 4,
    }),
    getters: {
        finishedTodos(state) {
            return state.todos.filter(todo => todo.pined)
        },
        getTodoById: (state) => (id) =>{
            return state.todos.find(todo => todo.id === id);
        }
    },
    actions: {
        addTodo(title, content, pined) {
            if (!title) return
            this.idCounter++
            this.todos.push({
                id: this.idCounter,
                // title: title,
                // content: content,
                // pined: false
                title,
                content,
                pined
            })
        },
        updateTodo(id, updatedTodo){
            const index = this.todos.findIndex(todo=>todo.id === id);
            if (index !== -1){
                this.todos[index] = {...this.todos[index], ...updatedTodo};
            }
        },
        toggleTodo(id){
            const index = this.todos.findIndex((todo) =>todo.id === id)
            this.todos[index].pined = !this.todos[index].pined
        },
        deleteTodo(id){
            this.todos = this.todos.filter(todo => todo.id !== id)
        }

    }
})