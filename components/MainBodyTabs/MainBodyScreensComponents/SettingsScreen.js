import React, { useState, useEffect } from 'react';
import { Text, View, Alert } from 'react-native';

import Network from '../../../helpers/Network'
import { TextInput, Button } from 'react-native-paper';

const SettingsScreen = () => {
    const [ userData, setUserData ] = useState(null)
    const [ email, setEmail ] = useState('')
    const [ name, setName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ telephone, setTelephone ] = useState('')

    function saveChanges() {
        Network.updateUserInfo({
            email, name, password, telephone
        })
        .then(userData => {
            console.log(userData)
            Alert.alert(`Success`, `You updated your settings`)
        })
        .catch(err => {
            console.log(err)
            Alert.alert(`Error`, err.stausText || err.toString())
        })
    }

    useEffect(() => {
        setPassword('')

        if (userData !== null) return

        Network.getUserData()
        .then(data => {
            setUserData(data)
            setEmail(data.email)
            setName(data.name)
            setTelephone(data.telephone)
        })
        .catch(err => {
            Alert.alert(`Error`, err.stausText || err.toString())
        })
    }, [])

    return (
        <View style={{ flex: 4, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
                <Text>photo will be here :)</Text>
            </View>
            <View style={{ flex: 7, width: '100%' }}>
                <View style={{ flex: 1, width: '100%' }}>
                    <Text style={{ fontSize: 18, padding: 8 }}>📧 Your email</Text>
                    <TextInput value={email} onChangeText={setEmail} />
                </View>
                <View style={{ flex: 1, width: '100%' }}>
                    <Text style={{ fontSize: 18, padding: 8 }}>👤 Your Name</Text>
                    <TextInput value={name} onChangeText={setName} />
                </View>
                <View style={{ flex: 1, width: '100%' }}>
                    <Text style={{ fontSize: 18, padding: 8 }}>🔒 Password</Text>
                    <TextInput value={password} onChangeText={setPassword} />
                </View>
                <View style={{ flex: 1, width: '100%' }}>
                    <Text style={{ fontSize: 18, padding: 8 }}>📞 Your Phone Number</Text>
                    <TextInput value={telephone} onChangeText={setTelephone} />
                </View>
                <View style={{ flex: 1, width: '100%' }}>
                    <Button onPress={saveChanges}>
                        <Text>Save Changes</Text>
                    </Button>
                </View>
            </View>
            <View style={{ flex: 1, height: 90 }}>
                <Button onPress={Network.signout}>
                    <Text>Sign Out</Text>
                </Button>
            </View>
        </View>
    );
}

export default SettingsScreen;