// 1. 导入 Vue 和 VueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import left from '@/components/left.vue'
import right from '@/components/right.vue'
import about from '@/components/about.vue'

import tab1 from '@/components/tab/tab1.vue'
import tab2 from '@/components/tab/tab2.vue'
import main from '@/components/main.vue'
import login from '@/components/login.vue'
import Home from '@/components/Home.vue'

// 2. 调用 Vue.use() 函数，把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 3. 创建路由的实例对象
const router = new VueRouter({
  // routes 是一个数组，作用：定义 “ hash 地址 ” 与 “组件” 之间的对应关系
  routes: [
    // 重定向路由规则
    {
      path: '/',
      redirect: '/right',
    },
    {
      path: '/left',
      component: left,
    },
    {
      path: '/right',
      component: right,
    },
    {
      // about 页面的路由规则（父级路由规则）
      path: '/about',
      component: about,
      // redirect:'/about/tab1',
      children: [
        // 1. 通过 children 属性，嵌套生命子级路由规则
        // 子级路由规则中，path尽量不要‘/’
        { path: '', redirect: '/about/tab1' },
        { path: 'tab1', component: tab1 }, // 2. 访问 /about/tab1 时，展示 tab1 组件
        { path: 'tab2', component: tab2 },
      ],
    },
    {
      path: '/main',
      component: main,
    },
    {
      path: '/login',
      component: login,
    },
    {
      path: '/Home',
      component: Home,
    },
  ],
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // to 是将要访问的路由的信息对象
  // from 是将要离开的路由的信息对象
  // next 是一个函数，调用 next() 表示放行，允许这次路由导航
  if (to.path === '/main') {
    const token = localStorage.getItem('token')
    if (token) {
      next() // 访问的是后台主页，且有 token 的值，即有权限
    } else {
      next('login') // 访问的是后台页面，但是没有 token 的值，即没有权限，跳转到登陆页面
    }
  } else {
    next() // 访问的不是后台主页，直接放行
  }
})

// 4. 向外共享路由的实例对象
export default router
