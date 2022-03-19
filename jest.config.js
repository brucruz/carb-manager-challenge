module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/tests/__mocks__/svg.js',
  },
};
