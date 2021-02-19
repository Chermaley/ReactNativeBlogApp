import React from 'react';
import { MainScreen } from "../../screens/MainScreen";
import {createStackNavigator} from "@react-navigation/stack"
import { PostScreen } from '../../screens/PostScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../../components/AppHeaderIcon';
import { PostNavProps, PostStackParamList } from './types/PostStackParamList';
import { DrawerIcon } from '../../components/DrawerIcon';
import { TabnavigatorOptions } from '../TabNavigatorOptions';

const Stack = createStackNavigator<PostStackParamList>();

export const PostStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={TabnavigatorOptions}>
            <Stack.Screen name="Main" component={MainScreen} options={({navigation}: PostNavProps<'Main'>) => ({
                headerTitle: 'Blog',
                headerRight: () => {
                    return (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item title="Take photo" 
                                iconName="ios-camera" 
                                onPress={() => navigation.navigate('CreateStack', {})}/>
                        </HeaderButtons>
                    )
                },
                headerLeft: () => <DrawerIcon navigation={navigation}/>
            })}/>

            <Stack.Screen name="Post" component={PostScreen} options={({route}: PostNavProps<'Post'>) => {
                    const iconName = route.params.booked ? 'ios-star' : 'ios-star-outline'

                    const postId = route.params.postId

                    return {
                        headerTitle: `Post ${postId}`,
                        headerRight: () => {
                            return (
                                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                    <Item title="Favorites" 
                                        iconName={iconName}
                                        onPress={() => console.log('OOOO')}/>
                                </HeaderButtons>
                            )
                        },
                    }
            }}/>
        </Stack.Navigator>
    )
}