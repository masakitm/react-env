const path = require('path');

module.exports = {
  entry: ['babel-polyfill', path.resolve('src', 'index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: '0.0.0.0',
    port: '9000',
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  plugins: [],
};
