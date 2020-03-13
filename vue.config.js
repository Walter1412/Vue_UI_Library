module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: '~@/assets/styles/app.styl'
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: ['~@/assets/styles/_base.styl']
    }
  }
}
