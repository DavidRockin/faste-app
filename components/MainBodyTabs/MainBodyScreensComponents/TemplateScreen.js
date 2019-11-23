import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';

const TemplateScreen = () => {

    const [foodTitle, setFoodTitle] = useState("");

    const handleFoodTitleChange = (e) => {
        setFoodTitle(e.value);
    }

    return (
        <View style={{ flex: 1, alignContent: 'center'}}>
            <Text>lol Screen!</Text>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(event) => handleFoodTitleChange(event)}
            value={foodTitle}
            placeholderTextColor="black"
            placeholder="Offering"
            />
        </View>
    );
}

export default TemplateScreen;