import React from 'react';
import { AboutStack } from './AboutStack';
import { CreateStack } from './CreateStack';
import { TabsNavigator } from './Tabs';
import { DrawerParamsList } from './types/DrawerParamsList';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator<DrawerParamsList>();

export const DrawerNavigator: React.FC = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen options={{
                title: 'Posts'
            }} name="Tabs" component={TabsNavigator}/>
            <Drawer.Screen options={{
                title: 'About'
            }} name="AboutStack" component={AboutStack}/>
            <Drawer.Screen options={{
                title: 'Create new post'
            }} name="CreateStack" component={CreateStack}/>
        </Drawer.Navigator>
    )
}