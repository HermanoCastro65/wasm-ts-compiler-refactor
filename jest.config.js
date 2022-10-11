module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@parser-types/(.*)$': '<rootDir>/src/models/parser/types/$1',
  },
}
