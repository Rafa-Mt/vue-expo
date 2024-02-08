<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
    
    <Sidebar 
        :open="true"
    />
    <router-view :key="$route.fullPath" />


</template>

<style scoped>
  .content {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

</style>
