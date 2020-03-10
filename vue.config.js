module.exports = {
  css: {
    loaderOptions: {
      css: {
        // prependData:''
      },
      stylus: {},
      scss: {}
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: []
    }
  }
}
