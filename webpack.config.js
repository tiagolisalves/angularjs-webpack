const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');


  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },   
   module: {
    rules: [
      {
        test: require.resolve('./src/index.js'),
        use: 'imports-loader?angular'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
     
     new HtmlWebpackPlugin({
        title: 'Custom template',
        template: './src/index.html'
      }),
     new WebpackShellPlugin({onBuildStart:['npm run update-entry'], onBuildEnd:['npm run update-entry']})


   ]
  };