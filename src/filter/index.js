import Vue from 'vue'

Vue.filter('dateFilter', (date, format = 'relative') => {
    if (typeof date === 'number') date = date * 1000
    const dayjs = Vue.prototype.$dayjs
    date = dayjs(date)
    if (format === 'relative') {
        const now = dayjs()
        if (now.diff(date, 'day') > 2) {
            return date.format('YYYY-MM-DD HH:mm:ss')
        } else {
            return date.fromNow()
        }
    } else if (format) {
        return date.format(format)
    } else {
        return date.format
    }
})
