<script setup>
import Slide from '../components/Slide.vue';
import { ref } from 'vue';

const article = ref(`
# Hello people
## This is a test of the markdown parser

- This is a list
- This is a list
- This is a list

\`\`\`javascript
console.log('Hello World');
\`\`\`
`)

console.log(article.value);



</script>

<template>
  <main>
    <Slide 
      :poop=article
    />
  </main>
</template>

<style scoped>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
</style>
