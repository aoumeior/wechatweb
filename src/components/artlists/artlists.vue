<template>
	<div data-am-widget="list_news" class="am-list-news am-list-news-default" >
		<!--列表标题-->
		<div class="am-list-news-hd am-cf">
			<!--带更多链接-->
			<a href="##" class="">
			<h2>栏目标题</h2>
			<span class="am-list-news-more am-fr">更多 &raquo;</span>
			</a>
		</div>

		<div class="am-list-news-bd">
			<ul class="am-list">
				<li v-for="item in list" class="am-g et-list-item-dated ">
					<div class="et-list-item-hd ">
						<a href="##">{{item.title}}</a>
						<span style="font-size: 1.3rem; color: grey;">{{item.date}}</span>
					</div>

					<div class="et-list-date">
						<button v-if="edit" class="am-btn am-btn-primary am-btn-xs">编辑</button>
						<button v-if="remove" class="am-btn am-btn-primary am-btn-xs">删除</button>
					</div>
				</li>
			</ul>
		</div>
		<ul data-am-widget="pagination" class="am-pagination am-pagination-default">

		<li class="am-pagination-first ">
			<a href="#" class="">第一页</a>
		</li>

		<li class="am-pagination-prev ">
			<a href="#" class="">上一页</a>
		</li>


		<li class="">
		<a href="#" class="">1</a>
		</li>
		<li class="am-active">
		<a href="#" class="am-active">2</a>
		</li>
		<li class="">
		<a href="#" class="">3</a>
		</li>
		<li class="">
		<a href="#" class="">4</a>
		</li>
		<li class="">
		<a href="#" class="">5</a>
		</li>


		<li class="am-pagination-next ">
		<a href="#" class="">下一页</a>
		</li>

		<li class="am-pagination-last ">
		<a href="#" class="">最末页</a>
		</li>
		</ul>

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
						"title": "晒照片，换北欧梦幻极光之旅！",
						"date": "2013-11-18",
					},
					{
						"title": "晒照片，换北欧梦幻极光之旅！",
						"date": "2013-11-18",
					},
					{
						"title": "晒照片，换北欧梦幻极光之旅！",
						"date": "2013-11-18",
					},
					{
						"title": "晒照片，换北欧梦幻极光之旅！",
						"date": "2013-11-18",
					},
					{
						"title": "晒照片，换北欧梦幻极光之旅！",
						"date": "2013-11-18",
					},
					{
						"title": "晒照片，换北欧梦幻极光之旅！",
						"date": "2013-11-18",
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
.et-list-item-hd {
	position: relative;
	margin-bottom: -1px;
	background-color: #fff;
	border: 1px solid #dedede;
}

.et-list-item-hd > a {
	display: inline-block;
	margin-left: 5px;
    padding: 1rem 0;
}

.et-list-date {
    position: absolute;
    right: 5px;
    font-size: 1.3rem;
    top: 0;
    padding: 1rem 0;
    overflow: hidden;
}

</style>
