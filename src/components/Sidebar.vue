<script setup>
import { RouterLink } from 'vue-router';
import slides from '@/router/slides';
import logo from '@/assets/logo.svg';


</script>

<template>
    <aside class="sidebar" >
        <div class="heading">
            <RouterLink to="/" class="img-link">
                <img :src="logo" alt="Vue logo" class="logo" />
            </RouterLink>
            <h1 class="sidebar-heading">Vue 3 Expo</h1>
        </div>
        <nav>
            <RouterLink  v-for="slide in slides" :to="slide.path">
                <span
                    class="sidebar-link"
                    :class="{ active: slide.path === $route.path }"
                >{{ slide.name }}</span>
                
            </RouterLink>
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
    height: calc(100vh - 20px);
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    position: sticky;

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