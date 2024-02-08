<script setup>
import { RouterLink } from 'vue-router';
import slides from '@/router/slides';
import logo from '@/assets/logo.svg';


</script>

<template>
    <aside class="sidebar" >
        <div class="heading">
            <router-link to="/" class="img-link">
                <img :src="logo" alt="Vue logo" class="logo" />
            </router-link>
            <h1 class="sidebar-heading">Vue 3 express</h1>
        </div>
        <nav>
            <router-link  v-for="slide in slides" :to="slide.path">
                <span
                    class="sidebar-link"
                    :class="{ active: slide.path === $route.path }"
                >{{ slide.name }}</span>
                
            </router-link>
        </nav>      
    </aside>
</template>

<style scoped>

.heading {
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
    margin-bottom: 20px;
}
.logo {
    width: 50px;
    height: 50px;
}
.sidebar-heading {
    font-size: 1.5rem;
}
aside {
    border-right: 1px solid var(--color-border);
    padding: 1.5rem;
    width: 300px;
    height: 100vh;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    position: -webkit-sticky;
    position: sticky;
    top: 0;

}

.sidebar-link {
    cursor: pointer;
    font-size: .9rem;
}
.active {
    font-weight: bold;
    color: var(--primary-color)
}

nav {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
</style>