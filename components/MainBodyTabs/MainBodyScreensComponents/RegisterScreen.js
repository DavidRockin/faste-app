import React, { Component, useState } from 'react';
import { Text, View, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import UiStyles from '../../Styles/ui'

const RegisterScreen = ({ callback, switchScreens }) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    return (
        <View style={{ flex: 1, backgroundColor: '#1a78cf' }}>
            <View style={{ paddingTop: 130, paddingBottom: 30, alignContent: 'center' }}>
                <Text style={{ color: '#FFF', fontWeight: 'bold', paddingBottom: 15, fontSize: 30, textAlign: 'center' }}>Register an Account</Text>
                <Text style={{ color: '#fff', opacity: 0.80, fontSize: 20, textAlign: 'center' }}>it's quick and easy!</Text>
            </View>
            <View style={{ padding: 48, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput value={email} style={{ width: '100%', marginBottom: 20 }} placeholder='your name' />
                <TextInput value={email} style={{ width: '100%', marginBottom: 20 }} placeholder='email address' />
                <TextInput value={password} style={{ width: '100%', marginBottom: 25 }} placeholder='password' />
                <Button onPress={callback} style={UiStyles.uiButton}>Register Account</Button>
                <Button onPress={switchScreens} style={UiStyles.uiButtonAlt}>I alrady have an account</Button>
            </View>
        </View>
    )
}

export default RegisterScreen
