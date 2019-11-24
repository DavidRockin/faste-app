import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';

import NavigationTab from './NavigationTab';
import MainSection from './MainBodyTabs/MainBodyScreensContainer';
import ButtomMenuContainer from './BottomMenu';

import LoginScreen from './MainBodyTabs/MainBodyScreensComponents/LoginScreen'
import RegisterScreen from './MainBodyTabs/MainBodyScreensComponents/RegisterScreen';
import Network from '../helpers/Network';

const MainAppContainer = ({ store }) => {

  const [caption, setCaption] = useState("FASTE");
  const [ authed, setAuth ] = useState(false)
  const [ isLogin, setLogin ] = useState(true)

  function test() {
    setAuth(true)
  }

  function switchScreens() {
    store.dispatch({
      type: 'SET_AUTH',
      value: !store.authenticated
    })
  }

  store.subscribe(() => {
    setAuth(store.getState().authenticated)
  })

  return (
    <View style={{ flex: 6 }}>
      { authed ?
        (
          <>
            <NavigationTab caption={caption} />
            <View style={{flex: 5}}>
              <ButtomMenuContainer caption={caption}/>
            </View>
          </>
        ) : (
          isLogin ? <LoginScreen callback={test} switchScreens={switchScreens} />
                  : <RegisterScreen callback={test} switchScreens={switchScreens} />
        )
      }
    </View>
  );
}

export default MainAppContainer;4