
// get html-webpack module
var HtmlWebpackPlugin = require('html-webpack-plugin')
// new html webpack plugin
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  // file that will be transferred to dist
  template: __dirname + '/app/index.html',
  // name of that file
  filename: 'index.html',
  // where to inject webpack output
  inject: 'body'
});

module.exports = {
  // main entry for our app
  entry: [
    './app/index.js'
  ],
  output: {
    // specify where to put file webpack will create
    // __dirname is where currently executing script resides
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
    // transformations
  module: {
    loaders: [
        // run all files in app directory ending in .js through babel loader
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
