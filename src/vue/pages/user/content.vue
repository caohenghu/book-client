<template>
    <div class="content">
        <div class="wrapper-center">
            <table v-show="users.length">
                <thead>
                <tr>
                    <th>编号</th>
                    <th>用户名</th>
                    <th>真实名</th>
                    <th>注册时间</th>
                    <th>部门</th>
                    <th>手机</th>
                    <th>类型</th>
                    <th class="opr">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users">
                    <td>{{user.number}}</td>
                    <td>{{user.username}}</td>
                    <td>{{user.realname}}</td>
                    <td>{{user.addTime}}</td>
                    <td>{{user.group}}</td>
                    <td>{{user.mobile}}</td>
                    <td>{{user.type}}</td>
                    <td class="opr">
                        <ul>
                            <li><a class="btn border-grey-green">编辑</a></li>
                            <li><a class="btn border-grey-red">删除</a></li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "../../../sass/base/variable";
    @import "../../../sass/mixin/border";

    .wrapper-center {
        padding-top: 30px;
        .table {
            .col {
                display: inline-block;
                margin-left: -5px;
                padding: 10px 6px;
                width: 160px;
                @include border();
            }
        }
        table {
            width: 100%;
            text-align: center;
            border-collapse: collapse;
            thead {
                tr {
                    background: $bg-light-hover;
                }
            }
            tbody {
                font-size: 12px;
                tr:hover {
                    background: $bg-light-normal;
                }
            }
            th,
            td {
                height: 40px;
                @include border();
                ul {
                    display: inline-block;
                    li {
                        display: inline-block;
                        a {
                            width: 60px;
                        }
                    }
                }
            }
            .opr {
                width: 160px;
            }
        }
    }

</style>

<script>
    import userApi from '../../api/user'

    export default {
        computed: {
            users () {
                return this.$store.state.user.list;
            }
        }
    }
</script>