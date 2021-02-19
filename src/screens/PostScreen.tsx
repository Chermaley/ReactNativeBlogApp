import React from 'react';
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DATA } from '../data';
import { PostNavProps } from '../Routes/types/PostStackParamList';
import { THEME } from '../THEME';

export const PostScreen = ({route,navigation} : PostNavProps<"Post">) => {
    const postId = route.params.postId;
    
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