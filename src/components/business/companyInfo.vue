<template>
	<div class="am-g am-margin-top">
	 	<div class="am-u-md-6 am-u-sm-centered">	 		
	 		<form class="am-form">
			  <fieldset>
			    <legend>公司修改</legend>

			    <div class="am-form-group am-form-inline">
						<div class="am-g">
							<!-- <label for="doc-select-1">选择你的公司</label> -->
						  <div class="am-u-sm-10">
					      <select id="doc-select-1" placeholder="选择你的公司" v-model="checkedSelectName">
					        <option  value="" selected = "selected" >请选择你的公司</option>
					        <option v-for="item in info.data" :value="item.id">{{item.company_name}}</option>
					      </select>						  	
						  </div>
						  <div class="am-u-sm-2">
						  	<button type="submit" class="am-btn am-btn-danger am-fr" v-on:click="modal6 = true">删除</button>
						  </div>
						</div>			      
			      <span class="am-form-caret"></span>
			    </div>

			    <div class="am-form-group">
			      <label for="doc-ipt-con-1">公司名</label>
			      <input type="text" class="" id="doc-ipt-con-1" placeholder="输入公司名" v-model="list.company_name">
			    </div>					
			    
			    <div class="am-form-group">
			      <label for="doc-ipt-email-1">邮件</label>
			      <input type="text" id="doc-ipt-email-1" placeholder="输入电子邮件" v-model="list.email">
			    </div>

			    <div class="am-form-group">
			      <label for="doc-ipt-tell-1">电话</label>
			      <input type="text" id="doc-ipt-tell-1" placeholder="输入电话号码" v-model="list.tel">
			    </div>

			    <div class="am-form-group">
			      <label for="doc-ipt-tell-1">地址</label>
			      <input type="text" id="doc-ipt-tell-1" placeholder="输入地址" v-model="list.addr">
			    </div>

			    <div class="am-form-group">
			      <label for="doc-ta-1">公司介绍</label>
			      <textarea rows="5" id="doc-ta-1" type="text" v-model="list.remark"></textarea>
			    </div>

			    <p><button type="submit" class="am-btn am-btn-default" v-on:click="companyfix">提交</button></p>
			  </fieldset>
			</form>
	 	</div>
		<Modal
			v-model="modal6"
			title="删除"
			:loading="loading"
			@on-ok="asyncOK">
			<p>删除操作不可撤销。</p>
		</Modal>
	</div>
</template>
<script>

import Vue from 'vue'
import Req from 'axios'

import Modal from 'iview'

export default {
	data : function () {
		return {
			info: {},
			checkedSelectName: '',
			list: {},
			// 
      modal6: false,
      loading: true
		}
	},
	watch: {
		checkedSelectName: function (val) {
				 for(let item in this.info.data){
				 		if(this.checkedSelectName === this.info.data[item].id){
				 			this.list = this.info.data[item]
				 		}
				 }
		}
	},
	created() {
		this.getCompanyinfoList()
	},
	methods: {
		companyfix: function () {
			let url = 'ytcc/app/bus?busid=company.update'
			Req.post(url, this.list).then((res) => {
				this.fixSuccess(true)
				this.getCompanyinfoList()
			})
		},
		getCompanyinfoList: function () {
			var self = this
			let url = 'ytcc/wepro/view/data?viewid=wepro_company'
			Req.get(url).then((res) => {
				self.info = res.data
			})
		},
		//
    asyncOK: function () {
    	let url = 'ytcc/app/bus?busid=company.del'
		  setTimeout(() => {
		    this.modal6 = false;
				Req.post(url,{ id : this.checkedSelectName})
					.then((res) => {
					if(res.data.status === 'true') this.deleSuccess(true)
					else { /* error */}
					this.getCompanyinfoList()
				})
		  }, 1000)
		},
	  deleSuccess (nodesc) {
	    this.$Notice.success({
        title: '删除成功',
        desc: nodesc ? '' : '删除成功'
	    });
    },
    fixSuccess (nodesc) {
	    this.$Notice.success({
        title: '成功',
        desc: nodesc ? '' : '成功'
	    });
    }
	},
	companents: {
		Modal
	}
}
</script>
<style>
	
</style>