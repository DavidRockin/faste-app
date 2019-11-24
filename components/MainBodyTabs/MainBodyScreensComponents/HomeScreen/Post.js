import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import moment from 'moment'

import getDistance from 'geolib/es/getDistance'
import store from '../../../../helpers/store';

const Post = ({ postData, newMessage }) => {
    
    const calculatePostedAgo = (dateCreated) => {
        const dateRightNow = Date.now();
        const datePosted = new Date(dateCreated);
        return moment.duration(dateRightNow-datePosted).humanize() + ' ago';
    }

    const calculateDistance = (coords) => {
        if (!coords || coords.latitude === null || store.getState().coords.latitude === null)
            return ''
        const m = getDistance(coords, store.getState().coords, accuracy = 1)
        if (m >= 0) return m > 1000 ? `· ${(m/1000).toFixed(1)} km` : `· ${m} m`
    }

    return (
        <TouchableHighlight onPress={()=>{}} underlayColor={'gainsboro'} >
            <Card style={{paddingTop: 16, paddingBottom: 16 }}>
                <View style={{ flex: 4, flexDirection: 'row' }}>
                    <View style={{ flex: 3 }}>
                        <Card.Title 
                            title={ '\t' + (postData.title || 'Untitled Listing')  } 
                            subtitle={'\t'+ (postData.type || 'requesting').toUpperCase() + ' · ' + calculatePostedAgo(postData.created_at) + ' ' + (calculateDistance(postData.coords) || '')}
                            left={(props) => (<Avatar.Icon icon="folder" />)}
                        />
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', paddingTop: 8, position: 'absolute', right: 0 }}>
                        <Card.Actions>
                            <Button onPress={()=> {newMessage(postData.userId, postData.userName)}}>Message</Button>
                        </Card.Actions>
                    </View>
                </View>
            </Card>
        </TouchableHighlight>
    );
};

export default Post;