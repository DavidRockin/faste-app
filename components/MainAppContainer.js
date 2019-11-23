import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NavigationTab from './NavigationTab';

const MainAppContainer = () => {
  const [caption, setCaption] = useState("Hello world");

  return (
    <View style={{ flex: 6 }}>
      {/* <View style={styles.navbarContainer} /> */}
      <NavigationTab caption={caption}/>
      <View style={{ flex: 4, backgroundColor: 'skyblue' }} />
      <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
    </View>
  );
}

export default MainAppContainer;