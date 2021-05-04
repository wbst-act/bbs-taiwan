module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/bbs-taiwan/' : '/',
  transpileDependencies: ['vuetify'],
  parallel: require('os').cpus().length > 1,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'eBBS'
      return args
    })
  },
  pwa: {
    name: 'eBBS',
    themeColor: '#607D8B',
    msTileColor: '#607D8B',
    backgroundColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      navigateFallback: 'index.html'
    },
    iconPaths: {
      msTileImage: 'img/icons/mstile-150x150.png'
    },
    manifestOptions: {
      background_color: '#000000'
    }
  }
}
