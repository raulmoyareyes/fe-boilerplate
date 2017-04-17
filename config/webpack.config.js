const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const manifest = require('../package.json');

const config = manifest.config;
const browsers = ['last 2 versions', 'ie >= 10', '> 5%'];
var isProd = process.env.B_PROD === '-p';
// NO USE HMR
isProd = true;

console.log('Enviroment: ' + (isProd ? 'prod' : 'dev'));

process.noDeprecation = true

consoleOut = {
  // hash: false, version: false, timings: false, assets: false, source: false, errors: false, errorDetails: false, warnings: false, publicPath: false
  chunks: false,
  modules: false,
  reasons: false,
  children: false,
};

module.exports = {

  devtool: '#cheap-module-source-map',
  context: path.resolve(__dirname, '../src'),

  stats: consoleOut,

  entry: {
    app: `./${config.entryFile}.js`,
    //other: 'otherEntry.js'
  },

  output: {
    path: path.resolve(__dirname, `../${config.buildFolder}`),
    publicPath: isProd 
      ? "http://cdn.example.com/assets/"
      : '/',
    filename: `[name].${config.outputFile}.[hash].js`,
  },

  resolve: {
    modules: [
      path.join(__dirname, `../${config.buildFolder}`),
      'node_modules'
    ]
  },

  module: {
    rules: [
      // ESLint loader
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /(node_modules)/,
        loader: 'eslint-loader',
        options: {
          failOnError: false,
          failOnWarning: false,
          configFile: 'config/.eslintrc'
        }
      },
      // Javascript loader
      {
        test: /\.js$/, 
        exclude: /(node_modules)/, 
        use: [{
          loader: 'babel-loader',
          options: { 
            presets: [
              ['env', { 'targets': {
                'browsers': browsers
              }}]
            ],
            plugins: ["transform-class-properties"]
          }
        }],
      },
      // CSS loader
      {
        test: /\.css$/,
        use: isProd 
          ? ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'postcss-loader']
            })
          : ['style-loader', 'css-loader', 'postcss-loader'] // HMR
      },
      // File loader
      // https://github.com/webpack-contrib/file-loader
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          'file-loader?name=[name].[ext]&outputPath=images/&publicPath=images/', 
          // 'image-webpack-loader' // Compress images
        ]
      },
      {
        test: /\.(woff2?|svg)$/i,
        use: ['url-loader?limit=10000&name=fonts/[name].[ext]']
      },
      {
        test: /\.(ttf|eot)$/i,
        use: ['file-loader?name=fonts/[name].[ext]']
      }
      // {
      //   test: /\.(png|jpe?g|gif|svg|eot|ttf|woff2?)$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10000
      //   }
      // }
    ]
  },

  devServer: { // HMR
    contentBase: path.resolve(__dirname, `../${config.buildFolder}`),
    stats: consoleOut,
    compress: true,
    hot: true,
    open: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Front End Boilerplate',
      // minify: {
        // https://github.com/kangax/html-minifier#options-quick-reference
        // collapseWhitespace: true
      // },
      // chunks: ['app'],
      filename: 'index.html',
      templates: '../public/index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('postcss-cssnext')({ 'browsers': browsers }),
        ]
      }
    }),
    new ExtractTextPlugin({
      filename: `css/[name].${config.outputFile}.[hash].css`, 
      disable: !isProd, // HMR 
      allChunks: true 
    }),
    new webpack.HotModuleReplacementPlugin(), //HMR
    new webpack.NamedModulesPlugin(), //HMR
  ],
}