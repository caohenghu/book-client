<template>
    <div class="header">
        <span class="title">图书管理系统</span>
        <ul class="category">
            <li>管理</li>
            <li>技术</li>
            <li>文学</li>
            <li>设计</li>
            <li>运营</li>
        </ul>
        <input type="text" class="search" placeholder="输入书名进行搜索" @keyup.enter="search">
    </div>
</template>

<style scoped lang="scss">
    @import "../../../sass/base/variable";

    .header {
        height: 400px;
        padding: 100px 0;
        color: #fff;
        background: $blue-normal;
        text-align: center;
        .title {
            font-size: 60px;
        }
        .category {
            font-size: 16px;
            li {
                display: inline-block;
                margin: 50px 20px 20px;
                opacity: .7;
                cursor: pointer;
                &:hover {
                    opacity: 1;
                }
            }
        }
        .search {
            width: 650px;
            height: 40px;
            padding: 0 6px;
            border-radius: 3px;
            color: $font-light;
            &::-webkit-input-placeholder {
                color: $font-lighter;
            }
        }
    }
</style>

<script>
    import bookApi from '../../api/book'

    export default {
        methods: {
            search() {
                bookApi
                    .getBook()
                    .then((res) => {
                        this.$store.commit('BOOK_LIST', {list: res.body.data});
                    })
                    .catch((err) => {
                        alert(err);
                    })
            }
        }
    }
</script>