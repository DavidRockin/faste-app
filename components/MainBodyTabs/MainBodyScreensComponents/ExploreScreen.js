import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ExploreMapComponent from './ExploreMapComponent';

const ExploreScreen = () => {

    const [geolocationCustom, setGeolocation] = useState({
        ready: false,
        where: { lat: null, lng: null },
        error: null
    });

    useEffect(() => {
        let geoOptions = {
            // enableHighAccuracy: true,
            timeOut: 20000,
            maximumAge: 60 * 60 * 24
        };
        setGeolocation({ ready: false, error: null });
        navigator.geolocation.getCurrentPosition(geoSuccess, geoFailure, geoOptions)
    }, []);

    geoSuccess = (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        setGeolocation({
            ready: true,
            where: { lat: position.coords.latitude, lng: position.coords.longitude }
        })
    }
    geoFailure = (err) => {
        setGeolocation({ error: err.message });
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {!geolocationCustom.ready && (
                <Text>Using Geolocation in React Native.</Text>
            )}
            {geolocationCustom.error && (
                <Text>{geolocationCustom.error}</Text>
            )}
            {
                geolocationCustom.ready && (
                    <ExploreMapComponent longitude={geolocationCustom.where.lng} latitude={geolocationCustom.where.lat}/>
                )
            }
        </View>
    );
}

export default ExploreScreen;