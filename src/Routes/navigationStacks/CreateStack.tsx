import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerIcon } from '../../components/DrawerIcon';
import { CreateScreen } from '../../screens/CreateScreen';
import { CreateStackParamList } from './types/CreateStackParamList';
import { TabnavigatorOptions } from '../TabNavigatorOptions';

const Stack = createStackNavigator<CreateStackParamList>();

export const CreateStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={({navigation}) => ({
            ...TabnavigatorOptions,
            headerLeft: () => <DrawerIcon navigation={navigation}/>,
            headerTitle: "Create new post"
        })}>
            <Stack.Screen name="Create" component={CreateScreen}/>
        </Stack.Navigator>
    )
}