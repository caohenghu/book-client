<template>
    <div class="content">
        <div class="wrapper-center">
            <ul>
                <hh-book v-for="book of books" :key="book.id" :book="book" admin="admin"></hh-book>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
            books() {
                return this.$store.state.book.list
            }
        },
        mounted() {
            bookApi.getBooks({}).then((res) => {
                this.$store.commit('BOOK_LIST', {list: res.data.data})
            })
        }
    }
</script>