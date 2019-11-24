import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';

import NavigationTab from './NavigationTab';
import MainSection from './MainBodyTabs/MainBodyScreensContainer';
import ButtomMenuContainer from './BottomMenu';

import LoginScreen from './MainBodyTabs/MainBodyScreensComponents/LoginScreen'
import RegisterScreen from './MainBodyTabs/MainBodyScreensComponents/RegisterScreen';
import Network from '../helpers/Network';
import Geolocation from '../helpers/Geo';

const Geo = new Geolocation()

const MainAppContainer = ({ store }) => {

  const [caption, setCaption] = useState("FASTE");
  const [ authed, setAuth ] = useState(false)
  const [ isLogin, setLogin ] = useState(true)

  function test() {
    setLogin(!isLogin)
  }

  function switchScreens() {
    store.dispatch({
      type: 'SET_AUTH',
      value: !store.authenticated
    })
  }

  function storeGeoLocation() {
    Geo.get(({ coords }) => {
      store.dispatch({
        type: `SET_GEO`, coords
      })
    }, err => {
      Alert.alert(`Error`, err.message)
    })
  }

  useEffect(() => {
    store.subscribe(() => {
      setAuth(store.getState().authenticated)
    })
  }, [store])

  useEffect(() => {
    storeGeoLocation()
  }, [])

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