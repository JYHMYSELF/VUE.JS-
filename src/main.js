// 入口文件
import Vue from 'vue'
//配置vuex 1.下载包 npm i vuex -S 2.导入包 3.注册vuex到vue中 4.新建一个Vuex.Store()的实例，为了得到数据存储对象5.将store实例挂载到vm实例上。
import Vuex from 'vuex'
Vue.use(Vuex)
// parse(),把JSON字符串解析为原生的js值
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
    state: { //this.$store.state.xxx
        car: car
    },
    // mutation (形式或结构的)转变，改变
    mutations: { //this.$store.commit("方法名"，"唯一参数")
        addToCar(state, goodsinfo) {
            var flag = false;
            state.car.some(item => {
                if (item.id === goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count);
                    flag = true;
                    return true;
                }
            })
            if (!flag) {
                state.car.push(goodsinfo);
            }
            //stringify(),把js对象序列化为JSON字符串。
            localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    getters: { //this.$store.getters.xxx
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count;
            })
            return c;
        },
        getGoodsCount(state) {
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.count;
            })
            return o;
        }
    }
})

//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

//2.1导入 vue-resource
import VueResource from 'vue-resource'
//2.2 安装 vue-resource 
Vue.use(VueResource) //安装之后就可以全局使用了
Vue.http.options.emulateJSON = true;

import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

//1.3 导入自己的router.js路由模块
import router from './router.js'

import app from './App.vue'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件
// import {
//     Header,
//     Swipe,
//     SwipeItem,
//     Button,
//     Lazyload
// } from 'mint-ui'

// Vue.use(Lazyload)
// //把组件挂载到全局
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import MintUi from 'mint-ui'
Vue.use(MintUi)
import 'mint-ui/lib/style.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    //1.4挂载路由对象到VM实例上
    router: router,
    store: store
})