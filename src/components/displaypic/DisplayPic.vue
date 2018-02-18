<template>
    <div>
      <div class="title">
        <!-- 标题 -->
        <h1>{{title}}</h1>
        <!-- 图片总数 -->
        <h2>共有图片：{{ pic.total }} 张</h2>
        <br/>
        </div>
      <!-- 图片展示 -->
      <div>
        <ul data-am-widget="gallery" class="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-imgbordered">
          <li v-for="item in pic.data" :key="item.id">
            <div class="am-gallery-item">
              <img @click.stop="showmodal(item.path)" :src="item.path" alt="远方 有一个地方 那里种有我们的梦想" />
              <h3 class="am-gallery-title">远方 有一个地方 那里种有我们的梦想</h3>
              <div class="am-gallery-desc">{{item.occur_time}}</div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 图片展示结束 -->
    </div>
</template>
<script>
export default {
  name: 'DisPlay',
  data: function () {
    return {
      title: '所有图片'
    }
  },
  methods: {},
  props: {
    pic: {
      type: Object,
      default: function () {
        return {
          src:'',
          total: 2,
          data: [{
            id: '02cc8126d6a840829ce0bbd3d5c11607',
            path: 'http://www.yituocc.com/uploads/image/20170502/1493743997.jpg',
            occur_time: '2017-01-01',
            type: 'lb'
          },
          {
            id: '0bbb960302c84f488c64a9aa4f88e5f9',
            path: 'http://www.yituocc.com/uploads/image/20170502/1493743941.jpg',
            occur_time: '2017-01-01',
            type: 'lb'
          },
          {
            id: '0bbb960302c84f488c64a9aa4f88e5f9',
            path: 'http://www.yituocc.com/uploads/image/20170502/1493743941.jpg',
            occur_time: '2017-01-01',
            type: 'lb'
          },
          {
            id: '0bbb960302c84f488c64a9aa4f88e5f9',
            path: 'http://www.yituocc.com/uploads/image/20170502/1493743941.jpg',
            occur_time: '2017-01-01',
            type: 'lb'
          },
          {
            id: '0bbb960302c84f488c64a9aa4f88e5f9',
            path: 'http://www.yituocc.com/uploads/image/20170502/1493743941.jpg',
            occur_time: '2017-01-01',
            type: 'lb'
          },
          {
            id: '0bbb960302c84f488c64a9aa4f88e5f9',
            path: 'http://www.yituocc.com/uploads/image/20170502/1493743941.jpg',
            occur_time: '2017-01-01',
            type: 'lb'
          },
          {
            id: '0bbb960302c84f488c64a9aa4f88e5f9',
            path: 'http://www.yituocc.com/uploads/image/20170502/1493743941.jpg',
            occur_time: '2017-01-01',
            type: 'lb'
          },
          {
            id: '0bbb960302c84f488c64a9aa4f88e5f9',
            path: 'http://www.yituocc.com/uploads/image/20170502/1493743941.jpg',
            occur_time: '2017-01-01',
            type: 'lb'
          },
          {
            id: '0bbb960302c84f488c64a9aa4f88e5f9',
            path: 'http://www.yituocc.com/uploads/image/20170502/1493743941.jpg',
            occur_time: '2017-01-01',
            type: 'lb'
          }]
        }
      }
    }
  },
  methods: {
    showmodal(e) {
      var that = this
      that.src  = e
      that.$Modal.info({
        title: "",
        width: '90%',
        closable: true,
        render: (h) => {
          return h('div',[
              h('img', {
                  domProps: {
                    align: 'center',
                    src: that.src
                  },
                  style: {
                    margin: "0 auto"
                  }
              })
          ]);
        }
      })
    }
  }
}

</script>
<style scoped>
.title {
  text-align: center;
}
</style>
