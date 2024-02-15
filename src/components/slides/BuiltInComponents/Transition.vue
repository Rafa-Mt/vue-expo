<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <button @click="show = !show">Click to Fade!</button>
  <Transition>
    <p v-if="show">Hello World!</p>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>