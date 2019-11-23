import React, { useState } from 'react';
import { View } from 'react-native';

const MainAppContainer = () => {
    return (
        <View style={{flex: 6}}>
          <View style={{flex : 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 4, backgroundColor: 'skyblue'}} />
          <View style={{flex: 0.8, backgroundColor: 'steelblue'}} />
        </View>
    );
}

export default MainAppContainer;