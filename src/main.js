// 入口文件
import Vue from 'vue'

//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//1.3 导入自己的router.js路由模块
import router from './router.js'

import app from './App.vue'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件
import {
    Header
} from 'mint-ui'

Vue.component(Header.name, Header)

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    //1.4挂载路由对象到VM实例上
    router: router
})