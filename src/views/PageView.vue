<template>
    <main>
        <div class="content">
            <slot></slot>
        </div>
    </main>
</template>


<style scoped>
    main {
        margin: 50px 0;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .content {
        width: 600px;
        max-width: 100%;
    }

</style>