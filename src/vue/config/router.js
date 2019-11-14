const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            // component: index
            component: function (resolve) {
                require(['../pages/home/index.vue'], resolve)
            }
        },
        {
            path: '/admin',
            // component: index
            component: function (resolve) {
                require(['../pages/admin/index.vue'], resolve)
            }
        },
        {
            path: '/user',
            // component: index
            component: function (resolve) {
                require(['../pages/user/index.vue'], resolve)
            }
        },
        {
            path: '*',
            component: {
                template: '<div>not found</div>',
                created: function () {
                    console.log('not found')
                }
            }
        }
    ]
})

export default router
