import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { PostStack } from './PostStack';
import { BookedStack } from './BookedStack';
import { THEME } from "../THEME";

const Tabs = createBottomTabNavigator();

export const TabsNavigator = () => {
    return( 
        <Tabs.Navigator screenOptions={({route}) => ({
            tabBarIcon: info => {
                let iconName: any

                if (route.name === 'PostStack') {
                    iconName = 'ios-albums'
                } else if (route.name === 'BookedStack') {
                    iconName = 'ios-star'
                }

                return <Ionicons name={iconName} size={25} color={info.color}/>
            }
        })} tabBarOptions={{
            activeTintColor: THEME.MAIN_COLOR
        }}>
            <Tabs.Screen name="PostStack" component={PostStack} options={{
                tabBarLabel: "All"
            }}/>
            <Tabs.Screen name="BookedStack" component={BookedStack} options={{
                tabBarLabel: "Favorites"
            }}/>
        </Tabs.Navigator>
    )
}