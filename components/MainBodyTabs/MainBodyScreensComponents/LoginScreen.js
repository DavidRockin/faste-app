import React, { Component, useState } from 'react';
import { Text, View, Alert, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

const SettingsScreen = ({ callback, switchScreens }) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    return (
        <View style={{ flex: 1, backgroundColor: '#1a78cf' }}>
            <View style={{ paddingTop: 130, paddingBottom: 30, alignContent: 'center' }}>
                <Text style={{ color: '#FFF', fontWeight: 'bold', paddingBottom: 15, fontSize: 30, textAlign: 'center' }}>Login into faste</Text>
                <Text style={{ color: '#fff', opacity: 0.80, fontSize: 20, textAlign: 'center' }}>make the world a better place</Text>
            </View>
            <View style={{ padding: 48, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput value={email} style={{ width: '100%', marginBottom: 20 }} placeholder='email address' />
                <TextInput value={password} style={{ width: '100%', marginBottom: 25 }} placeholder='password' />
                <Button
                    title="Sign In"
                    onPress={callback}
                />
                <Button title="Register an Account" onPress={switchScreens} />
            </View>
        </View>
    )
}

export default SettingsScreen
