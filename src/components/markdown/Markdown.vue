<template>
    <div id="editor">
      <textarea :value="input" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
    </div>
</template>

<script>
import Vue from 'vue'
import _ from 'lodash';
import marked from 'marked';

import Req from 'axios'

Vue.use(Req)
export default{
  data: function () {
    return {
      input: '# hello'
    }
  },
  created () {
    let LocalAPI = '../../static/api/mk.json'
    Req.get(LocalAPI).then((mes) => {
      this.input = mes.data
    })
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
}
</script>

<style scoped>
textarea, #editor div {
  display: inline-block;
  width: 49%;
  height: 800px;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
  text-align: left;
  overflow-x:scroll;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>