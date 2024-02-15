<script setup>

import { ref } from 'vue'

const count = ref("#".repeat(15));
function removeCharge() {
    if (count.value.length < 1) return;
    count.value = count.value.slice(1,count.value.length);
} 

</script>

<template>
    <div class="count">
        Charge: <strong>[{{ count }}]</strong>
    </div>
    <button class="remove" @click="removeCharge()"> Remove charge </button>
</template>

<style> 
    .remove {
        margin: 5px;
        background-color: #41B883;
        color: #f3f3f3;
        border-radius: 5px;
        width: 150px;
        height: 25px;
    }
</style>