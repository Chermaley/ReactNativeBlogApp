import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { AboutScreen } from "../screens/AboutScreen";
import { navigatorOptions } from './Routes';
import { DrawerIcon } from '../components/DrawerIcon';

const Stack = createStackNavigator();

export const AboutStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={({navigation}) => ({
            ...navigatorOptions,
            headerLeft: () => <DrawerIcon navigation={navigation}/>,
            headerTitle: "About us"
            
        })}>
            <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
    )
}