<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
	<button @click="show = !show">Click to Bounce!</button>
  <Transition name="bounce">
    <p v-if="show" style="margin-top: 20px; text-align: center;">
      Vue > React!
    </p>
  </Transition>
</template>

<style>
.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>