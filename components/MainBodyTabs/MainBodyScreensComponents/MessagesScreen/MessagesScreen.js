import React, { useState, useEffect } from 'react';
import { View, ScrollView, RefreshControl, Text } from 'react-native';
import Conversation from './Conversation/Conversation';
import EmptyConversation from './Conversation/EmptyConversation';
import axios from 'axios';
import config from '../../../../config/app';
import store from '../../../../helpers/store';
import Network from '../../../../helpers/Network';

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const MessagesScreen = (props) => {

    const [conversations, setConversations] = useState({});
    const [userIdToName, setUserIdToName] = useState({});
    const [currentUserId, setCurrentUserId] = useState('');
    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            getUserConversations();
            let otherUserId = store.getState().newMessageUser.userId;
            if(otherUserId !== undefined && otherUserId !== '' && otherUserId in conversations){
                store.dispatch({
                    type: 'SET_NEW_MESSAGE_USER', newMessageUser: {userId : '', userName: ''}
                });
                openChatScreen(otherUserId);
            }
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    useEffect(() => {
        let otherUserId = store.getState().newMessageUser.userId;
        if(otherUserId !== undefined && otherUserId !== '' && otherUserId in conversations){
            store.dispatch({
                type: 'SET_NEW_MESSAGE_USER', newMessageUser: {userId : '', userName: ''}
            });
            openChatScreen(otherUserId);
        }
    }, [conversations])

    const getUserConversations = () => {
        let userId = '';
        Network.getUserData().then((user)=>{ 
                userId = user._id; 
                setCurrentUserId(userId); 
                return user._id; 
            }).then((userId) => {
                return axios.get(config.endpoint + `/api/users/`+ userId + '/messages')
            }).then(({data}) => {
                if (data.error) {
                    throw new Error('Invalid login request, please try again')
                }
                setupConversations(userId, data.messages);
                
                // Artificial loading time
                wait(1000).then(() => setRefreshing(false));
            }).catch(err => {
                console.error(err)
            });    
    }

    const setupConversations = (currentUserId, messages) => {
        const convoObject = {};
        const newUserIdToName = {...userIdToName};
        for(const message of messages){
            // Set the id of the other user involved in conversation
            let otherUserId = '';
            let otherUserName = '';
            if(message.senderId !== currentUserId){
                otherUserId = message.senderId;
                otherUserName = message.senderName;
            }else if(message.receiverId !== currentUserId){
                otherUserId = message.receiverId;
                otherUserName = message.receiverName;
            }
            newUserIdToName[otherUserId] = otherUserName;

            // Add message to convo object
            if(otherUserId in convoObject){
                convoObject[otherUserId].push(message);
            }else{
                convoObject[otherUserId] = [message];
            }
        }

        let otherUserId = store.getState().newMessageUser.userId;
        if(otherUserId !== undefined && otherUserId !== '' && !(otherUserId in convoObject)){
            convoObject[otherUserId] = [];
            newUserIdToName[otherUserId] = store.getState().newMessageUser.userName;
        }
        setUserIdToName(newUserIdToName);
        setConversations(convoObject); 
    }

    const openChatScreen = (key) => {
        // get conversation and pass it to chat screen
        props.navigation.navigate('Chat', {
            messages: conversations[key],
            otherUserId: key,
            otherUserName: userIdToName[key],
            currentUserId: currentUserId,
            getUserConversations: getUserConversations,
        });
    }

    const getShortForm = (name) => {
        if(name){
            return name.substring(0,2).toUpperCase();
        }else{
            return 'ME';
        }
        
    }

    // TODO Sort by date!!!
    const getLastMessage = (messages) => {
        if(messages.length === 0){
            return '';
        }else{
            return messages[messages.length-1].content;
        }
    }

    const conversationComponentList = [];
    for(const key of Object.keys(conversations)){
            conversationComponentList.push(
                <Conversation 
                    key={key}
                    name={userIdToName[key]} 
                    lastMessage={getLastMessage(conversations[key])} 
                    shortForm={getShortForm(userIdToName[key])}
                    openChatScreen={()=> openChatScreen(key)}/>
            )
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getUserConversations();
      }, [refreshing]);

    return (
        <View>
            <ScrollView
                //contentContainerStyle={{flex: 1}}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                  }>
                {conversationComponentList}
                {conversationComponentList.length === 0 && <EmptyConversation/>}
            </ScrollView>
        </View>
    );
}

export default MessagesScreen;