var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    message: './src/message.ts',
    commands: './src/commands/index.js',
    effects: './src/effects/index.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    library: 'architecture',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  externals: {
    react: 'react',
    ramda: 'ramda',
    axios: 'axios',
    'js-cookie': 'js-cookie'
  },
  module: {
    loaders: [{
      test: [/\.tsx?$/],
      loader: 'awesome-typescript-loader',
      exclude: /node_modules/
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'stage-0', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};
