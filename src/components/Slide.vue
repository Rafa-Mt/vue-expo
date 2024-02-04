<script setup>
    import { marked } from 'marked';
    import { toRefs } from 'vue';
    
    const props = defineProps({
        poop: {
            type: String,
            required: true,
        },
    });

    const { poop } = toRefs(props);

    const output = (article) => {
        return marked(article);
    };

    const article = output(poop.value);

</script>

<template>
    <article v-html="article"></article>

</template>

<style scoped>
    article {
        padding: 1rem;
        height: 100%;
        width: 700px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
}

</style>
