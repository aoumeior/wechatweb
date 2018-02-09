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
			      <select id="doc-select-1">
			        <option value="option1">百度</option>
			        <option value="option2">腾讯</option>
			        <option value="option3">阿里巴巴</option>
			      </select>
			      <span class="am-form-caret"></span>
			    </div>

			    <div class="am-form-group">
			      <label for="doc-ipt-con-1">公司名</label>
			      <input type="text" class="" id="doc-ipt-con-1" placeholder="输入公司名">
			    </div>					
			    
			    <div class="am-form-group">
			      <label for="doc-ipt-email-1">邮件</label>
			      <input type="email" class="" id="doc-ipt-email-1" placeholder="输入电子邮件">
			    </div>

			    <div class="am-form-group">
			      <label for="doc-ipt-tell-1">电话</label>
			      <input type="text" class="" id="doc-ipt-tell-1" placeholder="输入电话号码">
			    </div>

			    <div class="am-form-group">
			      <label for="doc-ta-1">公司介绍</label>
			      <textarea class="" rows="5" id="doc-ta-1"></textarea>
			    </div>

			    <p><button type="submit" class="am-btn am-btn-default">提交</button></p>
			  </fieldset>
			</form>
	 	</div>
	 	<div class="am-u-md-3"></div>
	</div>
</template>
<script>
	export default {

	}
</script>
<style>
	
</style>