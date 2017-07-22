const process = require('process');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const stylusAutoprefixer = require('autoprefixer-stylus');

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const extractStyles = process.env.NODE_ENV !== 'development';

const webpack = require('webpack');

const Merge = require('webpack-merge');

const { join } = require('path');


const commonConfig = {
  entry: {
    index: ['./src/app.js'],
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', '.html', '.styl'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // inherits$: join(__dirname, 'node_modules/inherits')
    }
  },
  node: {
    fs: 'empty',
    // child_process: 'empty',
  },
  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: [
          join(__dirname, 'node_modules'),
        ],
        use: ['babel-loader']
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractStyles,
          loaders: {
            css: ['style-loader', 'css-loader', 'stylus-loader']
          }
        }
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].html",
            },
          },

          {
            loader: "extract-loader",
          },

          {
            loader: "html-loader",
            options: {
              // attrs: ["img:src", "link:href"],
              // interpolate: true,
            },
          },
        ],
      },


    ]
  },
  plugins: [

    new ExtractTextPlugin('style.css'),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    new FriendlyErrorsPlugin()
  ]
};

const devConfig = {
  // devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
        ]
      }
    ]
  },

  devServer: {
    contentBase: join(__dirname, "dist"),
    compress: true,
    port: 8080,
    historyApiFallback: true
  },

  entry: {
    server: "webpack-dev-server/client?http://localhost:8080/"
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
  ]
};

const prodConfig = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: { loader: 'style-loader' },

          use: ['css-loader', 'stylus-loader']
        })
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: { loader: 'style-loader' },

          use: ['css-loader']
        })
      },

      {
        test: /\.((html)|(js))$/,
        enforce: 'pre',
        exclude: /(node_modules|bower_components|\.spec\.js)/,
        use: [
          {
            loader: 'webpack-strip-block'
          }
        ]
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      }
    ],
  },

  plugins: [
    //   new UglifyJSPlugin({
    //   extractComments: true,
    //   sourceMap: true
    // })

    new webpack.LoaderOptionsPlugin({
      test: /\.styl$/,
      stylus: {
        // You can have multiple stylus configs with other names and use them
        // with `stylus-loader?config=otherConfig`.
        default: {
          use: [stylusAutoprefixer({ browsers: ['last 3 versions'] })],
        },
      },
    }),

    new ExtractTextPlugin('style.css'),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
        screw_ie8: true
      },
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new webpack.optimize.AggressiveMergingPlugin()
  ]
};


module.exports = (process.env.NODE_ENV === 'development' ? Merge(commonConfig, devConfig) : Merge(commonConfig, prodConfig)); 