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
        <>
            <View style={styles.mainMenuContainer}>
                <ScrollView>
                    <Post></Post>
                    <Text style={{ fontSize: 96 }}>Scroll me plz *in Russian accent*</Text>
                    <Text style={{ fontSize: 96 }}>Scroll me plz *in Russian accent*</Text>
                    <Text style={{ fontSize: 96 }}>Scroll me plz *in Russian accent*</Text>
                    <Text style={{ fontSize: 96 }}>Scroll me plz *in Russian accent*</Text>
                    <Text style={{ fontSize: 96 }}>Scroll me plz *in Russian accent*</Text>
                    <Text style={{ fontSize: 96 }}>Scroll me plz *in Russian accent*</Text>
                </ScrollView>
            </View>
        </>
    );
}

export default HomeScreen;