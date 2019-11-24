import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    post: {
        flex: 1,
        backgroundColor: '#fff'
    },
    titleSection: {
        flex:1,
        flexDirection: 'row',
    },
    title: {
        fontSize: '2rem',
    },
    icon: {
        size: '50rem',
    }
});

const Post = ({ postData }) => (
    <Card>
        <Card.Title style={styles.titleSection}
            title={ postData.title || 'Untitled Listing' } style={styles.title}
            left={(props) => (<Avatar.Icon style={styles.icon} icon="folder" />)}
        />
        <Card.Content>
            <Title>{ (postData.type || 'requesting').toUpperCase()} : { postData.title || 'Untitled Listing' }</Title>
            <Paragraph>{ postData.description || 'No additional information given...' }</Paragraph>
            <Paragraph>{ postData.coords ? postData.coords.latitude + ' , ' + postData.coords.longitude : '' }</Paragraph>
        </Card.Content>
        <Card.Actions>
            <Button>Message</Button>
        </Card.Actions>
    </Card>
);

export default Post;