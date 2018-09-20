module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-typescript',
  ],
  env: {
    test: {
      plugins: ['@babel/transform-modules-commonjs'],
    },
  },
}
