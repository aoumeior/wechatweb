<template>
	<div>
		<div class="am-g am-margin-bottom" v-for="item in list">
			<div class="am-u-sm-2">
				1
			</div>
			<div class="am-u-sm-8">
				<div class="am-inline-block am-u-sm-1" style="vertical-align: top;">
					<div class="tag">
	    			<div>291</div> 
	    			<div>Apr</div>
					</div>
				</div>
				<div class="am-u-sm-3">
				<img src="http://img.hackhome.com/img2014/201410/2014102460934829.png" alt="">
				</div>
				<div class="am-u-sm-8">
					<header>分享下2015年的网页布局有哪些新的创意</header>
					<div class="info am-text-xs">
						27天前* 围观热度*经验之谈
					</div>
					<p class="am-text-sm">
	每年都有一些新的网页布局创业产生，而使一些老的布局方案被淘汰。毫无疑问，2015年的网页布局要响应各种终端，这种趋势早在2010年就在国外开始蔓延，我们可以。。。。
					</p>
					<div class="tags"></div>
				</div>
			</div>
			<div class="am-u-sm-2" style="background-color: grey;">
				
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import Req from 'axios'

export default {
	props: {
		edit: {
			type: Boolean,
			default: function () {
				return true
			}
		},
		remove: {
			type: Boolean,
			default: function () {
				return true
			}
		},
		list: {
			type: Array,
			default: function () {
				return [
					{
						"title": "分享下2015年的网页布局有哪些新的创意",
						"date": "27天前* 围观热度*经验之谈",
						'profile': '每年都有一些新的网页布局创业产生，而使一些老的布局方案被淘汰。毫无疑问，2015年的网页布局要响应各种终端，这种趋势早在2010年就在国外开始蔓延，我们可以。。。。'						
					},
					{
						"title": "分享下2015年的网页布局有哪些新的创意",
						"date": "27天前* 围观热度*经验之谈",
						'profile': '每年都有一些新的网页布局创业产生，而使一些老的布局方案被淘汰。毫无疑问，2015年的网页布局要响应各种终端，这种趋势早在2010年就在国外开始蔓延，我们可以。。。。'						
					},
					{
						"title": "分享下2015年的网页布局有哪些新的创意",
						"date": "27天前* 围观热度*经验之谈",
						'profile': '每年都有一些新的网页布局创业产生，而使一些老的布局方案被淘汰。毫无疑问，2015年的网页布局要响应各种终端，这种趋势早在2010年就在国外开始蔓延，我们可以。。。。'						
					},					
				]
			}
		}
	},
	create () {
		let artListUrl = 'static/api/artlist.json'
		Req.get(artListUrl).then((res) => {
			this.list = res.data
		})
	}
}
</script>

<style>
.tag{
    box-sizing: border-box;
    position: relative;
    width: 60px;
    height: 60px;
    border: 5px solid #09F;
    line-height: 20px;
    text-align: center;
    /*border-radius: 30px;*/
    background-color: #fff;
}
.tag:before,.tag:after{
    content:"";
    display:block;
    border-width:10px;
    position:absolute; bottom:-22px;
    left: 17px;
    border-style:solid dashed dashed;
    border-color:#09F transparent transparent;
    font-size:0;
    line-height:0;
}
.tag:after{
    bottom:-17px;
    border-color:#FFF transparent transparent;
}

 img{ width: 100%; height: auto;max-width: 100%; display: inline-block; }  

</style>
