<template>
  <div class="left-sidebar" :class="leftsiderswitch">
            <!-- 用户信息 -->
            <div class="tpl-sidebar-user-panel">
                <div class="tpl-user-panel-slide-toggleable">
                    <div class="tpl-user-panel-profile-picture">
                        <img alt="" src="/static/img/user04.png">
                    </div>
                    <span class="user-panel-logged-in-text">
                        <i class="am-icon-circle-o am-text-success tpl-user-panel-status-icon"></i>禁言小张
                    </span>
                    <a class="tpl-user-panel-action-link" href="javascript:;"> <span class="am-icon-pencil"></span> 账号设置</a>
                </div>
            </div>
            <!-- 菜单 -->
            <ul class="sidebar-nav">
                <li class="sidebar-nav-heading">Components <span class="sidebar-nav-heading-info"> 附加组件</span></li>
                <li class="sidebar-nav-link">
                    <router-link tag="a" class="active" to="/">
                        <i class="am-icon-table sidebar-nav-link-logo"></i> 图片上传
                    </router-link>
                </li>
                <li class="sidebar-nav-link">
                    <router-link tag="a" to="/displaypic">
                    <i class="am-icon-table sidebar-nav-link-logo"></i> 图片展示
                    </router-link>
                </li>
                <li class="sidebar-nav-link">
                    <router-link tag="a" to="/markdown">
                    <i class="am-icon-table sidebar-nav-link-logo"></i> 文章编写
                    </router-link>
                </li>
                <li class="sidebar-nav-heading">Page<span class="sidebar-nav-heading-info"> 常用页面</span></li>
                <li class="sidebar-nav-link">
                    <a class="sidebar-nav-sub-title" href="javascript:;">
                        <i class="am-icon-table sidebar-nav-link-logo"></i> 数据列表
                        <span class="am-icon-chevron-down am-fr am-margin-right-sm sidebar-nav-sub-ico"></span>
                    </a>
                    <ul class="sidebar-nav sidebar-nav-sub">
                        <li class="sidebar-nav-link">
                            <a href="table-list.html">
                                <span class="am-icon-angle-right sidebar-nav-link-logo"></span> 文字列表
                            </a>
                        </li>
                        <li class="sidebar-nav-link">
                            <a href="table-list-img.html">
                                <span class="am-icon-angle-right sidebar-nav-link-logo"></span> 图文列表
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="sidebar-nav-link">
                    <a href="sign-up.html">
                        <i class="am-icon-clone sidebar-nav-link-logo"></i> 注册
                        <span class="am-badge am-badge-secondary sidebar-nav-link-logo-ico am-round am-fr am-margin-right-sm">6</span>
                    </a>
                </li>
                <li class="sidebar-nav-link">
                    <a href="login.html">
                        <i class="am-icon-key sidebar-nav-link-logo"></i> 登录
                    </a>
                </li>
                <li class="sidebar-nav-link">
                    <a href="404.html">
                        <i class="am-icon-tv sidebar-nav-link-logo"></i> 404错误
                    </a>
                </li>
            </ul>
        </div>
</template>

<style scoped>
@import '../../../static/css/admin.css';
@import '../../../static/css/app.css';
@import '../../../static/css/amazeui.min.css';
</style>

<script>
export default {
  data: function () {
    return {
      leftsiderswitch: ''
    }
  },
  created () {
    this.$root.Bus.$on('hide', (msg) => {
      if (msg) {
        this.leftsiderswitch = 'active'
      } else {
        this.leftsiderswitch = ''
      }
    })
    // test
    console.log('当前页面组件通信是和页面其他是分离的，当然这种分离是一种伪分离，因为组件间通信时依赖于当前$root进行注册，最重要的是通信方式和页面紧紧的粘在一起')
    console.log('但实际上我通过两个vue实例都没曾找到，所监听的事件')
    console.log(this.$root.Bus.$listeners)
  }
}
</script>
