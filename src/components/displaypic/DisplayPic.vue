<template>
  <div>
    <div>
      <!-- 标题 -->
      <h1>{ {title} }</h1>
      <br/>
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
  }

}
<style>

</style>