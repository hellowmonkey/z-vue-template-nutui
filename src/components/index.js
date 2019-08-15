import Vue from 'vue'
import { Dialog, Picker, Button, Toast } from '@nutui/nutui'
import store from '../store'

Dialog.install(Vue)
Picker.install(Vue)
Button.install(Vue)
Toast.install(Vue)

store.$dialog = Vue.prototype.$dialog
store.$toast = Vue.prototype.$toast
