import '../sass/style.scss'

import router from './config/router'
import store from './store'
import App from './App.vue'

const vm = new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})

Vue.use({ vm })
