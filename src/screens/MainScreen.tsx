import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostList } from '../components/PostList';
import { PostNavProps } from '../Routes/navigationStacks/types/PostStackParamList';
import { AppStateType } from '../store/types';
import { actions, PostType } from '../store/PostReducer'

export const MainScreen = ({navigation}: PostNavProps<"Main">) => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(actions.loadPost())
    }, [])

    const posts = useSelector((state: AppStateType) => state.post.allPosts)

    const openPostHandler = (post: PostType) => {
        navigation.navigate('AllPostStack', {postId: post.id, booked: post.booked})
    }
    
    return <PostList DATA={posts} onOpen={openPostHandler}/>
}

