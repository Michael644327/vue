<script setup>
import { ref } from 'vue'
import NoteList from '../components/NoteList.vue';
// import NoteField from '../components/NoteField.vue'
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <div class="noteList">
                    <NoteList />
                </div>
            </div>
            <div class="col-9">
                <div class="noteField">
                    <!-- <NoteField /> -->
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}


.noteList {
    background-color: #888;
    padding: 36px 0;
}
</style>
