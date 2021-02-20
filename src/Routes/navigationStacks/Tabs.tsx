import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { PostStack } from './PostStack';
import { BookedStack } from './BookedStack';
import { THEME } from "../../THEME";
import { TabsParamList } from './types/TabsStackParams';

const Tabs = createBottomTabNavigator<TabsParamList>();

export const TabsNavigator: React.FC = () => {
    return( 
        <Tabs.Navigator screenOptions={({route}) => ({
            tabBarIcon: info => {
                let iconName: any

                if (route.name === 'AllPostStack') {
                    iconName = 'ios-albums'
                } else if (route.name === 'BookedPostStack') {
                    iconName = 'ios-star'
                }

                return <Ionicons name={iconName} size={25} color={info.color}/>
            }
        })} tabBarOptions={{
            activeTintColor: THEME.MAIN_COLOR
        }}>
            <Tabs.Screen name="AllPostStack" component={PostStack} options={{
                tabBarLabel: "All"
            }}/>
            <Tabs.Screen name="BookedPostStack" component={BookedStack} options={{
                tabBarLabel: "Favorites"
            }}/>
        </Tabs.Navigator>
    )
}