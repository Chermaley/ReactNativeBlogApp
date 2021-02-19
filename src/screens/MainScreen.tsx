import React from 'react';
import { PostList } from '../components/PostList';
import { DATA } from '../data';
import {PostNavProps} from '../Routes/navigationStacks/types/PostStackParamList';

export const MainScreen = ({navigation}: PostNavProps<"Main">) => {
    
    const openPostHandler = (post: any) => {
        navigation.navigate('Post', {postId: post.id, booked: post.booked})
    }
    
    return <PostList DATA={DATA} onOpen={openPostHandler}/>
}

