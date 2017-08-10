import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

const HOST_SERVER = '//localhost:3000';

export default {
    getUser,
    getUsers,
    addUser,
    deleteUser,
    updateUser
}

function getUsers({pageIndex = 1, pageCount = 100, isbn}) {
    return Vue.http.get(`${HOST_SERVER}/user`, {
        params: {
            pageIndex,
            pageCount,
            isbn
        }
    });
}

function getUser(user) {
    return Vue.http.get(`${HOST_SERVER}/user/${user._id}`);
}

function addUser(user) {
    return Vue.http.post(`${HOST_SERVER}/user`, user);
}

function deleteUser(user) {
    return Vue.http.delete(`${HOST_SERVER}/user/${user._id}`);
}

function updateUser(user) {
    return Vue.http.put(`${HOST_SERVER}/user/${user._id}`, user);
}