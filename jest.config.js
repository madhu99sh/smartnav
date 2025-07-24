module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src/__tests__'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/))(test|spec)\\.ts$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};