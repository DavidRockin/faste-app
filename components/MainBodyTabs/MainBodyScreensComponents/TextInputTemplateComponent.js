import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

const TextInputTemplateComponent = ({ textInputCaption, textInputBody, onChangeHandler }) => {

    if (textInputCaption === "Description") {
        return (
            <TextInput style={{ height: 200 }}
                textAlignVertical="top"
                multiline={true}
                label={textInputCaption}
                numberOfLines={4}
                mode={"outlined"}
                onChangeText={(event) => onChangeHandler(event)}
                value={textInputBody}
            />
        );
    }
    if (textInputCaption === "#") {
        return (
            <>
                <TextInput
                    label={textInputCaption}
                    mode={"outlined"}
                    onChangeText={onChangeHandler}
                    value={textInputBody}
                />
            </>
        );
    }

    else {
        return (
            <TextInput
                label={textInputCaption}
                mode={"outlined"}
                onChangeText={onChangeHandler}
                value={textInputBody}
            />
        );
    }
};

export default TextInputTemplateComponent;