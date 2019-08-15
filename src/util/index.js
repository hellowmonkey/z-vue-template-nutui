import config from '../config'
import store from '../store'

export const isEmpty = (data) => {
    return data === '' || data === null || data === undefined || (typeof data === 'number' && isNaN(data))
}

export const openWindow = (url, params = {}) => {
    const arr = []
    params = Object.assign({
        token: store.state.token
    }, params)
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const data = params[key]
            if (!isEmpty(data)) arr.push(`${key}=${data}`)
        }
    }
    const baseURL = config.baseURL.replace(/\/$/, '')
    url = url.replace(/^\//, '')
    return window.open(`${baseURL}/${url}?${arr.join('&')}`, '_blank')
}

export const getParams = (url = window.location.href) => {
    const arr = url.split('?')
    const query = arr[1]
    const paramsArr = query.split('&')
    const params = {}
    paramsArr.map(item => {
        const arrs = item.split('=')
        params[arrs[0]] = arrs[1]
    })
    return params
}
