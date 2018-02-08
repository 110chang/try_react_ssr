const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  context: `${__dirname}/server`,
  entry: './index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'server.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: `../dist/`,
            publicPath: function(path) {
              return path.replace('../dist/', '');
            }
          },
        },
      }
    ]
  }
};
