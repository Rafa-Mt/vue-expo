<script setup>
import Slide from '../components/Slide.vue';
import { toRefs, watch, ref, getCurrentInstance } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import Reactividad from '../components/slides/Reactividad/Reactividad.mdx'
    
    const props = defineProps({
        content: {
            type: String,
            required: true,
        },
    });

    const { content } = toRefs(props);
    const instance = getCurrentInstance();

</script>

<template>
  <main>
    <!-- <Slide 
      :poop=content
    /> -->
    <div>
      <Reactividad/>

    </div>
  </main>
</template>

<style scoped>
  main {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* height: 100%; */
    width: 100%;
  }
</style>