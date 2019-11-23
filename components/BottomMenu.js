import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from './MainBodyTabs/MainBodyScreensComponents/HomeScreen/HomeScreen';
import SettingsScreen from './MainBodyTabs/MainBodyScreensComponents/SettingsScreen';
import MessagesScreen from './MainBodyTabs/MainBodyScreensComponents/MessagesScreen/MessagesScreen';
import ExploreScreen from './MainBodyTabs/MainBodyScreensComponents/ExploreScreen';
import TemplateScreen from './MainBodyTabs/MainBodyScreensComponents/TemplateScreen';


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
    },
    Messages: {
        screen: MessagesScreen,
        navigationOptions: {
            tabBarLabel: "Messages",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-paper-plane" color={tintColor} size={24} />
            )
        }
    },
    Explore: {
        screen: ExploreScreen,
        navigationOptions: {
            tabBarLabel: "Explore",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-globe" color={tintColor} size={24} />
            )
        }
    },
    Template: {
        screen: TemplateScreen,
        navigationOptions: {
            tabBarLabel: "Template",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-add-circle-outline" color={tintColor} size={24} />
            )
        }
    }
},
    {
        barStyle: { backgroundColor: "#1a78cf" },
        initialRouteName: "Home",
        order: ["Home", "Explore", "Template", "Messages", "Settings"]
    });

const BottomMenuContainer = createAppContainer(BottomMenuNavigator);

export default BottomMenuContainer;