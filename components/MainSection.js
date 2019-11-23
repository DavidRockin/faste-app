import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    mainMenuContainer: {
        flex: 4,
        backgroundColor: '#fff'
    }
});

const MainSection = () => {
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

export default MainSection;