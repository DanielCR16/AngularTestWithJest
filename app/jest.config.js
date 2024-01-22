module.exports = {
  moduleNameMapper: {
      '@core/(.*)': '<rootDir>/src/@core/$1',
      '@partials/(.*)': '<rootDir>/src/@partials/$1',
      '@sumax/(.*)': '<rootDir>/src/@sumax/$1',
      '@theme/(.*)': '<rootDir>/src/@theme/$1',
      '@utils/(.*)': '<rootDir>/src/@utils/$1',
      '~services/(.*)': '<rootDir>/scr/app/core/services/$1',
      '~core/(.*)': '<rootDir>/scr/app/core/$1',
      '~models/(.*)': '<rootDir>/scr/app/shared/models/$1',
      '~shared/(.*)': '<rootDir>/scr/app/shared/$1',
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: "jest-preset-angular/global-setup",
  collectCoverage:true,
  coverageDirectoy:'coverage/myApp'
};
