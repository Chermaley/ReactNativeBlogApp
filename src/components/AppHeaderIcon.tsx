import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import { THEME } from '../THEME';
import { Ionicons } from '@expo/vector-icons';

export const AppHeaderIcon: React.FC = (props) => {
    return (
        <HeaderButton
            {...props}
            title={''}
            IconComponent={Ionicons}
            color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR} 
            iconSize={24}/>
    )
}