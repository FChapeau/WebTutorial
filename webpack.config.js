const path = require('path');

module.exports = {
  entry: './client/app.jsx',
  output: {
    path: path.resolve(__dirname, 'public/dist/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test:/\.jsx?$/, use: 'babel-loader'}
    ]
  },
  devtool: 'source-map'
}
