var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts',
    'styles': './src/app/common/less/main.less',
  },

  resolve: {
    extensions: ['.js', '.ts', '.less'],
    // Breaks other things..
    // modules: [ path.join(__dirname, "node_modules") ]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use: [ {
            loader: 'html',
            options: {
                minimize: false, // workaround for ng2
            },
        } ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        exclude: [
            helpers.root('public', 'images', 'svg'),
        ],
        use: [ { loader: 'file?name=assets/[name].[hash].[ext]' } ]
      },
      {
        test: /\.less$/,
        exclude: [
            helpers.root('src', 'app', 'common'),
        ],
        loaders: ['raw-loader', 'less-loader'],
      },
      {
        test: /\.less$/,
        include: [
            helpers.root('src', 'app', 'common'),
        ],
        use: [ { loader:
            ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader!less-loader",
            })
        } ]
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        use: [ { loader:
            ExtractTextPlugin.extract({
                fallbackLoader: 'style',
                loader: 'css?sourceMap',
            })
        } ]
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        use: [ { loader: 'raw' } ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
