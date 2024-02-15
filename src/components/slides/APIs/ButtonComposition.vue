<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Click me: {{ count }}</button>
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
      background-color: #d5f6ce;
    }
</style>