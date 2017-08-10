import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

const HOST_SERVER = '//localhost:3000';

export default {
    getBook
}

function getBook(url) {
    return Vue.http.get(`${HOST_SERVER}/jd/book/${url}`);
}
