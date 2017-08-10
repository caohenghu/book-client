<template>
    <div>
        <hh-header></hh-header>
        <hh-content></hh-content>
    </div>
</template>

<style scoped lang="scss">

</style>

<script>
    import hhHeader from './header.vue'
    import hhContent from './content.vue'

    export default {
        components: {
            hhHeader,
            hhContent
        }
    }
</script>