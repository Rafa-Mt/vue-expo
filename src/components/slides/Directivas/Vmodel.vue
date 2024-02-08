<template>
  <p>El mensaje es: {{ my_text }}</p>
  <input v-model="my_text" placeholder="Edit me" />
</template>

<script setup>
import { ref } from "vue";

const my_text = ref("");
</script>

<style scoped>
input {
  background: transparent;
  border: 1px solid gray;
  border-radius: 5px;
  height: 25px;
  margin-top: 10px;
}
</style>
