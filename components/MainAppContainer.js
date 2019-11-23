import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import NavigationTab from './NavigationTab';
import MainSection from './MainBodyTabs/MainBodyScreensContainer';
import ButtomMenuContainer from './BottomMenu';

const MainAppContainer = () => {

  const [caption, setCaption] = useState("FASTE");

  return (
    <View style={{ flex: 6 }}>
      <NavigationTab caption={caption} />
      <View style={{flex: 5}}>
        <ButtomMenuContainer caption={caption}/>
      </View>
    </View>
  );
}

export default MainAppContainer;