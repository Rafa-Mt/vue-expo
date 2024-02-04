<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
    
    <Sidebar />
    <RouterView :key="$route.name" />


</template>

<style scoped>
  .content {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

</style>
