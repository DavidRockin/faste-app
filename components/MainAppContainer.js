import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';

import NavigationTab from './NavigationTab';
import MainSection from './MainBodyTabs/MainBodyScreensContainer';
import ButtomMenuContainer from './BottomMenu';

import LoginScreen from './MainBodyTabs/MainBodyScreensComponents/LoginScreen'
import RegisterScreen from './MainBodyTabs/MainBodyScreensComponents/RegisterScreen';

const MainAppContainer = () => {

  const [caption, setCaption] = useState("FASTE");
  const [ authed, setAuth ] = useState(false)
  const [ isLogin, setLogin ] = useState(true)

  function test() {
    Alert.alert('aaaaaa', 'eeee')
    setAuth(true)
  }
  
  function switchScreens() {
    setLogin(!isLogin)
  }

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

export default MainAppContainer;