import React from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';
import { DATA } from '../data';

export const BookedScreen: NavigationStackScreenComponent = ({navigation}) => {
    
    const openPostHandler = (post: any) => {
        navigation.navigate('Post', {postId: post.id, booked: post.booked})
    }

    return <PostList onOpen={openPostHandler} DATA={DATA.filter(p => p.booked)}/>
}

BookedScreen.navigationOptions = {
    headerTitle: 'Favorites',
    headerLeft: () => {
        return (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Take photo" 
                      iconName="ios-menu" 
                      onPress={() => console.log('press photo')}/>
            </HeaderButtons>
        )
    }
}
