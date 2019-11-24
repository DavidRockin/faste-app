import React, { Component, useState } from 'react';
import { Text, View, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import axios from 'axios'
import config from '../../../config/app'

import UiStyles from '../../Styles/ui'

const RegisterScreen = ({ callback, switchScreens }) => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const [ working, setWorking ] = useState(false)

    function sendRequest() {
        axios.post(config.endpoint + `/api/register`, {
            email, password, name
        })
        .then(({ data }) => {
            if (data.error) {
                throw new Error(data.error)
            }
            callback()
            Alert.alert('Success', 'Registration success, go get em')
        })
        .catch(err => {
            Alert.alert('Error', err.statusText || err.toString())
        })
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#1a78cf' }}>
            <View style={{ paddingTop: 130, paddingBottom: 30, alignContent: 'center' }}>
                <Text style={{ color: '#FFF', fontWeight: 'bold', paddingBottom: 15, fontSize: 30, textAlign: 'center' }}>Register an Account</Text>
                <Text style={{ color: '#fff', opacity: 0.80, fontSize: 20, textAlign: 'center' }}>it's quick and easy!</Text>
            </View>
            <View style={{ padding: 48, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput value={name} style={{ width: '100%', marginBottom: 20 }} placeholder='your name' onChangeText={t => setName(t)} />
                <TextInput value={email} style={{ width: '100%', marginBottom: 20 }} placeholder='email address' onChangeText={t => setEmail(t)}/>
                <TextInput value={password} style={{ width: '100%', marginBottom: 25 }} placeholder='password' onChangeText={t => setPassword(t)}/>
                <Button onPress={sendRequest} style={UiStyles.uiButton}>Register Account</Button>
                <Button onPress={callback} style={UiStyles.uiButtonAlt}>I alrady have an account</Button>
            </View>
        </View>
    )
}

export default RegisterScreen
