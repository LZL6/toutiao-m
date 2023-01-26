const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './'
  // devServer: {
  //   host: '192.168.137.1'
  // }
})

