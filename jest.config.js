module.exports = {
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  testRegex: '\\.test\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  setupFiles: ['<rootDir>/test-setup-enzyme.js'],
}
