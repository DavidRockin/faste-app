import React, { useState, useEffect } from 'react';
import { Alert, View, Text, StyleSheet, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
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

const HomeScreen = () => {
    const [ posts, setPosts ] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);


    const getPosts = () => {
        Network.getAdListings()
        .then(resp => {
            setPosts(resp.ads.reverse());
            
            // Artificial loading time
            wait(1000).then(() => setRefreshing(false));
        })
        .catch(err => {
            console.log(err)
            Alert.alert(`Error`, err.statusText || err.toString())
        });
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getPosts();
      }, [refreshing]);

    useEffect(() => {
        getPosts();
      }, []);

    return (
        <View style={styles.mainMenuContainer}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                  }>

                    {posts.map((v, k) => {
                        return <Post postData={v} key={k} />
                    })
                }
            </ScrollView>
        </View>
    );
}

export default HomeScreen;