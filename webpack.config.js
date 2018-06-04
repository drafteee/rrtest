const HtmlWebPackPlugin = require("html-webpack-plugin");
var fs = require('fs');
var webpack = require('webpack');
var path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
var config = {
  devtool: 'source-map',

  entry: {
    'index.ios': ["./src/index.js"],
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
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
// Hot mode
if (process.env.HOT) {
  config.devtool = 'eval';
  config.entry['index.ios'].unshift('react-native-webpack-server/hot/entry');
  config.entry['index.ios'].unshift('webpack/hot/only-dev-server');
  config.entry['index.ios'].unshift('webpack-dev-server/client?http://localhost:8080');
  config.output.publicPath = 'http://localhost:8080/';
  config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

  // Note: enabling React Transform and React Transform HMR:
  config.module.loaders[0].query.plugins.push([
    'react-transform', {
      transforms: [{
        transform : 'react-transform-hmr',
        imports   : ['react'],
        locals    : ['module']
      }]
    }
  ]);
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
