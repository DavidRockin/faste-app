import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import HomeScreen from './MainBodyScreensComponents/HomeScreen';

const styles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: '#fff'
    }
});

const MainBodyScreensContainer = () => {
    return(
        <>
        <View>
            <HomeScreen />
        </View>
        </>
    );
}

export default MainBodyScreensContainer;