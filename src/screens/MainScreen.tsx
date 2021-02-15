import React from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';
import { DATA } from '../data';

export const MainScreen: NavigationStackScreenComponent = ({navigation}) => {
    
    const openPostHandler = (post: any) => {
        navigation.navigate('Post', {postId: post.id, booked: post.booked})
    }

    return <PostList DATA={DATA} onOpen={openPostHandler}/>
}

MainScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Blog',
    headerRight: () => {
        return (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Take photo" 
                      iconName="ios-camera" 
                      onPress={() => console.log('press photo')}/>
            </HeaderButtons>
        )
    },
    headerLeft: () => {
        return (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Take photo" 
                      iconName="ios-menu" 
                      onPress={() => navigation.toogleDrawer()}/>
            </HeaderButtons>
        )
    }
})
