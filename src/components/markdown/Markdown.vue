<template>
    <div class="indexContainer">
        <div class="editorContainer">
            <!-- submit -->
            <div class="sub">
                <form class="am-form am-form-horizontal">
                  <div class="am-form-group am-form-success am-form-icon am-form-feedback  am-g-collapse">
                    <div class="am-u-sm-10">
                      <input type="text" id="doc-ipt-3-a" class="am-form-field" v-model="title" placeholder="输入你的文章标题">
                      <span class="am-icon-warning"></span>
                    </div>
                    <button for="doc-ipt-3-a" class="am-u-sm-2 am-btn am-btn-default" @click="submitarticle">提交</button>                    
                  </div>
                </form>
            </div>
            <!-- markdown -->
            <markdown
            :mdValuesP="mdValue"
            :fullPageStatusP="false"
            :editStatusP="true"
            :previewStatusP="false"
            :navStatusP="true"
            :icoStatusP="true"
            @childevent="childEventHandler"
            ></markdown>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Req from 'axios'
import markdown from '@/components/base/markdown/markdown.vue'
Vue.use(Req)

export default {
  name: 'index',
  data: function () {
    return {
      title:'',
      mdValue: ''
    }
  },
  created () {
    console.log()
    var that = this
    if(that.$route.params.id === undefined) {
        let LocalAPI = '../../static/api/mk.json'

        Req.get(LocalAPI).then((mes) => {
          // this.$root
          // 获取所谓的根实例，根据我的分析，我这种情况无论怎么写最后都是要获取到根事例
          // 在组件内写this.$root 获取实例，下个判断就会false
          // console.log(this.$root === this)
          that.mdValue = mes.data
        })
    }else {
       let url = '/ytcc/wepro/view/data?viewid=wepro_article&id=' + that.$route.params.id 
        Req.get(url).then((mes) => {
          // this.$root
          // 获取所谓的根实例，根据我的分析，我这种情况无论怎么写最后都是要获取到根事例
          // 在组件内写this.$root 获取实例，下个判断就会false
          // console.log(this.$root === this)
          that.mdValue = mes.data.data[0].content
          that.title =  mes.data.data[0].title
        })
    }
  },
  components: {
    markdown
  },
  methods: {
    childEventHandler: function (res) {
      // res会传回一个data,包含属性mdValue和htmlValue，具体含义请自行翻译
      // this.msg = res
    },
    submitarticle: function() {
      let url = "/ytcc/app/bus?busid=article.add"
      let redata = {
        "title": this.title,
        "content":  this.mdValue,
        "picid": "3",
        "company_id": "dff"
      }
      Req.post(url,redata).then(function (msg){
        console.log(msg)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

    .indexContainer {
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        text-align: left;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .btnsContainer{
        position: absolute;
        z-index: 10;
        left: 65px;
        top: 5px;
        height: 25px;
        min-width: 300px;
        // background: pink;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .btn{
            display: inline-block;
            border:1px solid #ccc;
            margin-right: 10px;
            box-sizing: border-box;
            padding: 0 10px;
            background: #fff;
            font-size: 12px;
            height: 25px;
            line-height: 25px;
            cursor:pointer;
            moz-user-select: -moz-none;
            -moz-user-select: none;
            -o-user-select:none;
            -khtml-user-select:none; /* you could also put this in a class */
            -webkit-user-select:none;/* and add the CSS class here instead */
            -ms-user-select:none;
            user-select:none;/**禁止选中文字*/
            &:active{
                opacity: 0.8;
                background: lightblue;
            }
        }
    }
    .maskContainer{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        width: 100vw;
        background: rgba(0,0,0,0.5);
        // z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        .contentContainer{
            width: 60%;
            height: 60%;
            background: #fefefe;
            padding: 20px;
            box-sizing: border-box;
            position: relative;
            .showAreaContainer{
                height: 100%;
                width: 100%;
                outline: none;
                background: #eee;
                display: block;
                resize: none;
                padding: 10px;
                box-sizing: border-box;
            }
            .closeBtnContainer{
                position: absolute;
                height: 30px;
                width: 30px;
                right: -40px;
                top: -40px;
                border:1px solid #fff;
                border-radius: 50%;
                &::before{
                    content: '';
                    position: absolute;
                    width: 70%;
                    height: 2px;
                    display: bblock;
                    background: #fff;
                    left: 15%;
                    top: calc(50% - 1px);
                    transform: rotate(45deg);
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                }
                &::after{
                    content: '';
                    position: absolute;
                    width: 70%;
                    height: 2px;
                    display: bblock;
                    background: #fff;
                    left: 15%;
                    top: calc(50% - 1px);
                    transform: rotate(-45deg);
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                }
            }

        }

    }

    .editorContainer {
        width: 90%;
        height: 90%;
    }

    .sub {
        display: block;
        margin: 15px 0;
    }
</style>
