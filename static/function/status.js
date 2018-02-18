import Req from 'axios'

var status = {
  created: function () {
  },
  methods: {
    getstatus:function () {
      let res = false
      let url = '/ytcc/app/user/status'
     
     return  (Req.get(url)
       .then( function (msg) {
        		res = msg.data.data
            return res
    	}))
  	}
	}
}

export default status