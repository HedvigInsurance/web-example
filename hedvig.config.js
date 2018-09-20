const path = require('path')

module.exports = {
  clientEntry: path.resolve(__dirname, 'src/clientEntry.ts'),
  serverEntry: path.resolve(__dirname, 'src/serverEntry.ts'),
  modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'src')],
  context: __dirname,
  path: path.resolve(__dirname, 'build/'),
}
