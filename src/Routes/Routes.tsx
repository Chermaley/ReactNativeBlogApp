import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { DrawerNavigator } from './navigationStacks/Drawer';


export const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}

