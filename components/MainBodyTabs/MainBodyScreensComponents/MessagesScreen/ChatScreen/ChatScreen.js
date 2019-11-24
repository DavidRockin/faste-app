import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';
import config from '../../../../../config/app';

const ChatScreen = (props) => {

  const [messages, setMessages] = useState([]);

  useEffect(()=> { 
    const chatMessages = [];
    let paramMessages = props.navigation.getParam('messages');
    for(const message of paramMessages){
       chatMessages.push({
         _id: message._id,
         text: message.content,
        createdAt: message.created_at,
        user: {
          _id: message.senderId,
          name: message.senderName
        }
       });
    }
    setMessages(chatMessages.reverse());

  }, [props.navigation]);



  const onSend = (newMessage = []) => {
    setMessages(GiftedChat.append(messages, newMessage));
    let otherUserId = props.navigation.getParam('otherUserId');
    let currentUserId = props.navigation.getParam('currentUserId');
    if(otherUserId === undefined || currentUserId === undefined){
      console.error('otherUserId or currentUserId is undefined.');
      props.navigation.getParam('getUserConversations')();
    }else{
      axios.post(config.endpoint + '/api/users/' + currentUserId + '/messages', {
        content: newMessage[0].text,
        receiverId: otherUserId
      })
      .then(({data}) => {
        if (data.error) {
            throw new Error('Invalid message sending attempt.')
        }
        props.navigation.getParam('getUserConversations')();
      }).catch(err => {
          console.error(err)
      });  
    }
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => onSend(newMessage)}
      user={{
        _id: props.navigation.getParam('currentUserId')
      }}
    />
  );
};

export default ChatScreen;