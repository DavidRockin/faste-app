import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';

import Network from '../../../helpers/Network'

const SettingsScreen = () => {
    const [ userData, setUserData ] = useState(null)

    // hackathon!
    if (!userData) {
        Network.getUserData()
        .then(data => {
            console.log(data)
            setUserData(data)
        })
        .catch(err => {
            Alert.alert(`Error`, err.stausText || err.toString())
        })
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <Text>{JSON.stringify(userData)}</Text>
        </View>
    );
}

export default SettingsScreen;