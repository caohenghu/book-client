import types from '../mutation-types';

const state = {
    list: [],
    showUserAdd: false,
    showUserEdit: false,
    info: {}
};

const mutations = {
    [types.USER_LIST](state, {list}) {
        state.list = list;
    },
    [types.SHOW_USER_EDIT](state, {showUserEdit}) {
        state.showUserEdit = showUserEdit;
    },
    [types.SHOW_USER_ADD](state, {showUserAdd}) {
        state.showUserAdd = showUserAdd;
    },
    [types.USER_INFO](state, {user}) {
        state.info = user;
    }
};

export default {
    state,
    mutations
}