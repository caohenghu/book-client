const HOST_SERVER = '//localhost:3000'

export default {
    getBook,
    getBooks,
    addBook,
    deleteBook,
    updateBook
}

function getBooks({ pageIndex = 1, pageCount = 100, isbn }) {
    return axios.get(`${HOST_SERVER}/book`, {
        params: {
            pageIndex,
            pageCount,
            isbn
        },
        withCredentials: true
    })
}

function getBook(book) {
    return axios.get(`${HOST_SERVER}/book/${book.id}`)
}

function addBook(book) {
    return axios.post(`${HOST_SERVER}/book`, book)
}

function deleteBook(book) {
    return axios.delete(`${HOST_SERVER}/book/${book.id}`)
}

function updateBook(book) {
    return axios.put(`${HOST_SERVER}/book/${book.id}`, book)
}
