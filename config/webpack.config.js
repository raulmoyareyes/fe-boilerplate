const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const manifest = require('../package.json');

const config = manifest.config;
const extractCSS = new ExtractTextPlugin({
  filename: `[name].${config.outputFile}.css`, 
  disable: false, 
  allChunks: true 
});

process.noDeprecation = true

module.exports = {

  devtool: '#cheap-module-source-map',
  context: path.resolve(__dirname, '../src'),

  stats: {
    chunks: false,
    modules: false,
    reasons: false,
    children: false
  },

  entry: {
    app: `./${config.entryFile}.js`,
  },

  output: {
    path: path.resolve(__dirname, `../${config.buildFolder}`),
    filename: `[name].${config.outputFile}.js`,
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
          configFile: 'config/eslint.config.json'
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
                'browsers': ['last 2 versions', 'ie >= 10']
              }}]
            ],
            plugins: ["transform-class-properties"]
          }
        }],
      },
      // CSS loader
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              }
            },
            'postcss-loader'
          ]
        })
      },
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('postcss-cssnext')({ browsers: ['ie >= 10', '> 5%'] }),
        ]
      }
    }),
    extractCSS,
  ],
}