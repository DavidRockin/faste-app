import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import moment from 'moment'

const Post = ({ postData }) => {
    
    const calculatePostedAgo = (dateCreated) => {
        const dateRightNow = Date.now();
        const datePosted = new Date(dateCreated);
        return 'Posted: '+ moment.duration(dateRightNow-datePosted).humanize() + ' ago';
    }

    return (
        <TouchableHighlight onPress={()=>{}} underlayColor={'gainsboro'} >
            <Card style={{paddingTop: 10, paddingBottom: 10}}>
                <Card.Title 
                    title={ '\t' + (postData.title || 'Untitled Listing')  } 
                    subtitle={'\t'+ (postData.type || 'requesting').toUpperCase()}
                    left={(props) => (<Avatar.Icon icon="folder" />)}
                />
                <Card.Content>
                    <Paragraph>{ calculatePostedAgo(postData.created_at) }</Paragraph>
                    <Paragraph>{ postData.description || 'No additional information given...' }</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button>Message</Button>
                </Card.Actions>
            </Card>
        </TouchableHighlight>
    );
};

export default Post;