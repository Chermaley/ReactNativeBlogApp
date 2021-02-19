import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from './AppHeaderIcon';

type DrawerIconProps = {
    navigation: any
}

export const DrawerIcon: React.FC<DrawerIconProps> = ({navigation}) => {
    return (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Take photo" 
                    iconName="ios-menu" 
                    onPress={() => navigation.toggleDrawer()}/>
        </HeaderButtons>
    )
}