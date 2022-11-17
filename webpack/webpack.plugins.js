const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    // favicon: 'assets/images/logo.png',
    inject: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[chunkhash].css',
    chunkFilename: '[name].[chunkhash].chunk.css',
  }),
  new webpack.ProvidePlugin({
    process: 'process/browser',
  }),
  new TsconfigPathsPlugin({
    configFile: path.resolve(__dirname, './tsconfig.json'),
    extensions: ['.ts', '.tsx', '.js'],
    logLevel: 'INFO',
    baseUrl: path.resolve(__dirname, '.'),
    mainFields: ['browser', 'main'],
  }),
];
