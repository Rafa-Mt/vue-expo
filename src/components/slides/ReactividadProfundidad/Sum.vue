<script setup>
    import { ref, computed } from 'vue'

    const a = ref(1)
    const b = ref(2)
    const c = computed(() =>
        (Number(a.value) || 0) + (Number(b.value) || 0) 
    )
</script>

<template>
        
    A: <input type="number" v-model="a"> 
    + 
    B: <input type="number" v-model="b"> 
    <p> = {{ c }}</p> 

</template>