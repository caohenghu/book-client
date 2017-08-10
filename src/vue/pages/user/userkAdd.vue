<template>
    <dialog-user-info :ok="ok" :cancel="cancel" :show="showUserAdd" title="添加图书"></dialog-user-info>
</template>

<style scoped lang="scss">

</style>

<script>
    import dialogUserInfo from '../../components/dialogUserInfo.vue'
    import userApi from '../../api/user'

    export default {
        components: {
            dialogUserInfo
        },
        computed: {
            showUserAdd() {
                return this.$store.state.user.showUserAdd;
            },
            user() {
                return this.$store.state.user.info;
            }
        },
        methods: {
            ok() {
                // 根据isbn查询是否已经添加过这本书
                userApi
                    .getUsers({isbn: this.user.isbn})
                    .then((res) => {
                        if (res.data.data.length) {
                            alert('已存在这本书，无须重复添加');
                            return Promise.reject();
                        } else {
                            return userApi.addUser(this.user);
                        }
                    })
                    .then(() =>  userApi.getUsers({}))
                    .then((res) => {
                        this.$store.commit('USER_LIST', {list: res.body.data});
                        this.hideUserEdit();
                    })
                    .catch((err) => {
                        if (err) {
                            console.error(err);
                        }
                    });
            },
            cancel() {
                this.hideUserEdit();
            },
            hideUserEdit() {
                this.$store.commit('SHOW_USER_ADD', {showUserAdd: false});
            }
        }
    }
</script>