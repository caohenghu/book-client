<template>
    <div class="content">
        <div class="wrapper-center">
            <ul>
                <hh-book v-for="book of books" :book="book" admin="admin"></hh-book>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "../../../sass/base/variable";

    .wrapper-center {
        padding-top: 30px;
    }

</style>

<script>
    import bookApi from '../../api/book'
    import hhBook from '../../components/book.vue'

    export default {
        components: {
            hhBook
        },
        computed: {
            books () {
                return this.$store.state.book.list;
            }
        }
    }
</script>