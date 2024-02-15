<script setup>
  import { ref, onRenderTracked } from 'vue';

  const count = ref(0);


  onRenderTracked(event => {
    console.log('Dependencia de renderizado rastreada:', event);
    
  });
</script>
  
<template>
  <button v-on:click="count++ ">Haz clic en mí</button>
  <p>Has hecho clic {{ count }} veces</p>
</template>

<style scoped>
  button {
    border-radius: 8px;
    border: 1px solid var(--color-border);
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: var(--color-background-soft);
    cursor: pointer;
    transition: all 0.25s ease;
  }
  button:hover {
    background-color: #bbbffa;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>