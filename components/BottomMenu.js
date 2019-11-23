import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bottomMenuContainer: {
        flex: 1,
        backgroundColor: '#61B9F9'
    }
});

const BottomMenu = () => {
    return(
        <View style={styles.bottomMenuContainer}/>
    )
}

export default BottomMenu;