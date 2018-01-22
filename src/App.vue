<template>
  <div>
    <top></top>
    <leftsidebar></leftsidebar>
    <div id="app" class="tpl-content-wrapper" :class="leftsiderswitch">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import header from './components/header/Header.vue'
import uploadpic from './components/uploadpic/UploadPic.vue'
import displaypic from './components/displaypic/DisplayPic.vue'
import  leftsidebar from './components/leftsidebar/LeftSidebar.vue'
import Req from 'axios'
Vue.use(Req)

export default {
  name: 'App',
  components: {
  leftsidebar: leftsidebar,
  uploadpic: uploadpic,
  displaypic: displaypic,
  top: header
  },
  props: {
    leftsiderswitch: ''
  }
  ,
  created () {
    let LocalAPI = 'static/api/displaypic.json'
    Req.get(LocalAPI)
      .then((res) => {
        //console.log(res)
      })
    this.$root.Bus.$on('expand', (msg) => {
      if(msg){
        this.leftsiderswitch = 'active'
      }else{
        this.leftsiderswitch = '' 
      }
    })
  }
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
