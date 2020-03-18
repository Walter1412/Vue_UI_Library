module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: '~@/assets/styles/app.styl'
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/Vue_UI_Library/' : '/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: ['~@/assets/styles/_base.styl']
    },
    storybook: {
      allowedPlugins: ['define']
    }
  }
}
