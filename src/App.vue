<template>
  <div id="app">
    <uploadpic></uploadpic>
  </div>
</template>
<script>
import uploadpic from './components/uploadpic/UploadPic.vue'
export default {
  name: 'App',
  components: {
    uploadpic: uploadpic
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
