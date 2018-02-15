<template>
  <header class="am-topbar">
    <h1 class="am-topbar-brand">
      <a href="#">Foress</a>
    </h1>

    <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#doc-topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>

    <div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
      <ul class="am-nav am-nav-pills am-topbar-nav">
        <li><a href="#">首页</a></li>
        <li>
          <router-link tag="a" to="/company/changeinfo">
          项目
          </router-link>
          <a href="#"></a></li>
        <li class="am-dropdown" @click.stop="comlist =!comlist">
          <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
            function <span class="am-icon-caret-down"></span>
          </a>
          <ul class="am-dropdown-content" style="display: block;" v-if="comlist">
            <li class="am-dropdown-header">FUN-pic</li>
            <li>
                <router-link tag="a" to="/displaypic">
                图片展示
                </router-link>
            </li>
            <li>
                <router-link tag="a" to="/uploadpic">
                图片上传
                </router-link>
            </li>
            <li class="am-dropdown-header">FUN-arc</li>
            <li>
                <router-link tag="a" to="/markdown">
                文章编写
                </router-link>
            </li>
            <li>
                <router-link tag="a" to="/artlists">
                文章列表
                </router-link>
            </li>
            <!-- <li class="am-active"><a href="#">2. 去火星</a></li> -->
          </ul>
        </li>
      </ul>

      <form class="am-topbar-form am-topbar-left am-form-inline" role="search">
        <div class="am-form-group">
          <input type="text" class="am-form-field am-input-sm" placeholder="搜索">
        </div>
      </form>

      <div class="am-topbar-right">
        <div class="am-dropdown" data-am-dropdown="{boundary: '.am-topbar'}">
          <button class="am-btn am-btn-secondary am-topbar-btn am-btn-sm am-dropdown-toggle" data-am-dropdown-toggle @click.stop="otherlist=!otherlist">其他 <span class="am-icon-caret-down"></span></button>
          <ul class="am-dropdown-content" style="display: block;" v-if="otherlist">
            <li><a @click.stop="skiplogin">注册</a></li>
            <li><a>随便看看</a></li>
          </ul>
        </div>
      </div>

      <div class="am-topbar-right">
        <button class="am-btn am-btn-primary am-topbar-btn am-btn-sm" @click.stop="skiplogin">登录</button>
      </div>
    </div>
  </header>
</template>

<script>
import Req from 'axios'
export default{
  data: function () {
    return {
      comlist: false,
      otherlist: false
    }
  },
  methods: {
    logout: function (e) {
      const API = '/ytcc/app/logout'
      var self = this
      Req.get(API)
        .then(function (response) {
          if (response.data.status === 'true') {
            self.$router.push({ name: 'login' })
            location.reload()
            return
          }
          alert('password or account error')
      })
    },
    skiplogin: function (e) {
       this.$router.push({ name: 'login' })
    }
    // <div v-bind:id="rawId | formatId"></div>
    // 過濾器用于格式化，結合混合屬於高級抽象
  },
  created () {
    var that = this;
    document.addEventListener('click',function (e) {
       that.comlist = false,
       that.otherlist = false

    }, false)
  }
}
</script>
<style>

tpl-header-navbar ul > li {
  float: left;

}

tpl-header-navbar li > a {
  line-height: 55px;
}
</style>
