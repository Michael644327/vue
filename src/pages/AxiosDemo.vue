<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'

const posts = ref([])

onMounted(async () => {
    try {
        const postData = {
            title: '標題1',
            body: '內容1',
            userId: 1,
        }

        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        axios.post(apiUrl, postData)
            .then((response) => {
                console.log('請求成功:', response.data)
            })
            .catch((error) => {
                console.log('請求失敗:', error)
            })


        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts.value = response.data
        console.log(posts.value)

    } catch (error) {
        console.log('請求失敗:', error)
    }
})
</script>

<template>
    <h2>Axios Demo</h2>
    <ul>
        <li v-for="post in posts" :key="post.id">
            {{ post.id }} - {{ post.title }}<br />
            {{ post.body }}
        </li>
    </ul>


</template>

<script scoped></script>