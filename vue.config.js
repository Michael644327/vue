module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/vue' : '/',
  devServer: {
    historyApiFallback: true
  }
}