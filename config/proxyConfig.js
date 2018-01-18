module.exports = {
    proxyTable: { 
        '/ytcc/uploadimg': {
        target: 'www.unitools.site',
        changeOrigin: true,
        pathRewrite: {}
        }
    }
}