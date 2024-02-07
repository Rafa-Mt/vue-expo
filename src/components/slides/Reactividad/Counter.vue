<script setup>
import { ref } from 'vue'

const count = ref(0)

</script>

<template>
  <button @click="count++">
    # de clicks: {{ count }}
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
    button:hover {
      background-color: #f6cece;
    }
</style>