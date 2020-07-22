import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import {getDeviceType} from "./utils/devices";

Vue.config.productionTip = false
Vue.use(ElementUI)

router.beforeEach((from, to, next) => {
    document.title = 'SalHe ♥ Letty | ' + getDeviceType();
    next();
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
