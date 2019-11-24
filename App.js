import React, { Component } from 'react';
import MainAppContainer from './components/MainAppContainer'
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux'
import Network from './helpers/Network';

import store from './helpers/store'

Network.store = store

const App = () => {
  return(
    <Provider store={store}>
      <MainAppContainer store={store} />
    </Provider>
  )
}
export default App;
