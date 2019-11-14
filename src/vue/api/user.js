const HOST_SERVER = '//localhost:3000'

export default {
    getUser,
    getUsers,
    addUser,
    deleteUser,
    updateUser
}

function getUsers({ pageIndex = 1, pageCount = 100, isbn }) {
    return axios.get(`${HOST_SERVER}/user`, {
        params: {
            pageIndex,
            pageCount,
            isbn
        }
    })
}

function getUser(user) {
    return axios.get(`${HOST_SERVER}/user/${user.id}`)
}

function addUser(user) {
    return axios.post(`${HOST_SERVER}/user`, user)
}

function deleteUser(user) {
    return axios.delete(`${HOST_SERVER}/user/${user.id}`)
}

function updateUser(user) {
    return axios.put(`${HOST_SERVER}/user/${user.id}`, user)
}
