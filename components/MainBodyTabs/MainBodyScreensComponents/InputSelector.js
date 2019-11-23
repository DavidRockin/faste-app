import React from 'react';
import { Picker, View } from 'react-native';

const InputSelector = ({ pickerValue, handler }) => {
    return (
        <View style={{flex:1}}>
            <Picker selectedValue={pickerValue} onValueChange={(selection) => handler(selection)}>
                <Picker.Item label="Select an option" value="" />
                <Picker.Item label="Offer" value="offer" />
                <Picker.Item label="Buy" value="buy" />
            </Picker>
        </View>
    );
}

export default InputSelector;
