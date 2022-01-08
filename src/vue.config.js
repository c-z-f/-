module.exports = {
  // 返回一个将要合并的对象
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置
    } else {
      // 为开发环境修改配置
      console.log(process.env.NODE_ENV)
    }
  },
  chainWebpack: config => {},
  devServer: {}
}