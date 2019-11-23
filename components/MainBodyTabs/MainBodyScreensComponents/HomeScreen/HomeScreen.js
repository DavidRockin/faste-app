import React, { useState } from 'react';
import { Alert, View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Post from './Post'
import Network from '../../../../helpers/Network';
import { isLogicalExpression } from '@babel/types';

const styles = StyleSheet.create({
    mainMenuContainer: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

const HomeScreen = () => {
    const [ posts, setPosts ] = useState([])
    const [ loading, setLoading ] = useState(true)

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
        <>
            <View style={styles.mainMenuContainer}>
                <ScrollView>
                    {loading
                        ? <ActivityIndicator size="large" style={{ marginTop: 50 }}/>
                        : posts.map((v, k) => {
                            return <Post data={v} key={k} />
                        })
                    }
                </ScrollView>
            </View>
        </>
    );
}

export default HomeScreen;