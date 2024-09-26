<script setup>
import TopBar from './components/topBar.vue'
import Footer from './components/footer.vue';
</script>

<template>
  <div class="maincontainer">
  <TopBar />
  <router-view />
  <Footer />
</div>
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

.maincontainer{
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 讓頁面高度至少等於視窗高度 */
}


@media (min-width: 1200px) {
  .container{
  max-width:100%
}
}
</style>

