module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue' : '/',
  devServer: {
    historyApiFallback: true
  }
}