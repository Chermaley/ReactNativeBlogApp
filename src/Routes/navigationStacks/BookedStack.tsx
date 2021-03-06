import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BookedScreen } from '../../screens/BookedScreen';
import { PostScreen } from '../../screens/PostScreen';
import { BookedStackParamList } from './types/BookedStackParams';
import { DrawerIcon } from '../../components/DrawerIcon';
import { TabnavigatorOptions } from '../TabNavigatorOptions';

const Stack = createStackNavigator<BookedStackParamList>();


export const BookedStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={TabnavigatorOptions}>
            <Stack.Screen name="Booked" component={BookedScreen} options={({navigation}) => ({
                headerTitle: 'Favorites',
                headerLeft: () => <DrawerIcon navigation={navigation} />
            })}/>
            <Stack.Screen name="Post" component={PostScreen}/>
        </Stack.Navigator>
    )
}