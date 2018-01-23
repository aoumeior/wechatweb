import moment from 'moment'
//时间处理函数，主要用于定制所有时间处理
var processingTime = {
    created: function () {
        this.moment = moment
    },
    methods: {
      process: function () {
          let res = this.moment(1318781876406)
          return res;
      }
    }
} 

export default processingTime