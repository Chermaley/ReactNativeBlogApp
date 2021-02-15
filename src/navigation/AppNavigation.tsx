import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../THEME";
import { Platform } from 'react-native';
import { BookedScreen } from "../screens/BookedScreen";
import { Ionicons } from "@expo/vector-icons";
import { AboutScreen } from '../screens/AboutScreen';
import { CreateScreen } from '../screens/CreateScreen';


const navigatorOptions = {
    defaultNavigationOptions: {
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
    }
}

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: PostScreen
}, navigatorOptions)

const BookedNavigator = createStackNavigator({
    Booked: BookedScreen,
    Post: PostScreen
}, navigatorOptions)


const BottomNavigator = createBottomTabNavigator({
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarLabel: 'All',
            tabBarIcon: info => <Ionicons name='ios-albums' size={25} color={info.tintColor}/>
        }
    },
    Booked: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: info => <Ionicons name='ios-star' size={25} color={info.tintColor}/>
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: THEME.MAIN_COLOR
    }
});

const MainNavigator = createDrawerNavigator({
    PostTabs: {
        screen: BottomNavigator
    },
    About: {
        screen: AboutScreen
    },
    Create: {
        screen: CreateScreen
    }
});

export const AppNavigation = createAppContainer(MainNavigator);