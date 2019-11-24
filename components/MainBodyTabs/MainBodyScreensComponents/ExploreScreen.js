import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Network from '../../../helpers/Network'

const ExploreScreen = () => {

    async function t() {
        //Alert.alert(`kkk`, await Network.getUserId())
    }
    
    t()
    

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Explore Screen!</Text>
        </View>
    );
}

export default ExploreScreen;