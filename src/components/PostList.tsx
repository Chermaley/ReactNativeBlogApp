import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { PostType } from '../store/PostReducer';
import { Post } from './Post';

type PostListPropTypes = {
    DATA: PostType[],
    onOpen: (post: any) => void
}

export const PostList: React.FC<PostListPropTypes> = ({DATA, onOpen}) => {
    if (!DATA.length) {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.noItems}>Add new post</Text>
            </View>
        )
    }

    return (
        <View style={styles.wrapper}>
            <FlatList data={DATA} 
                      renderItem={({item}) => <Post onOpen={onOpen} post={item}/>}
                      keyExtractor={post => post.id.toString()}/>
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 10,
        // justifyContent: "center",
    },
    noItems: {
        fontFamily: 'open-regular',
        textAlign: 'center',
        fontSize: 25
    }   
})