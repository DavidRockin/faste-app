import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    navbarContainer: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: 'powderblue'
    },
    navbarCaption: {
        textAlign: "center",
        alignSelf: "center",
        color: 'green',
        fontSize: 40
    }
});

const NavigationTab = ({ caption }) => {
    return (
        <>
            <View style={styles.navbarContainer}>
                <Text style={styles.navbarCaption}>{caption}</Text>
            </View>
        </>
    );
}

export default NavigationTab;
