import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//导入样式包
import './assets/css/index.css'
import './assets/css/iconfont.css'

//倒入elementui包
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入路由包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//倒入axios包
import axios from 'axios'
Vue.prototype.$axios = axios
//设置基地址
axios.defaults.baseURL = 'https://autumnfish.cn'

//导入路由组件
import slider from './components/silder.vue'
import results from './components/results.vue'
import player from './components/player.vue'
import mv from './components/mv.vue'
import comment from './components/comment.vue'

//注册路由规则
let routes = [
  { path:'/results/:songname',component:results},
  { path:'/player/:id',component:player},
  { path:'/slider',component:slider},
  { path:'/mv/:mvid',component:mv},
  { path:'/comment/:comID',component:comment}
]

//创建路由对象
 const router = new VueRouter({
  routes
})
//挂载到Vue实例里
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
