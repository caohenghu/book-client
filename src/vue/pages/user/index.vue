<template>
    <div>
        <hh-header></hh-header>
        <hh-content></hh-content>
        <!--<hh-footer></hh-footer>-->
        <hh-user-add></hh-user-add>
        <hh-user-edit></hh-user-edit>
    </div>
</template>

<style scoped lang="scss">

</style>

<script>
    import hhHeader from './header.vue'
    import hhContent from './content.vue'
    import hhUserAdd from './userkAdd.vue'
    import hhUserEdit from './userEdit.vue'
    import hhFooter from '../../components/footer.vue'

    export default {
        components: {
            hhHeader,
            hhContent,
            hhUserAdd,
            hhUserEdit,
            hhFooter
        }
    }
</script>