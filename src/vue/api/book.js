import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

const HOST_SERVER = '//localhost:3000';

export default {
    getBook,
    getBooks,
    addBook,
    deleteBook,
    updateBook
}

function getBooks({pageIndex = 1, pageCount = 100, isbn}) {
    return Vue.http.get(`${HOST_SERVER}/book`, {
        params: {
            pageIndex,
            pageCount,
            isbn
        }
    });
}

function getBook(book) {
    return Vue.http.get(`${HOST_SERVER}/book/${book._id}`);
}

function addBook(book) {
    return Vue.http.post(`${HOST_SERVER}/book`, book);
}

function deleteBook(book) {
    return Vue.http.delete(`${HOST_SERVER}/book/${book._id}`);
}

function updateBook(book) {
    return Vue.http.put(`${HOST_SERVER}/book/${book._id}`, book);
}