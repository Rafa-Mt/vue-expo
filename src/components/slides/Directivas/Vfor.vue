<template>
  <ul>
    <li v-for="(item, index) in items" :key="item.message">
      {{ index }} - {{ item.message }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const items = ref([{ message: "Foo" }, { message: "Bar" }]);
</script>
