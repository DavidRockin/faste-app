import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import store from '../../../helpers/store'
import { Colors } from 'react-native-paper';

const ExploreMapComponent = ({ latitude, longitude }) => {
    const [ posts, setPosts ] = useState([])
    
    useEffect(() => {
        setPosts(store.getState().posts)
    }, [])
    useEffect(() => {
        setPosts(store.getState().posts)
        store.subscribe(() => {
            setPosts(store.getState().posts)
        })
    }, [store])

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    longitude: longitude,
                    latitude: latitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude
                    }}
                    pinColor='blue'
                    title={"title"}
                    description={"description"}
                />
                {
                    posts.map((post, k) => {
                        return post.coords && post.coords.longitude ? <MapView.Marker
                            coordinate={post.coords}
                            key={k}
                            title={post.title || 'no title'}
                            description={post.description || 'no info'}
                        /> : <></>
                    })
                }
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})

export default ExploreMapComponent;