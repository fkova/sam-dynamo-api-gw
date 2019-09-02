const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?x$/,
        use: 'ts-loader',
        exclude: [/node_modules/]
      },
    ]
  },
  externals: {
    // These modules are already installed on the Lambda instance.
    'awslambda': 'awslambda',
    'dynamodb-doc': 'dynamodb-doc'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  optimization: {
    minimize: false,
    namedModules: true
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  }
}