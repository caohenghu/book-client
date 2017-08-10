import book from './modules/book';
import user from './modules/user';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        book,
        user
    }
});

export default store;