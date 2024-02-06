<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<style scoped>
    .wrapper {
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background-color: var(--color-background-soft);
        padding: 20px;
        width: 100%;
        /* margin top and bottom */
        margin: 20px auto;
    }
</style>