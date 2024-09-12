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

                <form role="search" method="get" id="searchform" action="/"
                    class="d-flex ms-auto justify-content-center">
                    <div class="input-group">
                        <input type="text" value="" name="s" id="s" class="form-control" placeholder="Search..."
                            aria-label="Search">
                        <span class="input-group-text" id="basic-addon2">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                version="1.1" class="text-dark" width="1rem" height="1rem" viewBox="0 0 24 24" style=""
                                lc-helper="svg-icon" fill="currentColor">
                                <path
                                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z">
                                </path>
                            </svg>
                        </span>
                    </div>

                </form>
            </div>
        </div>
    </nav>



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
    filter: drop-shadow(0 0 2em #fbff00);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}

.menu-item{
    margin:0 12px;
}
</style>