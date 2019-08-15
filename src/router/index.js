import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

Vue.use(Router)

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: () => import('../views/index.vue'),
        name: 'index'
    }],
    fallback: true,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return {
            x: 0,
            y: 0
        }
    }
})

router.beforeEach(async (to, from, next) => {
    NProgress.done().start()
    for (let item in to.query) {
        const data = to.query[item]
        if (/^[\d]+$/.test(data)) {
            to.query[item] = Number(data)
        }
    }
    for (let item in to.params) {
        const data = to.params[item]
        if (/^[\d]+$/.test(data)) {
            to.params[item] = Number(data)
        }
    }
    next()
})

router.afterEach((to, from) => {
    NProgress.done()
})

export default router
