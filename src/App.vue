<template>
  <div>
    <leftsidebar></leftsidebar>
    <div id="app" class="tpl-content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
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
    displaypic: displaypic
  },
  created () {
    let LocalAPI = 'static/api/displaypic.json'
    Req.get(LocalAPI)
      .then((res) => {
        console.log(res)
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
