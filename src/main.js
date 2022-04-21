import Vue from "vue"
import App from "./App.vue"
import router from "./router/index.js"
import store from "./store/index.js"
import ElementUi from "element-ui"
import "@/assets/css/common.css"
import "element-ui/lib/theme-chalk/index.css"
import "./router/router-config.js" // 路由守卫，做动态路由的地方
Vue.config.productionTip = false
Vue.use(ElementUi)

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount("#app")
