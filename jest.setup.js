jest.mock('react-native-paper', () => {
  /**
   * mock is not able to find imports mentioned out of the block, so it is necessary to mention
   * all required imports
   **/
  const React = require('react');
  const {View} = require('react-native');
  const RealModule = jest.requireActual('react-native-paper');
  const MockedModule = {
    ...RealModule,
    Portal: ({children}) => <View>{children}</View>,
  };
  return MockedModule;
});
