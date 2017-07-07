/**
 * Created by gxy on 2017/7/7.
 */
const webpack = require('webpack');
const Merge = require('webpack-merge');
const path = require('path');
const CommonConfig = require('./webpack.common.js');

const devConfig = {
  output: {
    publicPath: 'http://localhost:8080/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify('development'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, './src/public'),
    publicPath: '/',
  },
};

module.exports = Merge(CommonConfig, devConfig);
