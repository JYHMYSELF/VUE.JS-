// 入口文件
import Vue from 'vue'

//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

//2.1导入 vue-resource
import VueResource from 'vue-resource'
//2.2 安装 vue-resource 
Vue.use(VueResource) //安装之后就可以全局使用了

//1.3 导入自己的router.js路由模块
import router from './router.js'

import app from './App.vue'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件
import {
    Header,
    Swipe,
    SwipeItem
} from 'mint-ui'

//把组件挂载到全局
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    //1.4挂载路由对象到VM实例上
    router: router
})