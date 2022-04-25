/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainOfNavigation from './src/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store, {persistor} from './src/Redux';
import {PersistGate} from 'redux-persist/integration/react';

const AppTheme = () => {
  return (
    <NavigationContainer
      fallback={
        <View
          style={{
            height: 1000000,
            width: 100000,
            backgroundColor: 'black',
          }} />
      }>
      <SafeAreaProvider>
        <MainOfNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AppTheme />
      </PersistGate>
    </Provider>
  );
};

export default App;
