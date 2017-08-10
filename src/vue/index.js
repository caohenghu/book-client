import '../sass/style.scss';

import Vue from 'vue';
import VueResource from 'vue-resource'
// import VueRouter from 'vue-router';
import Vuex from 'vuex';
import router from './config/router';
import store from './store';

// const router = new VueRouter({
//     mode: 'history',
//     routes
// });
import App from './App.vue';

// const store = new Vuex.Store(storeObj);

// Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);


const vm = new Vue({
    router,
    store,
    data() {
        return {
            scene: null
        }
    },
    el: '#app',
    // template: '<App></App>'
    render: (h) => h(App)
});
