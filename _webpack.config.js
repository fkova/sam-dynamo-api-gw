const path = require('path');

module.exports = {
  entry: './src/handler.ts',
  mode: 'development',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
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
    extensions: ['.ts', '.js']
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  }
}