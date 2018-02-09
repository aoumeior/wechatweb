<template>
  <div id="UploadPic">
    <div class="am-container">
      <div class="am-u-sm-4  am-u-sm-centered">
        <form class="am-form ">
          <input class="am-form-field" type="text" placeholder="输入你的图片名..." v-model="filename">
        </form>
      </div>
      <div class="am-g am-margin-top">
        <div class="am-u-sm-2 am-u-sm-centered ">
          <div class="am-form-group am-form-file">
            <button type="button" class="am-btn am-btn-default am-btn-sm" >
              <i class="am-icon-cloud-upload"></i> 选择要上传文件</button>
            <input id="upload" type="file" @change="uploadpic($event)">
          </div>
        </div>
      </div>      
    </div>
    <hr/>
    <div v-if="disurl"><p>{{url}}</p></div>
  </div>
</template>
<style>
#UploadPic {
  text-align: center;
}
</style>
<script>
import Vue from 'vue'
import Req from 'axios'
import md5 from 'js-md5'
Vue.prototype.$http = Req
export default {
  name: 'UploadPic',
  data: function () {
    return {
      url: '',
      disurl: false,
      filename: ''
    }
  },
  created () {
    // const router = this.$router
    // console.log(router)
    // router.replace({path: '/login'})
  },
  methods: {
    uploadpic: function (e) {
      let fileobject = e.target.files[0]
      if(this.filename === '') {
        this.filename = md5(Date())
      }
      let url = 'ytcc/uploadimg'
      let formdata = new FormData()
      formdata.append('file', fileobject)
      formdata.append('title', this.filename)
      let self = this
      Req({
        method: 'post',
        url: url,
        data: formdata
      }).then(function (res) { self.url = res.data.msg })
    }
  },
  watch: {
    url: function () {
      this.disurl = true
    }
  }
}

</script>
