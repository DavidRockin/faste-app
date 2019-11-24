import React from 'react';
import { Avatar, Card, Divider } from 'react-native-paper';
import { TouchableHighlight } from 'react-native';

const EmptyConversation = (props) => (
        <>    
            <Card.Title 
                id={props.name}
                title={'No messages'}
                subtitle={'You can message people from the home page.'}
                style={{padding: 50}}
            />
            <Divider/>
        </>
);

export default EmptyConversation;