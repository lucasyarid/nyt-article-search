module.exports = {
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
}
