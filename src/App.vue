<template>
  <div>
    <top></top>
      <!-- <leftsidebar></leftsidebar> -->
      <div id="app" class="tpl-content active">
        <router-view></router-view>
      </div>
  </div>
</template>
<script>
import Vue from 'vue'

import header from './components/header/header.vue'

import Req from 'axios'

// import processingTime from '../static/function/processingTime.js'

Vue.prototype.$ajax = Req

export default {
  name: 'App',
  components: {
    top: header
  },
  props: {
  },
  created () {
    // 初始化ivew全局通知属性
    this.$Notice.config({
      top: 100,
      duration: 3
    });

    // 用于获取图片数据
    let LocalAPI = 'static/api/displaypic.json'
    Req.get(LocalAPI)
      .then((res) => {
      })
    // 组件间通信
    // this.$root.Bus.$on('expand', (msg) => {
    //   if (msg) {
    //     this.leftsiderswitch = 'active'
    //   } else {
    //     this.leftsiderswitch = ''
    //   }
    // })

    // test
    // console.log('该页面有一个组件被注册到当前对象，this.$refs就仅仅会显示一个已注册的组件')
    // console.log(this.$refs)
  },
  // example :混入一些处理数据与页面框架无关的函数
  // mixins: [processingTime]
}

</script>
<style>
@import '../static/css/admin.css';
@import '../static/css/app.css';
@import '../static/css/amazeui.min.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
