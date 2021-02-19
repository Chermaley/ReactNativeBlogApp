import { Platform } from 'react-native';
import { THEME } from '../THEME';

export const TabnavigatorOptions = {
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
}
