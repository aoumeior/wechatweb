<template>
		<div class="am-g" style="margin-top: 50px">
	 		<div class="am-u-md-8 am-u-sm-centered">	 	
    		<i-table border :columns="columns2" :data="data4"></i-table>
 		 </div>
		</div>
</template>
<script>
import Req from 'axios'
export default {
  data () {
    return {
      columns2: [
          {
              title: '公司',
              key: 'company_name',
              width: 130,
              fixed: 'left'
          },
          {
              title: '电话',
              key: 'tel',
              width: 130
          },
          {
              title: '邮件',
              key: 'email',
              width: 130
          },
          {
              title: '传真',
              key: 'fax',
              width: 130
          },
          {
              title: '地址',
              key: 'addr',
              width: 200
          },
          {
              title: '简介',
              key: 'remark',
              width: 200
          }
      ],
      data4: []
    }
  },
  methods: {
		getCompanyinfoList: function () {
			var self = this
			let url = 'ytcc/wepro/view/data?viewid=wepro_company'
			Req.get(url).then((res) => {
				self.data4 = res.data.data
			})
		}
  },
  created () {
  	this.getCompanyinfoList()
  }
}
</script>