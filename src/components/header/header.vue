<template>
  <div>
    <header>
      <!-- logo -->
      <div class="am-fl tpl-header-logo">
        <a href="javascript:;"><img alt="" src="/static/img/logo.png"></a>
      </div>
      <!-- 右侧内容 -->
      <div class="tpl-header-fluid">
        <!-- 侧边切换 -->
        <div class="am-fl tpl-header-switch-button am-icon-list active" @click="leftshow()">
          <span></span>
        </div>
        <!-- 搜索 -->

        <div class="am-fl tpl-header-navbar">
           <ul class="sidebar-nav">
                <li class="">
                    <router-link tag="a" class="active" to="/uploadpic">
                        <i class="am-icon-table sidebar-nav-link-logo"></i> 图片上传
                    </router-link>
                </li>
                <li class="">
                    <router-link tag="a" to="/displaypic">
                    <i class="am-icon-table sidebar-nav-link-logo"></i> 图片展示
                    </router-link>
                </li>
                <li class="">
                    <router-link tag="a" to="/markdown">
                    <i class="am-icon-table sidebar-nav-link-logo"></i> 文章编写
                    </router-link>
                </li>
                <li class="">
                  <router-link tag="a" to="#">
                  <i class="am-icon-table sidebar-nav-link-logo"></i> 文章列表
                  </router-link>
                </li>
            </ul>
<!--           <form class="tpl-header-search-form" action="javascript:;">
            <button class="tpl-header-search-btn am-icon-search"></button>
            <input class="tpl-header-search-box" type="text" placeholder="搜索内容...">
          </form> -->
        </div>
        <!-- 其它功能-->
        <div class="am-fr tpl-header-navbar">
          <ul>
            <!-- 欢迎语 -->
            <li class="am-text-sm tpl-header-navbar-welcome">
              <a href="javascript:;">欢迎你, <span>Amaze UI</span> </a>
            </li>
            <!-- 新邮件 -->
            <li class="am-dropdown tpl-dropdown" data-am-dropdown="">
              <a class="am-dropdown-toggle tpl-dropdown-toggle" href="javascript:;" data-am-dropdown-toggle="">
                <i class="am-icon-envelope"></i>
                <span class="am-badge am-badge-success am-round item-feed-badge">4</span>
              </a>
            <!-- 新提示 -->
            <li class="am-dropdown" data-am-dropdown="">
              <a class="am-dropdown-toggle" href="javascript:;" data-am-dropdown-toggle="">
                <i class="am-icon-bell"></i>
                <span class="am-badge am-badge-warning am-round item-feed-badge">5</span>
              </a>
              <!-- 弹出列表 -->
              <ul class="am-dropdown-content tpl-dropdown-content">
                <li class="tpl-dropdown-menu-notifications">
                  <a class="tpl-dropdown-menu-notifications-item am-cf" href="javascript:;">
                    <div class="tpl-dropdown-menu-notifications-title">
                      <i class="am-icon-line-chart"></i>
                      <span> 有6笔新的销售订单</span>
                    </div>
                    <div class="tpl-dropdown-menu-notifications-time">
                      12分钟前
                    </div>
                  </a>
                </li>
                <li class="tpl-dropdown-menu-notifications">
                  <a class="tpl-dropdown-menu-notifications-item am-cf" href="javascript:;">
                    <div class="tpl-dropdown-menu-notifications-title">
                      <i class="am-icon-star"></i>
                      <span> 有3个来自人事部的消息</span>
                    </div>
                    <div class="tpl-dropdown-menu-notifications-time">
                      30分钟前
                    </div>
                  </a>
                </li>
                <li class="tpl-dropdown-menu-notifications">
                  <a class="tpl-dropdown-menu-notifications-item am-cf" href="javascript:;">
                    <div class="tpl-dropdown-menu-notifications-title">
                      <i class="am-icon-folder-o"></i>
                      <span> 上午开会记录存档</span>
                    </div>
                    <div class="tpl-dropdown-menu-notifications-time">
                      1天前
                    </div>
                  </a>
                </li>
                <li class="tpl-dropdown-menu-notifications">
                  <a class="tpl-dropdown-menu-notifications-item am-cf" href="javascript:;">
                    <i class="am-icon-bell"></i> 进入列表…
                  </a>
                </li>
              </ul>
            </li>
            <!-- 退出 -->
            <li class="am-text-sm">
              <a href="javascript:;">
                <span class="am-icon-sign-out"></span> 退出
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <div class="tpl-skiner" @click ="display()" :class="skinsshow">
      <div class="tpl-skiner-toggle am-icon-cog">
      </div>
      <div class="tpl-skiner-content">
        <div class="tpl-skiner-content-title">
        选择主题
        </div>
        <div class="tpl-skiner-content-bar">
          <span @click="stylechange(1)" class="skiner-color skiner-white" data-color="theme-white"></span>
          <span @click="stylechange(2)" class="skiner-color skiner-black" data-color="theme-black"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data: function () {
    return {
      leftsiderswitch: false,
      skinswitch: false,
      skinsshow: ''
    }
  },
  methods: {
    leftshow: function () {
      this.$root.Bus.$emit('hide', this.leftsiderswitch)
      this.$root.Bus.$emit('expand', this.leftsiderswitch)
      this.leftsiderswitch = !this.leftsiderswitch
    },
    // 改变样式
    stylechange: function () {
    },
    display: function () {
      if (this.skinswitch) {
        this.skinsshow = 'active'
      } else {
        this.skinsshow = ''
      }
      this.skinswitch = !this.skinswitch
    }
    // <div v-bind:id="rawId | formatId"></div>
    // 過濾器用于格式化，結合混合屬於高級抽象
  }
}
</script>
<style>

ul > li {
  float: left;

}

li > a {
  line-height: 55px;
}
</style>
