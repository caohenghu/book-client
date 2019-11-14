const HOST_SERVER = '//localhost:3000'

export default {
    getBook
}

function getBook(url) {
    return axios.get(`${HOST_SERVER}/jd/book/${url}`)
}
