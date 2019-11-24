import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

const InputSelector = ({ pickerValue, handler }) => {

    const [isOffer, setOffer] = useState(false);

    const changePicker = (value) => {
        if(value === "offer"){
            setOffer(true);
        }
        else{
            setOffer(false);
        }
        handler(value);
    }

    useEffect(() => {
        setOffer(pickerValue === 'offer')
    }, [ pickerValue ])

    return (
            <View style={{flexDirection: "row", alignItems:"center", justifyContent:"center", padding: 20}}>
                <View style={{ flex: 1 }}>
                    <Button
                        mode={isOffer ? "contained" : "outlined"}
                        // style={{width: 100}}
                        onPress={() => changePicker("offer")}>
                            Offer
                    </Button>
                </View>
                <View style={{ flex: 1 }}>
                    <Button
                        mode={!isOffer ? "contained" : "outlined"}
                        // style={{width: 100}}
                        onPress={() => changePicker("request")}>
                            Request
                    </Button>
                </View>
            </View>
    );
}

export default InputSelector;
