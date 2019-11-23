import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import NavigationTab from './NavigationTab';
import MainSection from './MainSection';
import BottomMenu from './BottomMenu';

const MainAppContainer = () => {
  const [caption, setCaption] = useState("Hello world");

  return (
    <View style={{ flex: 6 }}>
      <NavigationTab caption={caption} />
      <MainSection />
      <BottomMenu />
    </View>
  );
}

export default MainAppContainer;