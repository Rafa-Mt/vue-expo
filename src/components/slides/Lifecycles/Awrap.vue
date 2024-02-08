<template>
  <div> 
    <p>El botón ha sido presionado {{ count }} veces.</p>   
    <button id="count" @click="count++">{{ count }}</button>
  </div>
</template>
  
<script setup>
  import { ref, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onBeforeMount } from 'vue';
  
  // Variables reactivas
  const count = ref(0);
  
  // Hooks

  onBeforeMount(() => {
    console.log('Antes de montar el componente(onBeforeMount)');
  });

  onMounted(() => {
    console.log('El componente ha sido montado (onMounted)');
  });
  
  onBeforeUpdate(() => {
    console.log('Antes de actualizar el componente(onBeforeUpdate)');
  });
  
  onUpdated(() => {
    console.log('El componente ha sido actualizado(onUpdated)');
  });
  
  onBeforeUnmount(() => {
    console.log('Antes de desmontar el componente(onBeforeUnmount)');
  });
  
  onUnmounted(() => {
    console.log('El componente ha sido desmontado(onUnmounted)');
  });

</script>
  
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
  