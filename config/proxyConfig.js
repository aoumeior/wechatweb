module.exports = {
    proxyTable: { 
      // '/api': {
      // target: 'www.unitools.site',
      // changeOrigin: true,
      // pathRewrite: {}
      // },
      '/api': {
        target: 'http://www.unitools.site',
        changeOrigin: true,
        pathRewrite: {
        	'^/api': ""
        }
     	}
    }
}