<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
    
    <Sidebar 
        :open="true"
    />
    <RouterView :key="$route.name" />


</template>

<style scoped>
  .content {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

</style>
