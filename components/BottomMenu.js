import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from './MainBodyTabs/MainBodyScreensComponents/HomeScreen';
import SettingsScreen from './MainBodyTabs/MainBodyScreensComponents/SettingsScreen';

const BottomMenuNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-home" color={tintColor} size={24} />
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: "Settings",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-settings" color={tintColor} size={24} />
            )
        }
    }
},
    {
        barStyle: { backgroundColor: "#61B9F9" },
        initialRouteName: "Home",
        order: ["Home", "Settings"]
    });

const BottomMenuContainer = createAppContainer(BottomMenuNavigator);

export default BottomMenuContainer;