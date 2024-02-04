<script setup>
import Slide from '../components/Slide.vue';
import { toRefs, watch, ref, getCurrentInstance } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
    
    const props = defineProps({
        content: {
            type: String,
            required: true,
        },
    });

    const { content } = toRefs(props);
    const instance = getCurrentInstance();

    watch(content, () => {
        instance.proxy.$forceUpdate();
    });

    



</script>

<template>
  <main>
    <Slide 
      :poop=content
    />
  </main>
</template>

<style scoped>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
</style>