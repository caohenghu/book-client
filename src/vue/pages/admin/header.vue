<template>
    <div class="header">
        <div class="wrapper-center">
            <div class="nav">
                <ul>
                    <!--<li><a class="transition active" href="/admin">图书管理</a></li>-->
                    <!--<li><a class="transition" href="/user">会员管理</a></li>-->
                    <router-link class="transition active" to="admin" tag="li">图书管理</router-link>
                    <router-link class="transition" to="user" tag="li">会员管理</router-link>
                </ul>
            </div>
            <div class="condition">
                <ul>
                    <li>
                        <label for="name">书名</label>
                        <input class="text" id="name" type="text" placeholder="">
                    </li>
                    <li>
                        <label for="number">编号</label>
                        <input class="text" id="number" type="text" placeholder="">
                    </li>
                    <li>
                        <label for="barcode">条型码</label>
                        <input class="text" id="barcode" type="text" placeholder="">
                    </li>
                </ul>
                <a class="search btn border-white" @click="search">查询</a>
                <a class="add btn red" @click="showBookAdd">添加</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header {
    color: #fff;
    background: $bg-dark-hover;
    .wrapper-center {
        padding-bottom: 20px;
        .nav {
            height: 50px;
            ul {
                li {
                    width: 80px;
                    line-height: 50px;
                    text-align: center;
                    opacity: 0.7;
                    cursor: pointer;
                    display: inline-block;
                    &:hover,
                    &.active {
                        opacity: 1;
                    }
                }
            }
        }
        .condition {
            margin: 100px auto 0;
            ul {
                display: inline-block;
                li {
                    margin-right: 20px;
                    display: inline-block;
                    label {
                        margin-right: 5px;
                    }
                    input {
                        border: 1px solid #fff;
                        &:hover,
                        &:focus {
                            border: 1px solid $blue-hover;
                        }
                    }
                }
            }
        }
        .add {
            float: right;
        }
    }
}
</style>

<script>
    import bookApi from '../../api/book'

    export default {
        methods: {
            showBookAdd() {
                this.$store.commit('SHOW_BOOK_ADD', {showBookAdd: true})
                this.$store.commit('BOOK_INFO', {book: {}})
            },
            search() {
                bookApi
                    .getBooks({})
                    .then((res) => {
                        this.$store.commit('BOOK_LIST', {list: res.body.data})
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }
    }
</script>