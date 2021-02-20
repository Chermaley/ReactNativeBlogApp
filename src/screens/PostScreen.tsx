import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image, Button, Alert, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PostNavProps } from '../Routes/navigationStacks/types/PostStackParamList';
import { actions } from '../store/PostReducer';
import { AppStateType } from '../store/types';
import { THEME } from '../THEME';

export const PostScreen = ({route, navigation} : PostNavProps<"Post">) => {
    const dispatch = useDispatch();
    const postId = route.params.postId;
    const booked = useSelector((state: AppStateType) => state.post.bookedPosts.some(post => post.id === postId))
    const post = useSelector((state: AppStateType) => state.post.allPosts).find(p => p.id === postId);

    useEffect(() => {
        if (post) {
            navigation.setParams({booked})
        }
    }, [booked])

    const removeHandler = () => {
        Alert.alert('Deleting post',
        'Are you sure?',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          { text: 'Delete', 
          onPress() {
              dispatch(actions.deletePost(postId))
              navigation.navigate('Main')
          }, style: 'destructive'}
        ],
        { cancelable: false })
    }

    if (!post) return null

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