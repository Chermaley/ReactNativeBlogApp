import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { Platform } from 'react-native';
import { THEME } from '../THEME';
import { TabsNavigator } from './Tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutStack } from './AboutStack';
import { CreateStack } from './CreateStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Post" component={TabsNavigator}/>
            <Drawer.Screen name="About" component={AboutStack}/>
            <Drawer.Screen name="Create" component={CreateStack}/>
        </Drawer.Navigator>
    )
}

export const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}

export const navigatorOptions = {
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
}
