// 引用模板
// import index from '../page/create/index.vue';
// import content from '../page/content.vue';

// const content = resolve => require(['../page/content.vue'], resolve);
// const content = () => System.import('../page/content.vue');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/',
            // component: index
            component: function (resolve) {
                require(['../pages/home/index.vue'], resolve);
            }
        },
        {
            path: '/admin',
            // component: index
            component: function (resolve) {
                require(['../pages/admin/index.vue'], resolve);
            }
        },
        {
            path: '/user',
            // component: index
            component: function (resolve) {
                require(['../pages/user/index.vue'], resolve);
            }
        },
        {
            path: '*',
            component: {
                template: '<div>not found</div>',
                created: function() {
                    console.log('not found')
                }
            }
        }
    ]
});