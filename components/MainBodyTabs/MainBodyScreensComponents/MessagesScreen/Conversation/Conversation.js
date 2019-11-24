import React from 'react';
import { Avatar, Card, Divider } from 'react-native-paper';
import { TouchableHighlight } from 'react-native';

const Conversation = (props) => (
    <TouchableHighlight onPress={props.openChatScreen} underlayColor={'gainsboro'} >
        <>
            <Card.Title 
                id={props.name}
                title={'\t' + props.name}
                subtitle={'\t' + props.lastMessage}
                style={{padding: 50}}
                left={()=> (<Avatar.Text label={props.shortForm} />)}
            />
            <Divider/>
        </>
    </TouchableHighlight>
);

export default Conversation;