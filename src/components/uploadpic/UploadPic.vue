<template>
  <div id="UploadPic">
    <div class="am-form-group am-form-file">
      <button type="button" class="am-btn am-btn-default am-btn-sm">
        <i class="am-icon-cloud-upload"></i> 选择要上传的文件</button>
      <input id="upload" type="file" @change="uploadpic($event)">
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
Vue.use(Req)

export default {
  name: 'UploadPic',
  data: function () {
    return {
      url: '',
      disurl: false
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
      let url = 'https://www.unitools.site/ytcc/uploadimg'
      let formdata = new FormData()
      formdata.append('file', fileobject)
      let self = this
      Req({
        method: 'post',
        url: url,
        data: formdata
      }).then(function (res) { self.url = res.data })
    }
  },
  watch: {
    url: function () {
      this.disurl = true
    }
  }
}

</script>
