import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Post from './Post'

const styles = StyleSheet.create({
    mainMenuContainer: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

const HomeScreen = () => {
    return (
        <View style={styles.mainMenuContainer}>
            <ScrollView>
                <Post></Post>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;