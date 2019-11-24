import React, { Component, useState, useEffect } from 'react';
import { Text, View, Alert, AsyncStorage } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios'
import config from '../../../config/app'

import UiStyles from '../../Styles/ui'

import Network from '../../../helpers/Network'

var autoLogin = true

const LoginScreen = ({ callback, switchScreens }) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    function doLogin() {
        sendRequest(email, password)
    }

    function sendRequest(email, password) {
        autoLogin = false
        axios.post(config.endpoint + `/api/login`, {
            email, password
        })
        .then(({ data }) => {
            if (data.error) {
                throw new Error('Invalid login request, please try again')
            }
            saveCreds(email, password)
            Network.token = data.token
            switchScreens()
        })
        .catch(err => {
            console.log(err)
            Alert.alert('Error', err.statusText || err.toString())
        })
    }

    async function saveCreds(email, password) {
        try {
            // in an ideal world we'd use sessions... :)
            await AsyncStorage.setItem(`superSecureCredentials`, JSON.stringify({ email, password }))
        } catch (e) {
            Alert.alert(`Failed to sign in`, e.toString())
        }
    }

    async function populateCreds() {
        try {
            var data = await AsyncStorage.getItem(`superSecureCredentials`)
            if (data !== null) {
                data = JSON.parse(data)
                sendRequest(data.email, data.password)
            }
        } catch (e) {
            console.warn(e)
        }
    }

    useEffect(() => { populateCreds() }, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#1a78cf' }}>
            <View style={{ paddingTop: 130, paddingBottom: 30, alignContent: 'center' }}>
                <Text style={{ color: '#FFF', fontWeight: 'bold', paddingBottom: 15, fontSize: 30, textAlign: 'center' }}>Login into faste</Text>
                <Text style={{ color: '#fff', opacity: 0.80, fontSize: 20, textAlign: 'center' }}>make the world a better place</Text>
            </View>
            <View style={{ padding: 48, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput value={email} style={{ width: '100%', marginBottom: 20 }} placeholder='email address' onChangeText={setEmail} />
                <TextInput secureTextEntry={true} value={password} style={{ width: '100%', marginBottom: 25 }} placeholder='password' onChangeText={setPassword} />
                <Button color='#fff' onPress={doLogin} style={UiStyles.uiButton}>Sign in</Button>
                <Button color='#333' onPress={callback} style={UiStyles.uiButtonAlt}>Register an Account</Button>
            </View>
        </View>
    )
}

export default LoginScreen
