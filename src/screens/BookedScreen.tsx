import React from 'react';
import { PostList } from '../components/PostList';
import { DATA } from '../data';
import { BookedNavProps } from '../Routes/navigationStacks/types/BookedStackParams';

export const BookedScreen = ({navigation}: BookedNavProps<"Booked">) => {
    
    const openPostHandler = (post: any) => {
        navigation.navigate('Post', {postId: post.id, booked: post.booked})
    }

    return <PostList onOpen={openPostHandler} DATA={DATA.filter(p => p.booked)}/>
}
