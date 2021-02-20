import React from 'react';
import { AboutStack } from './AboutStack';
import { CreateStack } from './CreateStack';
import { TabsNavigator } from './Tabs';
import { DrawerParamsList } from './types/DrawerParamsList';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { THEME } from '../../THEME';

const Drawer = createDrawerNavigator<DrawerParamsList>();

export const DrawerNavigator: React.FC = () => {
    return (
        <Drawer.Navigator drawerContentOptions={{
            activeTintColor: THEME.MAIN_COLOR,
            labelStyle: {
                fontFamily: 'open-bold'
            }
        }}>
            <Drawer.Screen options={{
                title: 'Main',
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