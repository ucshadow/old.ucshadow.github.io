var webpack = require('webpack');

module.exports = {
  entry: './raw/main.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  /*plugins: [
    // Minify assets.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false // https://github.com/webpack/webpack/issues/1496
      }
    })
  ]
  plugins:[
   new webpack.DefinePlugin({
   'process.env':{
   'NODE_ENV': JSON.stringify('production')
   }
   }),
   new webpack.optimize.UglifyJsPlugin({
   compress:{
   warnings: false
   }
   })
   ]*/
};