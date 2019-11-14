<template>
    <dialog-book-info :ok="ok" :cancel="cancel" :show="showBookEdit" title="编辑图书"></dialog-book-info>
</template>

<style scoped lang="scss">
</style>

<script>
    import dialogBookInfo from '../../components/dialogBookInfo.vue'
    import bookApi from '../../api/book'

    export default {
        components: {
            dialogBookInfo
        },
        computed: {
            showBookEdit() {
                return this.$store.state.book.showBookEdit
            },
            book() {
                return this.$store.state.book.info
            }
        },
        methods: {
            ok() {
                bookApi.updateBook(this.book)
                    .then(() => {
                        return bookApi.getBooks({})
                    })
                    .then((res) => {
                        this.$store.commit('BOOK_LIST', {list: res.body.data})
                        this.hideBookEdit()
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            cancel() {
                this.hideBookEdit()
            },
            hideBookEdit() {
                this.$store.commit('SHOW_BOOK_EDIT', {showBookEdit: false})
            }
        }
    }
</script>