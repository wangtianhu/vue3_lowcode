import router from "./index.js"
import LayOut from "../layout/index.vue"
import Nprogress from "nprogress"

Nprogress.configure({ showSpinner: false })

const filterRoutes = ["/login"] // 需要过滤的路由;

router.beforeEach((to, from, next) => {
    Nprogress.start()
    document.title = `动态路由(${to.meta.title})`
    // 判断路由指向是否在需要过滤的路由地址数组里
    // 如果在，则直接跳进页面，无需判断
    if (filterRoutes.includes(to.path)) return next()
    if (router.options.routes.length === 1) {
        // 获取token和原始路由数组
        const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) ?? ""
        // 当 token 和原始路由都存在的时候
        if (userInfo.token && userInfo.routes) onFilterRoutes(to, next, userInfo.routes)
        else next({ path: "/login", replace: true })
    } else next()
})

router.afterEach(() => {
    Nprogress.done()
})

const loadView = view => () => import(`@/views/${view}`)
const filterASyncRoutes = data => {
    data.forEach(item => {
        if (item["component"] === "Layout") {
            item.component = LayOut
        } else {
            item.component = loadView(item.component)
        }
        // 路由递归，转化组件对象和路径
        let child = item.children
        if (child?.length) {
            item.children = filterASyncRoutes(child)
        }
    })
    return [...data]
}
// 路由过滤和跳转
function onFilterRoutes(to, next, e) {
    const routes = filterASyncRoutes(e) // 路由过滤
    routes.sort((a, b) => a["id"] - b["id"])
    router.options.routes.push(...routes)
    router.addRoutes(routes)
    next({ ...to, replace: true })
}
