<script setup>
import TopBar from './components/topBar.vue'
</script>

<template>
  <TopBar />
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  border-radius: 50%;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.container{
  max-width:100%;
  padding:0;
}


@media (min-width: 1200px) {
  .container{
  max-width:100%
}
}
</style>

