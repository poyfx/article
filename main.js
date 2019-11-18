import Vue from 'vue'
import App from './App'
import 'common/css/base.css'

Vue.config.productionTip = false
import titles from './components/title.vue'
Vue.component('titles',titles)

import uniIcons from "./components/uni-icons/uni-icons.vue"
Vue.component('uniIcons',uniIcons)
import uniPopup from "./components/uni-popup/uni-popup.vue"
Vue.component('uniPopup',uniPopup)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
