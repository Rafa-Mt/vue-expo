<script setup>
import { RouterLink } from 'vue-router';
import slides from '@/router/slides';

</script>

<template>
    <aside class="sidebar">
        <nav>
            <RouterLink v-for="slide in slides" :to="slide.path" >
                {{ slide.name }}
            </RouterLink>
        </nav>      
    </aside>
</template>

<style scoped>
.sidebar {
    background-color: #f0f0f0;
    padding: 1rem;
    width: 200px;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>