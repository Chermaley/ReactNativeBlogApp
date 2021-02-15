import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Post } from './Post';

type PostListPropTypes = {
    DATA: any,
    onOpen: (post: any) => void
}

export const PostList: React.FC<PostListPropTypes> = ({DATA, onOpen}) => {
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
        justifyContent: "center",
    }   
})