<script setup>
    import {store} from './store.js'
</script>

<template>
    <div class="component">
        <p>Desde A: {{ store.count }}</p>
        <button @click="store.count++">Aumenta la cuenta</button>
    </div>
</template>

<style scoped>
    .component {
        padding: 10px;
        border: 1px solid var(--color-border);
    }
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
    p {
      margin: 5px;
    }
    button:hover {
      background-color: #f6cece;
    }
</style>