import React from 'react';
import { Picker, View } from 'react-native';
import { Button } from 'react-native-paper';

const InputSelector = ({ handler }) => {

    const changePicker = (value) => {
        handler(value);
    }

    return (
            <View style={{flexDirection: "row", alignItems:"center", justifyContent:"center", padding: 20}}>
                <View style={{ flex: 1 }}>
                    <Button
                        mode="outlined"
                        // style={{width: 100}}
                        onPress={() => changePicker("offer")}>
                            Offer
                    </Button>
                </View>
                <View style={{ flex: 1 }}>
                    <Button
                        mode="outlined"
                        // style={{width: 100}}
                        onPress={() => handler("buy")}>
                            Buy
                    </Button>
                </View>
            </View>
    );
}

export default InputSelector;
