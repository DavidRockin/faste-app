import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import ButtonComponent from './ButtonComponent';

const TemplateScreen = () => {

    const [foodTitle, setFoodTitle] = useState("");

    const handleFoodTitleChange = (e) => {
        setFoodTitle(e.value);
    }

    return (
        <View style={{ flex: 1, alignContent: 'center' }}>
            <TextInput
                label='Food Title'
                mode={"outlined"}
                onChangeText={(event) => handleFoodTitleChange(event)}
                value={foodTitle}
            />
            <TextInput
                label='Food Title'
                mode={"outlined"}
                onChangeText={(event) => handleFoodTitleChange(event)}
                value={foodTitle}
            />
            <TextInput
                label='Address'
                mode={"outlined"}
                onChangeText={(event) => handleFoodTitleChange(event)}
                value={foodTitle}
            />
            <TextInput style={{height: 200}}
                textAlignVertical="top"
                multiline={true}
                label='Short Description'
                numberOfLines={4}
                mode={"outlined"}
                onChangeText={(event) => handleFoodTitleChange(event)}
                value={foodTitle}
            />

            <ButtonComponent />

        </View>
    );
}

export default TemplateScreen;