import Vue from 'vue'
import Router from 'vue-router'
import DisplayPic from '@/components/displaypic/DisplayPic'
import UploadPic from '@/components/uploadpic/UploadPic.vue'
import Markdown from '@/components/markdown/Markdown.vue'
import Login from '@/components/login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      redirect: to => {
        // 方法接收 目标路由 作为参数
        // return 重定向的 字符串路径/路径对象
        console.log(to)
        return '/login'
      }
    },
    {
      path: '/displaypic',
      name: 'DisplayPic',
      component: DisplayPic
    },
    {
      path: '/uploadpic',
      name: 'uploadpic',
      component: UploadPic
    },
    {
      path: '/markdown',
      name: 'markdown',
      component: Markdown
    }
  ]
})
