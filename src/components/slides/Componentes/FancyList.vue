<script setup>

import {ref} from 'vue';

const props = defineProps(['url']);

const items = ref([]);

const getItems = async (url) => {
    const rs = await fetch(url)
    const json = await rs.json();
    return json;
}

getItems(props.url)
.then((data) => items.value = data);

</script>

<template>
  <ul>
    <li v-if="!items.length">
      Loading...
    </li>
    <li v-for="item in items">
      <slot name="item" v-bind="item"/>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    list-style-type: none;
    padding: 5px;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    border-radius: 10px;
  }
  li {
    padding: 5px 20px;
    margin: 10px;
    background: #fff;
    border-radius: 10px;
  }
</style>