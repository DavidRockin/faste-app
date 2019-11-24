import React, { Component } from 'react';
import MainAppContainer from './components/MainAppContainer'
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducers'
import Network from './helpers/Network';

const store = createStore(reducer, {
  authenticated: false
})

Network.store = store

const App = () => {
  return(
    <Provider store={store}>
      <MainAppContainer store={store} />
    </Provider>
  )
}
export default App;
