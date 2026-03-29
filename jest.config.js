module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/ts/**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  modulePaths: ['<rootDir>'],
  transform: {
    '^.+\\.ts$': ['ts-jest', {tsconfig: {strict: false}}],
  },
};
