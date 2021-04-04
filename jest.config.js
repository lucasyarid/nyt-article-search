module.exports = {
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
  moduleDirectories: ['.', 'src', 'src/util', 'node_modules'],
}
