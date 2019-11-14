<template>
    <li class="book">
        <div class="cover" :style="{backgroundImage: 'url(' + book.cover + ')'}">
            <div class="mask"></div>
        </div>
        <div class="desc">
            <span>{{book.name}}</span>
            <span>{{book.author}}</span>
            <span v-if="admin !== 'admin'">{{book.publishing}}</span>
            <ul class="control" v-if="admin === 'admin'">
                <li><a class="btn border-grey-green">还书</a></li>
                <li><a class="btn border-grey-green" @click="editBook">编辑</a></li>
                <li><a class="btn border-grey-red" @click="deleteBook">删除</a></li>
            </ul>
        </div>
        <!--<div class="state">已借</div>-->
    </li>
</template>

<style scoped lang="scss">
li.book {
    position: relative;
    width: 220px;
    height: 260px;
    margin: 0 25px 25px 0;
    overflow: hidden;
    display: inline-block;
    /*box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.3);*/
    border-radius: 3px;
    .cover {
        width: 220px;
        height: 220px;
        background: no-repeat center/contain;
        .mask {
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0;
            transition: opacity 0.3s;
            border-radius: 3px;
        }
    }
    .desc {
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
        background: #fff;
        transition: transform 0.3s;
        span {
            width: 100%;
            padding: 0 6px;
            line-height: 40px;
            text-align: center;
            display: block;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            &:not(:first-child) {
                font-size: 12px;
                color: $font-light;
            }
            &:nth-child(2) {
                line-height: 20px;
            }
        }
        ul {
            text-align: center;
            li {
                display: inline-block;
                a {
                    width: 60px;
                }
            }
        }
    }
    .state {
        position: absolute;
        top: 16px;
        left: -46px;
        width: 150px;
        line-height: 24px;
        color: #fff;
        background: $orange-normal;
        transform: rotate(-45deg);
        text-align: center;
        font-size: 12px;
    }
    &:nth-child(5n) {
        margin-right: 0;
    }
    &:hover {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
        .desc {
            transform: translate3d(0, -60px, 0);
        }
        .mask {
            opacity: 0.3;
        }
    }
}
</style>

<script>
    import bookApi from '../api/book'

    export default {
        props: ['book', 'admin'],
        methods: {
            editBook() {
                this.$store.commit('SHOW_BOOK_EDIT', {showBookEdit: true})
                this.$store.commit('BOOK_INFO', {book: this.book})
            },
            deleteBook() {
                bookApi
                    .deleteBook(this.book)
                    .then(() => {
                        return bookApi.getBooks({})
                    })
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