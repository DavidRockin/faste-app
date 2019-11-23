import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import NavigationTab from './NavigationTab';

const MainAppContainer = () => {
  const [caption, setCaption] = useState("Hello world");

  return (
    <View style={{ flex: 6 }}>
      {/* <View style={styles.navbarContainer} /> */}
      <NavigationTab caption={caption} />
      <View style={{ flex: 4, backgroundColor: 'skyblue' }} >
        <ScrollView>
          <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
          <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
          <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
          <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
          <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
          <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        </ScrollView>
      </View>
      <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
    </View>
  );
}

export default MainAppContainer;