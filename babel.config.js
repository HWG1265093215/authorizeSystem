// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      // 'component',
      // {
      //   libraryName: 'element-plus',
      //   styleLibraryName: 'theme-chalk'
      // }
      // ,
      "import",
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-theme-chalk/src/${name}.css`;
        }
      }
    ] 
    
  ]
}
