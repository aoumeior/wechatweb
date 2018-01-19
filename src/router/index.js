import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DisplayPic from '@/components/displaypic/DisplayPic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/displaypic',
      name: 'DisplayPic',
      component: DisplayPic
    }
  ]
})
