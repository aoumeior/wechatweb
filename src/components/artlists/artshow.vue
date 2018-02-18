<template>
    <Table border :columns="columns7" :data="data6" height=500></Table>
</template>
<script>
import Req from 'axios'
import Vue from 'vue'
import status from '../../../static/function/status.js'
    export default {
      data () {
        return {
            columns7: [
                {
                  title: 'id',
                  key: 'id',
                },
                {
                  title: 'title',
                  key: 'title'
                },
                {
                  title: 'occur_time',
                  key: 'occur_time'
                },
                {
                    title: 'Action',
                    key: 'id',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show( params.row.id)
                                    }
                                }
                            }, 'View'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                  click: () => {
                                      var that = this
                                      let url = '/ytcc/app/bus?busid=article.del'
                                      let postdata = { id: params.row.id}
                                      Req.post(url, postdata).then(function(e) {
                                         that.remove(params.index)
                                      })
                                  }
                                }
                            }, 'Delete')
                        ]);
                    }
                }
            ],
            data6: [
                {
                  "id": "0c1e8ba313b611e8b5a400163e0c000e",
                  "title": "dddd",
                  "occur_time": 1518853324000,
                }
            ]
        }
      },
  methods: {
    show (id) {
        this.$router.push({ path: '/markdown/' + id })
    },
    remove (index) {
        this.data6.splice(index, 1);
        this.$Notice.success({
          title: 'success',
          duration: 2
        })
    }
  },
  created () {
    var that = this
    let url = '/ytcc/wepro/view/data?viewid=wepro_article'
    Req.get(url).then(function(e) {
      console.log(that.getstatus())
      that.data6 = e.data.data
    })
  },
  mixins: [status]        
    }
</script>