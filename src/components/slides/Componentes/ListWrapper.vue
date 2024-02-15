<script setup>

import FancyList from "./FancyList.vue"

const url = 'https://jsonplaceholder.typicode.com/users?_limit=5'

</script>

<template>
    <FancyList :url="url">
        <template #item="{name, email, phone}">
            <div class="item">
                <p>{{ name }}</p>
                <p class="meta"> {{ email }} | {{ phone }} </p>
            </div>
        </template>
    </FancyList>
</template>

<style scoped>
    p {
        color: black;
    }
    .meta {
        font-size: 0.8em;
        color: #42b883;
    }
</style>