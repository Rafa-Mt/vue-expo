<script setup>
import { ref } from 'vue'

const docState = ref('saved')
</script>

<template>
	<span style="margin-right: 20px">Click to Cycle!:</span>
  <div class="btn-container">
		<Transition mode = "out-in" name="slide-up">
      <button v-if="docState === 'saved'"
              @click="docState = 'edited'">Vue</button>
      <button v-else-if="docState === 'edited'"
              @click="docState = 'editing'">> React</button>
      <button v-else-if="docState === 'editing'"
              @click="docState = 'saved'">> Angular</button>
    </Transition>
  </div>
</template>

<style>
.btn-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

button {
  position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>