/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';
import {Provider} from 'react-redux';
import createRootStore from './store';

const App: () => React$Node = () => {
  const store = createRootStore();
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <MainNavigation />
    </Provider>
  );
};

export default App;
