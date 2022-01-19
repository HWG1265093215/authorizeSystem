
const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      // alias:{
      //     'assets':"@/assets",
      //     '@common':path.join(__dirname,"./src/Common"),
      //     'components':path.join(__dirname,'./src/components'),
      //     '@network':path.join(__dirname,'./src/network'),
      //     'views':'@/views',
      //     'routerPath':path.join(__dirname,'./src/router'),
      //     '@tempImg':path.join(__dirname,'./src/assets') ,
      //     '@store':path.join(__dirname,'./src/store')
      // }
    }
  },
  lintOnSave: false,
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:8093',
        changeOrigin:true
      }
    }
  }
  // chainWebpack: config => {
  //     const imagesRule = config.module.rule('images')
  //     //清空所有配置
  //     imagesRule.uses.clear()

  //     config.module
  //     .rule('images')
  //       .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
  //       .use('url-loader')
  //         .loader(require.resolve('url-loader'))
  //         .tap(options=>{
  //           options={
  //             limit: 10244,
  //             // use explicit fallback to avoid regression in url-loader>=1.1.0
  //              fallback: {
  //               loader: require.resolve('file-loader'),
  //               options: {
  //                 name:'[name][hash:12].[ext]'
  //               }
  //             }
  //           }
  //           return options
  //         });
  //   }
}
