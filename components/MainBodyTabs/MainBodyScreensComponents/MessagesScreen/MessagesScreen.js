import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Conversation from './Conversation/Conversation';

const MessagesScreen = () => {

    const [conversations, setConversations] = useState([
        {
            id: 'fdjaslkjf',
            name: 'George',
            lastMessage: 'Stop texting me',
        },
        {
            id: 'fdsklfhajk',
            name: 'Sarah',
            lastMessage: 'Stop texting me',    
        },
        {
            id: 'oioughj',
            name: 'Philip',
            lastMessage: 'Stop texting me',
        }
    ]);

    const getUserConversations = () => {
        // get id
        // axios get messages
        // loop through messages and put them into object where keys are receivers
    }

    const openChatScreen = () => {
        // get conversation and pass it to chat screen
    }

    const getShortForm = (name) => {
        return name.substring(0,2).toUpperCase();
    }

    const conversationComponentList = [];
    for(let i = 0; i < conversations.length; i++){
        const name = conversations[i].name;
        const shortForm = getShortForm(name);
        conversationComponentList.push(
            <Conversation 
                key={conversations[i].id}
                name={name} 
                lastMessage={conversations[i].lastMessage} 
                shortForm={shortForm}
                openChatScreen={()=> openChatScreen(conversations[i].id)}/>
        )
    }

    return (
        <View style={{ }}>
            <ScrollView>
                {conversationComponentList}   
            </ScrollView>
        </View>
    );
}

export default MessagesScreen;