<script setup>
import { ref } from 'vue'

const mensaje = ref("Hola")

</script>

<template>
  <p>{{ mensaje }}</p>
  <button @click="mensaje += '!'">
    Dale mas emocion al mensaje
  </button>
</template>

<style scoped>
    button {
        all: unset;
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        background-color: #e2e2e2;
        border: 1px solid var(--color-border);
        cursor: pointer;
        transition: all .2s ease;
    }
    p {
      margin: 5px;
    }
    button:hover {
      background-color: #f6cece;
    }
</style>