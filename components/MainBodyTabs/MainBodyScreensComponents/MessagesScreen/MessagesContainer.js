import React, { useState } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ChatScreen from './ChatScreen/ChatScreen';
import MessagesScreen from './MessagesScreen';
import { createAppContainer } from 'react-navigation';

const MessagesStackNavigator = createStackNavigator(
    {
        Messages: {
            screen: (props) => {
                //console.log(props);
                //console.log(props.navigation.getParam('action'))
                return <MessagesScreen {...props} />
            },
            navigationOptions: {
                header: null,
            }
        },
        Chat: {
            screen: ChatScreen,
            navigationOptions: {
                title: 'Message',
            }
        }
    },
    {
        initialRouteName: 'Messages'
    }
);

const MessagesContainer = createAppContainer(MessagesStackNavigator);
export default MessagesContainer;