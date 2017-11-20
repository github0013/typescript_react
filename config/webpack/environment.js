const { environment } = require('@rails/webpacker')

environment.loaders.get("file").test = /\.(svg|eot|otf|ttf|woff|woff2)$/i
environment.loaders.set('image', {
  test: /\.(jpe?g|png|gif)$/i,
  use: [{
    loader: 'url-loader'
  }]
});

module.exports = environment
