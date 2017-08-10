<template>
    <div>
        <hh-header></hh-header>
        <hh-content></hh-content>
        <!--<hh-footer></hh-footer>-->
        <hh-book-add></hh-book-add>
        <hh-book-edit></hh-book-edit>
    </div>
</template>

<style scoped lang="scss">

</style>

<script>
    import hhHeader from './header.vue'
    import hhContent from './content.vue'
    import hhBookAdd from './bookAdd.vue'
    import hhBookEdit from './bookEdit.vue'
    import hhFooter from '../../components/footer.vue'

    export default {
        components: {
            hhHeader,
            hhContent,
            hhBookAdd,
            hhBookEdit,
            hhFooter
        }
    }
</script>