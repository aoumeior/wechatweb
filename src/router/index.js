import Vue from 'vue'
import Router from 'vue-router'
import DisplayPic from '@/components/displaypic/DisplayPic'
import UploadPic from '@/components/uploadpic/UploadPic.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'uploadpic',
      component: UploadPic
    },
    {
      path: '/displaypic',
      name: 'DisplayPic',
      component: DisplayPic
    }
  ]
})
