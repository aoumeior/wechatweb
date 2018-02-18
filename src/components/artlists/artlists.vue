<template>
	<div>
		<div class="am-g am-margin-bottom" v-for="item in list.data">
			<div class="am-u-sm-8 am-u-sm-centered am-nbfc am-padding-bottom" style="border-bottom: 1px solid grey">
				<div class="am-u-sm-2">
					<div class="tag">
	    			<div>{{ day(item.occur_time) }}</div> 
	    			<div>{{ months(item.occur_time)}}</div>
					</div>
				</div>
				<div class="am-u-sm-3">
				<img src="http://img.hackhome.com/img2014/201410/2014102460934829.png" alt="">
				</div>
				<div class="am-u-sm-7">
					<header>
						<router-link tag="a" :to="'/artpage/'+ item.id" class="am-text-truncate">
							{{item.title}}
						</router-link>
					</header>
					<div class="info am-text-xs">
					 {{ fromNow(item.occur_time)}}* 围观热度*经验之谈
					</div>
					<p class="am-text-sm">
						{{item.content}}
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
import moment from 'moment'
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
				return  [
		        {
		            "id": "1e5aac2a649e4fbba9e1c4f3ce660b92",
		            "title": "创意涂鸦手绘文化墙，为南昌增添光彩",
		            "occur_time": 1518170339000,
		            "content": "预定南昌创意涂鸦手绘:让人欲罢不能！\r\n南昌墙体彩绘这两天，6幅速写的故事，仿佛一块小小的石头，让原本繁忙、紧张的医院工作泛起了层层涟漪。“我们今天还在讨论呢！说缪爷爷是一位很阳光、很可爱的老人。”医院皮肤科住院医师李佳佳",
		            "path": "http://www.unitools.site/ytcc/static/pic/ch1.jpg"
		        }
		    ]
			}
		}
	},
	created () {
		let url = '/ytcc/wepro/view/data?viewid=wepro_article_left25'
		Req.get(url).then((res) => {
			this.list = res.data
		})
	},
	methods: {
		day(val) { return moment(val).week() },
		months(val) { 
			var en = moment().locale('en');
			 return en.localeData().months(moment(val)).substring(0,3)

		},
		fromNow(val) { return moment(val).fromNow() }
	}
}
</script>

<style>
.tag{
    box-sizing: border-box;
    position: relative;
    width: 60px;
    height: 60px;
    margin: 0 auto;
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
