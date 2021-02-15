import React from 'react';
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { DATA } from '../data';
import { THEME } from '../THEME';

export const PostScreen: NavigationStackScreenComponent = ({navigation}) => {
    const postId = navigation.getParam('postId')
    
    const post = DATA.find(p => p.id === postId);

    const removeHandler = () => {
        Alert.alert('Deleting post',
        'Are you sure?',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          { text: 'Delete', onPress: () => console.log('OK Pressed'), style: 'destructive'}
        ],
        { cancelable: false })
    }

    return (
        <ScrollView>
            <Image source={{uri: post?.img}} style={styles.image}/>
            <View style={styles.textWrap}>
                <Text style={styles.title}>{post?.text}</Text>
            </View>
            <Button onPress={removeHandler} title={'Delete'} color={THEME.DANGER_COLOR}/>
        </ScrollView>
    )
}

PostScreen.navigationOptions = ({navigation}) => {
    const iconName = navigation.getParam('booked') ? 'ios-star' : 'ios-star-outline'

    const postId = navigation.getParam('postId')
    return {
        headerTitle: `Post ${postId}`,
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="Take photo" 
                          iconName={iconName}
                          onPress={() => console.log('press photo')}/>
                </HeaderButtons>
            )
        },
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontFamily: 'open-regular'
    }
})