import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { navigatorOptions } from './Routes';
import { DrawerIcon } from '../components/DrawerIcon';
import { CreateScreen } from '../screens/CreateScreen';
import { CreateStackParamList } from './types/CreateStackParamList';

const Stack = createStackNavigator<CreateStackParamList>();

export const CreateStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={({navigation}) => ({
            ...navigatorOptions,
            headerLeft: () => <DrawerIcon navigation={navigation}/>,
            headerTitle: "Create new post"
        })}>
            <Stack.Screen name="Create" component={CreateScreen}/>
        </Stack.Navigator>
    )
}