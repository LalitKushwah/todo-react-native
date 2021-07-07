module.exports = {
  preset: 'react-native',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation|@react-native-community|rect-native-vector-icons|react-native-iphone-x-helper|react-native-swipe-gestures))',
  ],
  /** config creates coverage folder and show coverage report in terminal (alternate of --coverage) */
  collectCoverage: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
};
