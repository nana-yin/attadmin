module.exports = {
  devServer: {
    open: true // 自动打开浏览器
    // runtimeCompiler: true // 允许模板使用
  },
  configureWebpack: {
    resolve: {
      alias: {
        // 别名
        vue$: 'vue/dist/vue.esm.js' // 允许模板使用
      }
    }
  }
}
