const HtmlWebPackPlugin = require("html-webpack-plugin");
var fs = require('fs');
var webpack = require('webpack');
var path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
var mode = process.env.NODE_ENV || 'development';

var config = {
  devtool: (mode === 'development') ? 'inline-source-map' : false,
    mode: mode,
  entry: [
    './src/index.js'
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  devServer:{
    proxy:[{
      path:'/api/',
      target:'http://localhost:3001'
    }],
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css/,
        loaders:['style-loader','css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: []
      }
    }]
  },
  plugins: [htmlWebpackPlugin,new webpack.ProvidePlugin({
    "React": "react",
})]
};
// // Hot mode
// if (process.env.HOT) {
//   config.devtool = 'eval';
//   // config.entry['index.ios'].unshift('react-native-webpack-server/hot/entry');
//   // config.entry['index.ios'].unshift('webpack/hot/only-dev-server');
//   // config.entry['index.ios'].unshift('webpack-dev-server/client?http://localhost:8080');
//   config.output.publicPath = 'http://localhost:8080/';
//   config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

//   // Note: enabling React Transform and React Transform HMR:
//   config.module.loaders[0].query.plugins.push([
//     'react-transform', {
//       transforms: [{
//         transform : 'react-transform-hmr',
//         imports   : ['react'],
//         locals    : ['module']
//       }]
//     }
//   ]);
// }

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}
module.exports = config;
