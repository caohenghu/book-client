<template>
    <transition name="fade">
        <div class="dialog-add" v-show="show">
            <div class="mask"></div>
            <div class="dialog">
                <div class="header">
                    <span class="title">{{title}}</span>
                    <div class="search">
                        <input class="link text" type="text" placeholder="请输入京东商品链接，可获取信息" autofocus v-model="book.link">
                        <a class="drag btn green" @click="getJdBook">获取</a>
                    </div>
                </div>
                <div class="content">
                    <div class="form">
                        <ul>
                            <li>
                                <label>编号</label>
                                <input class="text" type="text" placeholder="请根据公司图书管理规范手动输入" v-model="book.number">
                            </li>
                            <li>
                                <label>书名</label>
                                <input class="text" type="text" v-model="book.name">
                            </li>
                            <li>
                                <label>作者</label>
                                <input class="text" type="text" v-model="book.author">
                            </li>
                            <li>
                                <label>出版社</label>
                                <input class="text" type="text" v-model="book.publishing">
                            </li>
                            <li>
                                <label>出版时间</label>
                                <input class="text" type="text" v-model="book.publishTime">
                            </li>
                            <li>
                                <label>ISBN</label>
                                <input class="text" type="text" v-model="book.isbn">
                            </li>
                            <li>
                                <label>链接</label>
                                <input class="text" type="text" v-model="book.link">
                            </li>
                            <li>
                                <label>库存</label>
                                <input class="text" type="text" v-model="book.count">
                            </li>
                        </ul>
                        <div class="cover" :style="{backgroundImage: 'url(' + book.cover + ')'}"></div>
                    </div>
                    <ul class="footer">
                        <li><a class="btn border-grey-green" @click="cancel">取消</a></li>
                        <li><a class="btn green" @click="ok">确定</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.dialog-add,
.mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.dialog-add {
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    .dialog {
        position: relative;
        min-width: 300px;
        background: #fff;
        border-radius: $border-radius;
        overflow: hidden;
        .header {
            height: 100px;
            line-height: 50px;
            padding: 0 40px;
            text-align: center;
            background: $bg-light-hover;
            .title {
                font-size: 18px;
            }
            .search {
                .link {
                    width: calc(100% - 100px);
                    vertical-align: top;
                    float: left;
                }
                .drag {
                    float: right;
                }
            }
        }
        .content {
            padding: 20px 40px;
            text-align: center;
            .form {
                ul {
                    display: inline-block;
                    li {
                        height: 30px;
                        line-height: 30px;
                        margin-bottom: 10px;
                        label {
                            width: 60px;
                            text-align: left;
                            color: $font-light;
                            float: left;
                        }
                        input {
                            width: 250px;
                            float: right;
                        }
                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }
                .cover {
                    width: 250px;
                    height: 250px;
                    margin-left: 10px;
                    border: 1px solid $border-grey;
                    border-radius: $border-radius;
                    background: no-repeat center/contain;
                    display: inline-block;
                }
            }
            .footer {
                margin-top: 20px;
                text-align: right;
                li {
                    display: inline-block;
                }
            }
        }
    }
}
</style>

<script>
    // import bookApi from '../api/book'
    import jdApi from '../api/jd'

    export default {
        props: ['title', 'ok', 'cancel', 'show'],
        computed: {
            book() {
                return this.$store.state.book.info
            }
        },
        methods: {
            getJdBook() {
                jdApi
                    .getBook(encodeURIComponent(this.book.link))
                    .then((res) => {
                        res.body.data.link = this.book.link
                        this.$store.commit('BOOK_INFO', {book: res.body.data})
                    })
                    .catch((err) => {
                        console.error(err)
                    })
            }
        }
    }
</script>