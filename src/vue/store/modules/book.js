import types from '../mutation-types';

const state = {
    list: [],
    showBookAdd: false,
    showBookEdit: false,
    info: {}
};

const mutations = {
    [types.BOOK_LIST](state, {list}) {
        state.list = list;
    },
    [types.SHOW_BOOK_EDIT](state, {showBookEdit}) {
        state.showBookEdit = showBookEdit;
    },
    [types.SHOW_BOOK_ADD](state, {showBookAdd}) {
        state.showBookAdd = showBookAdd;
    },
    [types.BOOK_INFO](state, {book}) {
        state.info = book;
    }
};

export default {
    state,
    mutations
}