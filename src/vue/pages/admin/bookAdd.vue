<template>
    <dialog-book-info :ok="ok" :cancel="cancel" :show="showBookAdd" title="添加图书"></dialog-book-info>
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
            showBookAdd() {
                return this.$store.state.book.showBookAdd
            },
            book() {
                return this.$store.state.book.info
            }
        },
        methods: {
            ok() {
                // 根据isbn查询是否已经添加过这本书
                bookApi
                    .getBooks({isbn: this.book.isbn})
                    .then((res) => {
                        if (res.data.data.length) {
                            alert('已存在这本书，无须重复添加')
                            return Promise.reject()
                        } else {
                            return bookApi.addBook(this.book)
                        }
                    })
                    .then(() => bookApi.getBooks({}))
                    .then((res) => {
                        this.$store.commit('BOOK_LIST', {list: res.body.data})
                        this.hideBookEdit()
                    })
                    .catch((err) => {
                        if (err) {
                            console.error(err)
                        }
                    })
            },
            cancel() {
                this.hideBookEdit()
            },
            hideBookEdit() {
                this.$store.commit('SHOW_BOOK_ADD', {showBookAdd: false})
            }
        }
    }
</script>