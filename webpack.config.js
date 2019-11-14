const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const BabelEsmPlugin = require('babel-esm-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge');
const path = require('path');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'src'),
};

const commonConfig = merge([
  {
    entry: {
      'monkey-bar': './src/index.js',
    },
    output: {
      path: path.resolve(process.cwd(), 'dist'),
    },
    node: false,
    plugins: [
      new CaseSensitivePathsPlugin(),
      new BabelEsmPlugin(),
      new FriendlyErrorsWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Monkey-Bar',
      }),
    ],
    resolve: {
      mainFields: ['module', 'browser', 'main'],
    },
  },
  parts.loadJavaScript({
    include: PATHS.app,
  }),
  {
    optimization: {
      noEmitOnErrors: true,
    },
  },
]);

const productionConfig = merge([
  {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 150000,
      maxAssetSize: 450000,
    },
  },
  {
    output: {
      filename: '[name].min.js',
    },
  },
  parts.clean(),
  parts.minifyJavaScript(),
  parts.generateSourceMaps({ type: 'source-map' }),
  parts.attachRevision(),
]);

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.loadCSS(),
  parts.loadImages(),
]);

module.exports = mode => {
  const config = mode === 'production' ? productionConfig : developmentConfig;

  return merge([commonConfig, config, { mode }]);
};
