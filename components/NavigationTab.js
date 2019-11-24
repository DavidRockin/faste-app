import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    navbarContainer: {
        flex: 0.6,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        alignContent: "center",
        backgroundColor: '#1a78cf'
    },
    navbarCaption: {
        marginBottom: 18,
        textAlign: "center",
        alignSelf: "center",
        color: 'white',
        fontSize: 20
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
