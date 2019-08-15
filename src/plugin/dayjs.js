import Vue from 'vue'
import store from '../store'
const dayjs = require('dayjs')
const local = require('dayjs/locale/zh-cn')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.locale('zh-cn', local)
dayjs.extend(relativeTime)

Vue.prototype.$dayjs = dayjs
store.$dayjs = dayjs

export default dayjs
