<template>
  <div v-if="toggle">
    <p>Aprendamos Vue!</p>
  </div>
  <div v-else>
    <p>No gracias...</p>
  </div>

  <button @click="toggle = !toggle">Cambio</button>
</template>

<script setup>
import { ref } from "vue";

const toggle = ref(true);
</script>

<style scoped>
button {
  background: transparent;
  color: var(--color-text);
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.2s ease;
  height: 30px;
  width: 90px;
}

button:hover {
  background-color: #c6fbd9;
}
</style>
