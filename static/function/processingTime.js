import moment from 'moment'
//时间处理函数，主要用于定制所有时间处理

function processingTime () {
	 this.moment = moment;
	 this.process =function () {
          let res = this.moment(1318781876406)
          return res;
      }
}

var time = new processingTime()

export default time