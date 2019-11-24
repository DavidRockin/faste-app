import React, { useState, useEffect } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import Conversation from './Conversation/Conversation';
import axios from 'axios';
import config from '../../../../config/app';
import Network from '../../../../helpers/Network';

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const MessagesScreen = (props) => {

    const [conversations, setConversations] = useState([]);
    const [userIdToName, setUserIdToName] = useState({});
    const [currentUserId, setCurrentUserId] = useState('');
    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        getUserConversations();
    }, [props.navigation]);

    const getUserConversations = () => {
        let userId = '';
        Network.getUserData()
            .then((user)=>{ userId = user._id; return user._id; })
            .then((userId) => {return axios.get(config.endpoint + `/api/users/`+ userId + '/messages')})
            .then(({data}) => {
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
        setCurrentUserId(currentUserId);
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
            setUserIdToName({...userIdToName, [otherUserId]: otherUserName});
            
            // Add message to convo object
            if(otherUserId in convoObject){
                convoObject[otherUserId].push(message);
            }else{
                convoObject[otherUserId] = [message];
            }
        }
        setConversations(convoObject); 
    }

    const openChatScreen = (key) => {
        // get conversation and pass it to chat screen
        props.navigation.navigate('Chat', {
            messages: conversations[key],
            otherUserId: key,
            currentUserId: currentUserId,
            getUserConversations: getUserConversations,
        });
    }

    const getShortForm = (name) => {
        if(name){
            return name.substring(0,2).toUpperCase();
        }else{
            return 'DE';
        }
        
    }

    // TODO Sort by date!!!
    const getLastMessage = (messages) => {
        return messages[messages.length-1].content;
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
            </ScrollView>
        </View>
    );
}

export default MessagesScreen;