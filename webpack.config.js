module.exports = {

  entry: './src/index.js',
  output: {
    filename: '/js/bundle.js',
    path: './dist',
  },

  resolve: {
    modulesDirectories: [
      'node_modules',
      'src'
    ]
  },

  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|dist)/,
        include: /(src|test)/,
        query: {
          presets: ['latest', "stage-0"]
        }
      },
    ]
  },

}