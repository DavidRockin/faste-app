import React, { useState, useEffect } from 'react';
import { View, Keyboard, TouchableWithoutFeedback, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import ButtonComponent from './ButtonComponent';
import TextInputTemplateComponent from "./TextInputTemplateComponent";
import InputSelector from './InputSelector';
import { ScrollView } from 'react-native-gesture-handler';
import Network from '../../../helpers/Network';

import store from '../../../helpers/store'

const TemplateScreen = (props) => {
    const [coords, setCoords] = useState({})
    const [templateFoodTitle, setTemplateFoodTitle] = useState("");
    const [templateDescription, setTemplateDescription] = useState("");
    const [numberOfFood, setNumberOfFood] = useState("");
    const [pickerValue, setPickerValue] = useState("request");

    const [foodOfferList, setFoodOfferList] = useState([{id: 0, name:"", numberOfItems: 0}]);

    console.log("foodOfferList", foodOfferList.length, foodOfferList);

    const handleFoodTitleChange = (input) => {
        console.log("Foooood", input);
        setTemplateFoodTitle(input);
    }

    const handleTemplateDescription = (input) => {
        setTemplateDescription(input);
    }

    const handleNumberOfFood = (input) => {
        setNumberOfFood(input);
    }

    const handleSelectionChange = (selected) => {
        if (selected) {
            console.log(selected);
            setPickerValue(selected);
        }
    }

    const submitCallback = () => {
        Network.createAd({
            type: pickerValue,
            title: templateFoodTitle,
            description: templateDescription,
            food: foodOfferList,
            coords: store.getState().coords
        })
        .then(resp => {
            props.navigation.navigate('Home')
            return
        })
        .catch(err => {
            Alert.alert(`Error`, err.statusText || err.toString())
        })
    }

    function addFoodOfferItem() {

        console.log("foodOfferList", foodOfferList.length, foodOfferList);
        const newID = foodOfferList.length;
        const newItem = {
            id: newID + 1,
            name: "",
            numberOfItems: 0,
        };
        setFoodOfferList(foodOfferList.concat(newItem));
    }

    const removeFoodOfferItem = (id) => {
        const itemToBeDeleted = foodOfferList.find(item => item.id === id);
        console.log("foodOfferList", foodOfferList.length, foodOfferList);
        if (itemToBeDeleted) {
            const foodOfferItemsAfterRemoval = foodOfferList.filter(item => item.id != itemToBeDeleted.id);
            setFoodOfferList(foodOfferItemsAfterRemoval);
        }
        else return;
    }

    const fullForm = (selectedFormType) => {
        if (selectedFormType === "offer") {
            return (
                <>
                    <View style={{ flexDirection: "row", justifyContent: "center", flex: 5, marginBottom: 16 }}>
                        <Button contentStyle={{ height: 50 }}
                            value="Add"
                            style={{ borderRadius: 100, textAlign: "center" }}
                            mode="outlined" onPress={addFoodOfferItem}>
                            Add another Food Item
                        </Button>
                    </View>

                    {
                        foodOfferList.length > 0 && foodOfferList.map((item, k) => {
                            return (
                                <View key={item.id} style={{ flexDirection: "row", flex: 5 }}>
                                    <View style={{ flex: 3 }}>
                                        <TextInputTemplateComponent style={{ width: '80%' }}
                                            textInputCaption={"Food name"}
                                            textInputBody={item.templateFoodTitle}
                                            onChangeHandler={handleFoodTitleChange} />
                                    </View>
                                    <View style={{ paddingLeft: 10, flex: 2 }}>
                                        <TextInputTemplateComponent style={{ width: '80%' }}
                                            textInputCaption={"#"}
                                            textInputBody={item.numberOfFood}
                                            onChangeHandler={handleNumberOfFood} />
                                    </View>
                                    <View style={{ flex: 1, alignSelf: "center", alignContent: "center" }}>
                                        {
                                            foodOfferList.length >= 1 && k > 0?
                                                <Button contentStyle={{ height: 50 }}
                                                    icon="close"
                                                    style={{ textAlign: "center", borderRadius: 100, marginLeft: 3 }}
                                                    mode="outlined" onPress={() => removeFoodOfferItem(item.id)}>
                                                </Button>
                                                :
                                                <></>
                                        }
                                    </View>
                                </View>
                            );
                        })

                    }

                    <TextInputTemplateComponent textInputCaption={"Description"} textInputBody={templateDescription} onChangeHandler={handleTemplateDescription} />
                    <ButtonComponent clickCallback={submitCallback} />
                </>
            );
        }
        else if (selectedFormType === 'request')
            return (
                <>
                    <TextInputTemplateComponent textInputCaption={"Food name"} textInputBody={templateFoodTitle} onChangeHandler={handleFoodTitleChange} />
                    <TextInputTemplateComponent textInputCaption={"Description"} textInputBody={templateDescription} onChangeHandler={handleTemplateDescription} />
                    <ButtonComponent clickCallback={submitCallback} />
                </>
            );
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ScrollView scrollEnabled={pickerValue ? true : false}>
                <View style={{ flex: 3, alignContent: 'center', padding: 20}}>
                    <InputSelector pickerValue={pickerValue} handler={handleSelectionChange} />
                    {fullForm(pickerValue)}
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

export default TemplateScreen;