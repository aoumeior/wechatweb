<template>
  <div>
    <div>
      <!-- 标题 -->
      <h1>{ {title} }</h1>
      <br/>
      <!-- 图片展示 -->
      <div>
        <ul data-am-widget="gallery" class="am-gallery am-avg-sm-2 am-gallery-imgbordered">
        <li>
          <div class="am-gallery-item">
            <img src="https://farm4.staticflickr.com/3835/15329524682_2642280b33_z.jpg"
            alt="远方 有一个地方 那里种有我们的梦想" data-rel="https://farm4.staticflickr.com/3835/15329524682_554d4c0886_k.jpg"/>
            <h3 class="am-gallery-title">远方 有一个地方 那里种有我们的梦想</h3>
            <div class="am-gallery-desc">2375-09-26</div>
          </div>
        </li>
        </ul>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
</script>

export default {
  name: 'DisPlay',
  data: function () {
    return {
      title: '所有图片'，
      //预定义图片默认展示格式
      pic: [{
        id: '',
        path:'',
        occur_time: 0,
        type: 'bg'
      }]
    }
  },
  methods: {
  }
}
<style>

</style>
