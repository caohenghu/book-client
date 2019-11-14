<template>
    <div class="content">
        <ul>
            <li class="book" v-for="book of books" :key="book.id">
                <div class="cover">
                    <div class="mask"></div>
                </div>
                <div class="desc">
                    <span>angular权威教程</span>
                    <span>张学友</span>
                    <span>工业出版社</span>
                </div>
                <div class="state">已借</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import bookApi from '../../api/book'

    export default {
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

<style scoped lang="scss">
.content {
    padding: 30px;
    width: 1200px;
    margin: auto;
    .book {
        position: relative;
        height: 240px;
        margin: 0 30px 30px 0;
        overflow: hidden;
        display: inline-block;
        box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        .cover {
            width: 200px;
            height: 200px;
            background: url(http://img14.360buyimg.com/n1/jfs/t4534/258/2934031608/126545/c46d8cb2/58f4ec72N22dd757a.jpg) no-repeat center/contain;
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
                width: 200px;
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
}
</style>