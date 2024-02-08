<template>
    <p>Ingrese su mensaje</p>
    <input type="text" v-model="message">
    <p>Mensaje en reversa: {{ reversedMessage }}</p>
</template>
<script setup>
    import { ref, computed } from 'vue'
    
    const message = ref('Hola mundo!')

    const reversedMessage = computed(() => 
        message.value.split('').reverse().join('')
    )
</script>

<style>
    input {
        all: unset;
        border: 1px solid #000;
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
    }
</style>