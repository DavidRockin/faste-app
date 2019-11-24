import React, { useState } from 'react';
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
    const [ loading, setLoading ] = useState(true);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, [refreshing]);

    if (loading && posts.length === 0) {
        setLoading(false)
        Network.getAdListings()
        .then(resp => {
            setPosts(resp.ads)
        })
        .catch(err => {
            console.log(err)
            Alert.alert(`Error`, err.statusText || err.toString())
        })
    }

    return (
        <View style={styles.mainMenuContainer}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                  }>
                {loading
                    ? <ActivityIndicator size="large" style={{ marginTop: 50 }}/>
                    : posts.reverse().map((v, k) => {
                        return <Post postData={v} key={k} />
                    })
                }
            </ScrollView>
        </View>
    );
}

export default HomeScreen;