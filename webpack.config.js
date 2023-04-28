module.exports = {
  mode: 'production',
  entry: {
    babel7: './src/babel7.js',
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    // aliasFields: ['browser'],
    alias: {
      path: require.resolve("./src/path.js")
    },
    extensions: ['*', '.mjs', '.js', '.json']
  },
  optimization: {
        minimize: false
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }
    ]
  },
  node: {
        console: false,
    global: true,
    process: true,
    __filename: 'mock',
    __dirname: 'mock',
    Buffer: true,
    setImmediate: true,
    fs: 'empty'
  }
};


