import React, { useState } from 'react';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-paper';

import ButtonComponent from './ButtonComponent';
import TextInputTemplateComponent from "./TextInputTemplateComponent";
import InputSelector from './InputSelector';
import { ScrollView } from 'react-native-gesture-handler';

const TemplateScreen = () => {
    const [templateFoodTitle, setTemplateFoodTitle] = useState("");
    const [templateDescription, setTemplateDescription] = useState("");
    const [numberOfFood, setNumberOfFood] = useState("");
    const [formType, setFormType] = useState("selectType");

    const [pickerValue, setPickerValue] = useState("");

    const handleFoodTitleChange = (e) => {
        setTemplateFoodTitle(e.value);
    }

    const handleTemplateDescription = (e) => {
        setTemplateDescription(e.value);
    }

    const handleNumberOfFood = (e) => {
        setNumberOfFood(e.value);
    }

    const handleSelectionChange = (selected) => {
        if (selected) {
            console.log(selected);
            setPickerValue(selected);
        }
    }

    const fullForm = (selectedFormType) => {
        if (selectedFormType === "offer") {
            return (
                <>
                    <View style={{ flexDirection: "row", flex: 5 }}>
                        <View style={{ flex: 3 }}>
                            <TextInputTemplateComponent style={{ width: '80%' }} textInputCaption={"Food name"} textInputBody={templateFoodTitle} onChangeHandler={handleFoodTitleChange} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInputTemplateComponent style={{ width: '80%' }} textInputCaption={"#"} textInputBody={templateFoodTitle} onChangeHandler={handleNumberOfFood} />
                        </View>
                        <View style={{ flex: 1, alignSelf: "center", alignContent: "center" }}>
                            <Button contentStyle={{height: 50}} icon="close" style={{textAlign: "center", borderRadius: 100, width: 30 }} mode="outlined" onPress={() => console.log('Pressed')}>
                            </Button>
                        </View>
                    </View>
                    <TextInputTemplateComponent textInputCaption={"Description"} textInputBody={templateDescription} onChangeHandler={handleTemplateDescription} />
                    <ButtonComponent />
                </>
            );
        }
        else
            return (
                <>
                    <TextInputTemplateComponent textInputCaption={"Food name"} textInputBody={templateFoodTitle} onChangeHandler={handleFoodTitleChange} />
                    <TextInputTemplateComponent textInputCaption={"Description"} textInputBody={templateDescription} onChangeHandler={handleTemplateDescription} />
                    <ButtonComponent />
                </>
            );
    }

    const emptyForm = () => {
        return (
            <>

            </>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ScrollView scrollEnabled={pickerValue ? true : false}>
                <View style={{ flex: 1, alignContent: 'center' }}>
                    <InputSelector pickerValue={pickerValue} handler={handleSelectionChange} />
                    {pickerValue ? fullForm(pickerValue) : emptyForm()}
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

export default TemplateScreen;