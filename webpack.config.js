module.exports = {
  mode: 'production',
  entry: './src/babel7.js',
  output: {
    filename: 'babel7.js'
  },
  resolve: {
    aliasFields: ['browser']
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