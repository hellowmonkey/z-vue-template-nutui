import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {}
    },
    mutations: {
        setUser (state, data) {
            state.user = data
        }
    },
    actions: {

    },
    modules: {
        user
    }
})

export default store
