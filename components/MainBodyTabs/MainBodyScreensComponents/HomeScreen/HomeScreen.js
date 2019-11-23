import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    mainMenuContainer: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

const HomeScreen = () => {
    return (
        <>
            <View style={styles.mainMenuContainer}>
                <ScrollView>
                    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
                    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
                    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
                    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
                    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
                    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
                </ScrollView>
            </View>
        </>
    );
}

export default HomeScreen;