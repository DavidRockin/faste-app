import React, { useState, useEffect } from 'react';
import { Alert, View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import Post from './Post'
import Network from '../../../../helpers/Network';

const styles = StyleSheet.create({
    mainMenuContainer: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const HomeScreen = (props) => {
    const [ posts, setPosts ] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        let isSubscribed = true;
        setRefreshing(true);
        Network.getAdListings()
        .then(resp => {
            if(isSubscribed){
                setPosts(resp.ads.reverse());
                // Artificial loading time
                wait(1000).then(() => setRefreshing(false));
            }
        }).catch(err => {
            console.log(err)
            Alert.alert(`Error`, err.statusText || err.toString())
        });
        return () => isSubscribed = false;
    }, [refreshing]);

    const newMessage = (adOwnerId) => {
        props.navigation.navigate('Messages', {
            otherUserId: 'teststs',
            action: 'createMessage'
        });
    }

    useEffect(() => {
        let isSubscribed = true;
        Network.getAdListings()
        .then(resp => {
            if(isSubscribed){
                setPosts(resp.ads.reverse());
                // Artificial loading time
                wait(1000).then(() => setRefreshing(false));
            }
        }).catch(err => {
            console.log(err)
            Alert.alert(`Error`, err.statusText || err.toString())
        });
        return () => isSubscribed = false;
    }, []);

    return (
        <View style={styles.mainMenuContainer}>
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {posts.map((v, k) => {
                        return <Post postData={v} key={k} newMessage={newMessage} />
                    })
                }
            </ScrollView>
        </View>
    );
}

export default HomeScreen;