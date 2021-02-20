import React from 'react';
import { useSelector } from 'react-redux';
import { PostList } from '../components/PostList';
import { BookedNavProps } from '../Routes/navigationStacks/types/BookedStackParams';
import { AppStateType } from '../store/types';

export const BookedScreen = ({navigation}: BookedNavProps<"Booked">) => {
    
    const bookedPosts = useSelector((state: AppStateType) => state.post.bookedPosts)

    const openPostHandler = (post: any) => {
        navigation.navigate('Post', {postId: post.id, booked: post.booked})
    }

    return <PostList onOpen={openPostHandler} DATA={bookedPosts}/>
}
