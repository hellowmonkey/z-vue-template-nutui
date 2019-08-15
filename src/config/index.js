const isDev = process.env.NODE_ENV === 'development'
const isTest = location.href.indexOf('test.') !== -1
const winWidth = window.innerWidth
const winHeight = window.innerHeight

export default {
    isDev,
    isTest,
    winWidth,
    winHeight,
    baseURL: (() => {
        if (isDev) return ''
        if (isTest) return ''
        return ''
    })(),
    errorLogin: 10000000,
    contentType: 'application/json;charset=UTF-8',
    isSmWidth: winWidth < 576
}
