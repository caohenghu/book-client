<template>
    <dialog-user-info :ok="ok" :cancel="cancel" :show="showUserEdit" title="编辑图书"></dialog-user-info>
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
            showUserEdit() {
                return this.$store.state.user.showUserEdit
            },
            user() {
                return this.$store.state.user.info
            }
        },
        methods: {
            ok() {
                userApi.updateUser(this.user)
                    .then(() => {
                        return userApi.getUsers({})
                    })
                    .then((res) => {
                        this.$store.commit('USER_LIST', {list: res.body.data})
                        this.hideUserEdit()
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            cancel() {
                this.hideUserEdit()
            },
            hideUserEdit() {
                this.$store.commit('SHOW_USER_EDIT', {showUserEdit: false})
            }
        }
    }
</script>