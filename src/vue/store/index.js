import book from './modules/book'
import user from './modules/user'

const store = new Vuex.Store({
    modules: {
        book,
        user
    }
})

export default store
