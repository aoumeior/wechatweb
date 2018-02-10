<template>
	<div class="am-g">
	 	<div class="am-u-md-3">
	 		<div class="am-u-md-6">
	 			<ul>
	 				<li><a href="">公司展示</a></li>
	 				<li><a href="">公司增加</a></li>
	 				<li><a href="">公司修改</a></li>
	 			</ul>
	 		</div>
	 	</div>
	 	<div class="am-u-md-6">	 		
	 		<form class="am-form">
			  <fieldset>
			    <legend>公司修改</legend>

			    <div class="am-form-group">
			      <label for="doc-select-1">选择你的公司</label>
			      <select id="doc-select-1" v-model="checkedSelectName">
			        <option v-for="item in info.data" :value="item.id">{{item.company_name}}</option>
			      </select>
			      <span class="am-form-caret"></span>
			    </div>

			    <div class="am-form-group">
			      <label for="doc-ipt-con-1">公司名</label>
			      <input type="text" class="" id="doc-ipt-con-1" placeholder="输入公司名" :value="list.company_name">
			    </div>					
			    
			    <div class="am-form-group">
			      <label for="doc-ipt-email-1">邮件</label>
			      <input type="email" class="" id="doc-ipt-email-1" placeholder="输入电子邮件" :value="list.email">
			    </div>

			    <div class="am-form-group">
			      <label for="doc-ipt-tell-1">电话</label>
			      <input type="text" class="" id="doc-ipt-tell-1" placeholder="输入电话号码" :value="list.fax">
			    </div>

			    <div class="am-form-group">
			      <label for="doc-ipt-tell-1">地址</label>
			      <input type="text" class="" id="doc-ipt-tell-1" placeholder="输入地址" :value="list.addr">
			    </div>

			    <div class="am-form-group">
			      <label for="doc-ta-1">公司介绍</label>
			      <textarea class="" rows="5" id="doc-ta-1" :value="list.fax"></textarea>
			    </div>

			    <p><button type="submit" class="am-btn am-btn-default" v-on:click="companyfix">提交</button></p>
			  </fieldset>
			</form>
	 	</div>
	 	<div class="am-u-md-3"></div>
	</div>
</template>
<script>
import Vue from 'vue'
import Req from 'axios'

export default {
	data : function () {
		return {
			info: {},
			checkedSelectName: '',
			list: {}
		}
	},
	watch: {
		checkedSelectName: function (val) {
				console.log(1)
				 for(let item=0; item < this.info.data.length; item++){
				 		if(this.checkedSelectName == this.info.data[item].id){
				 			this.list = this.info.data[item]
				 		}
				 }
		}
	},
	created() {
		var self = this
		let url = 'ytcc/wepro/view/data?viewid=wepro_company'
		Req.get(url).then((res) => {
			self.info = res.data
		})
	},
	methods: {
		companyfix: function () {
		}
	}
}
</script>
<style>
	
</style>