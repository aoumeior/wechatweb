<template>
	<div class="am-g">
		<div class="am-u-md-12">
			<Breadcrumb class="am-margin-left">
		    <Breadcrumb-item href="/company/companyshow">公司展示</Breadcrumb-item>
		    <Breadcrumb-item href="/company/companyadd">公司增加</Breadcrumb-item>
		    <Breadcrumb-item  href="/company/changeinfo">公司修改</Breadcrumb-item>
		  </Breadcrumb>
		</div>
		<!-- content -->
	  <div class="am-u-md-12" >
	  	<keep-alive>
	  		 	<router-view></router-view>
	  	</keep-alive>
	  </div>
  </div>
</template>


<script>

import Vue from 'vue'

export default {


}
</script>

<style>
	
</style>