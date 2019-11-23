import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: { _id: 2, name: 'Name' },
    },
  ]);

  const onSend = (newMessage = []) => {
    setMessages(GiftedChat.append(messages, newMessage));
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => onSend(newMessage)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default Example;