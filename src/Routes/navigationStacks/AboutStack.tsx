import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { AboutScreen } from "../../screens/AboutScreen";
import { DrawerIcon } from '../../components/DrawerIcon';
import { TabnavigatorOptions } from '../TabNavigatorOptions';

const Stack = createStackNavigator();

export const AboutStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={({navigation}) => ({
            ...TabnavigatorOptions,
            headerLeft: () => <DrawerIcon navigation={navigation}/>,
            headerTitle: "About us"
            
        })}>
            <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
    )
}