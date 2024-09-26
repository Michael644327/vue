<!-- components/Navbar.vue -->
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = computed(() =>
router.options.routes.filter(route => route.meta && route.meta.showInMenu),
// router.options.routes.filter(route => route.name !== 'Home'),
)
</script>

<template>
    <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark">
        <div class="container">
            <img src="/img/mmm.jpg" class="logo" alt="mmm logo" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar2"
                aria-controls="myNavbar2" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="lc-block collapse navbar-collapse" id="myNavbar2">
                <div lc-helper="shortcode" class="live-shortcode ms-auto">
                    <ul id="menu-menu-1" class="navbar-nav">
                        <li class="menu-item menu-item-type-custom"
                            v-for="route in routes">
                            <router-link :key="route.path" :to="route.path">
                                {{ route.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>



</template>

<style scoped>
.logo {
    /* height: 6em; */
    /* padding: 1.5em; */
    width:120px;
    will-change: filter;
    transition: filter 300ms;
    border-radius: 50%;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #fbff00);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}

/* .menu-item{
    margin:0 12px;
} */

.menu-item a{
    color:#FFF;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
}
</style>