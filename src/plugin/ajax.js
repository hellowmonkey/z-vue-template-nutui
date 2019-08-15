import Vue from 'vue'
import flyio from 'flyio'
import config from '../config'
import { isEmpty } from '../util'
import store from '../store'
import router from '../router'

let id = 1

// request拦截器
flyio.interceptors.request.use((conf) => {
    conf.baseURL = config.baseURL
    conf.headers['Content-Type'] = conf.contentType || config.contentType
    conf.headers.token = store.state.token
    conf.timeout = 0
    let params = {}
    if (conf.body) {
        params = JSON.parse(JSON.stringify(conf.body))
    }
    for (let key in params) {
        const item = params[key]
        if (isEmpty(item)) delete params[key]
        if (typeof item === 'string') params[key] = item.trim()
        // 去除store的update参数
        if (key === 'update' && (item === true || item === false)) delete params[key]
    }
    conf.body = params
    return conf
})

// respone拦截器
flyio.interceptors.response.use((response) => {
    const {
        data
    } = response
    const code = Number(data.code)
    const err = {
        code
    }
    if (code !== 200) {
        err.message = data.message || `${code}`
        console.error(err)
        Vue.prototype.$toast.fail(`操作失败: ${err.message}`)
        if (code === config.errorLogin) {
            return router.replace({ name: 'login' })
        }
        return Promise.reject(err)
    }
    if (data.data && data.data.perPage) data.data.perPage = Number(data.data.perPage)
    return data
}, (error) => { // 这里是返回状态码不为200时候的错误处理
    let err = {}
    err.message = error.message || '未知错误'
    if (error.response) {
        err.status = error.response.status
        const messages = {
            400: '请求错误',
            401: '未授权，请登录',
            403: '拒绝访问',
            404: `请求地址出错 ${error.response.config.url}`,
            408: '请求超时',
            500: '服务器内部错误',
            501: '服务未实现',
            502: '网关错误',
            503: '服务不可用',
            504: '网关超时',
            505: 'HTTP版本不受支持'
        }
        if (messages[err.status]) {
            err.message = messages[err.status]
        }
    }
    Vue.prototype.$dialog({
        id: 'ajax-' + (++id),
        title: '请求失败',
        content: err.message,
        noOkBtn: true,
        cancelBtnTxt: '关闭'
    })
    return Promise.reject(error)
})

Vue.prototype.$ajax = flyio
store.$ajax = flyio

export default flyio
