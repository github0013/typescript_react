const { environment } = require('@rails/webpacker')

environment.loaders.set('image', {
  test: /\.(jpe?g|png|gif)$/i,
  use: [{
    loader: 'url-loader'
  }]
})

module.exports = environment
