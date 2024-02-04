<script setup>
    import { RouterLink } from 'vue-router';
    defineProps(
        {
            path: String,
            name: String,
            color: String,
        }
    )
</script>

<template>

    <div class="grid-square" :style="{ backgroundColor: color }">
        <RouterLink :to="path">
            <h3 class="white-text">{{ name }}</h3>
        </RouterLink>
    </div>

</template>

<style scoped>
    .grid-square {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s;
        padding: 15px;
    }
    .grid-square:hover {
        transform: scale(1.1);
    }
    .white-text {
        color: white;
    }
</style>