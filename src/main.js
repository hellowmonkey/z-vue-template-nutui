import Vue from 'vue'
import App from './layout/App.vue'
import router from './router'
import store from './store'
import storage from './util/storage'
import config from './config'

import './components'
import './plugin/ajax'
import './plugin/dayjs'
import './filter'
import './mixin'

if (config.isDev || config.isTest) {
    const VConsole = require('vconsole')
    // eslint-disable-next-line no-new
    new VConsole()
}

Vue.config.productionTip = false

const vm = new Vue({
    router,
    store,
    render: h => h(App)
})

router.onReady(route => {
    const user = storage.get('user')
    if (user) {
        vm.$store.commit('setUser', user)
    } else if (!route || route.name !== 'login') {
        // router.replace({
        //     name: 'login',
        //     query: {
        //         redirect: route && route.fullPath
        //     }
        // })
    }
    vm.$mount('#app')
})
