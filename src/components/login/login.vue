<template>
<div>
    <!-- login page -->
    <model class="login">
       <div slot="header">
        <span>登陆</span>
        <div style="float: right">
          <span class="am-btn am-btn-primary am-btn-sm" v-on:click="switchregister">注册</span>
        </div>
        <hr>
      </div>
      <div slot="body" class="login">
        <form class="am-form am-form-horizontal">
          <div class="am-form-group">
            <label for="doc-ipt-3" class="am-u-sm-2 am-form-label">名字</label>
            <div class="am-u-sm-10">
              <input type="text" id="doc-ipt-3" placeholder="输入你的名字" v-model="login.username">
            </div>
          </div>

          <div class="am-form-group">
            <label for="doc-ipt-pwd-2" class="am-u-sm-2 am-form-label">密码</label>
            <div class="am-u-sm-10">
              <input type="password" id="doc-ipt-pwd-2" placeholder="设置一个密码" v-model="login.password">
            </div>
          </div>

          <div class="am-form-group">
            <div class="am-u-sm-offset-2 am-u-sm-10">
              <div class="checkbox">
                <label>
                  <input type="checkbox"> 记住十万年
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div slot="footer">
        <div class="am-form-group">
          <div class="am-u-sm-10 am-u-sm-offset-2">
            <button type="submit" class="am-btn am-btn-default" v-on:click="submitlogin">提交登入</button>
          </div>
        </div>
      </div>
  </model>
  <!-- register page -->
  <model class="register">
     <div slot="header">
      <span class="am-btn am-btn-primary am-btn-sm" v-on:click="switchlogin" >登陆</span>
      <div style="float: right">
        <span>注册</span>
      </div>
      <hr>
    </div>
    <div slot="body" class="am-g">
      <div class="am-u-md-8 am-u-sm-centered">
        <form class="am-form">
          <fieldset class="am-form-set">
            <div class="am-input-group">
              <span class="am-input-group-label"><i class="am-icon-user am-icon-fw"></i></span>
              <input type="text" class="am-form-field" placeholder="Username" v-model="login.username">
            </div>

            <div class="am-input-group am-margin-top">
              <span class="am-input-group-label"><i class="am-icon-lock am-icon-fw"></i></span>
              <input type="password" class="am-form-field" placeholder="Password" v-model="login.password">
            </div>
          </fieldset>
          <button type="submit" class="am-btn am-btn-primary am-btn-block" v-on:click="submitreqister">注册个账号</button>
        </form>
      </div>
    </div>
    <div slot="footer"></div>
  </model>
</div>
</template>

<script>
import model from '@/components/base/modal/modal.vue'
import md5 from 'js-md5'
import Req from 'axios'
export default {
  data: function () {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    model
  },
  methods: {
    // modal switch
    switchregister: function (e) {
      let login = document.getElementsByClassName('login')
      login[0].style.cssText = 'display:none;'
      let register = document.getElementsByClassName('register')
      register[0].style.cssText = 'display: table;'
    },
    // modal switch
    switchlogin: function (e) {
      let login = document.getElementsByClassName('login')
      login[0].style.cssText = 'display:table;'
      let register = document.getElementsByClassName('register')
      register[0].style.cssText = 'display: none;'
    },
    // login requst
    submitlogin: function (e) {
      const API = '/ytcc/app/login'
      let pv = this.login
      pv.password = md5(pv.password)
      var self = this
      Req.post(API, pv)
        .then(function (response) {
          if (response.data.status === 'true') {
            self.$router.push({ name: 'uploadpic' })
            location.reload()
            return
          }
          alert('password or account error')
        })
    },
    submitreqister: function (e) {
      const API = '/ytcc/app/register'
      let pv = this.login
      pv.password = pv.password
      var self = this
      Req.post(API, pv)
        .then(function (response) {
          if (response.data.status === 'true') {
            self.$router.push({ name: 'login' })
            alert('register success')
            location.reload()
            return
          }
          alert('u are loser')
        })
    }
  }
}
</script>

<style scoped>
  .login {
    margin: 0 auto;
  }
  .register {
    display: none;
  }
</style>
