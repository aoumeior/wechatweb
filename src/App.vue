<template>
  <div id="app">
    <uploadpic></uploadpic>
  </div>
</template>
<script>
import Vue from 'vue'
import uploadpic from './components/uploadpic/UploadPic.vue'
import Req from 'axios'
Vue.use(Req)

export default {
  name: 'App',
  components: {
    uploadpic: uploadpic
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
