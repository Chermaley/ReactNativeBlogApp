import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef, useState } from 'react';
import { Text, StyleSheet, Image, Button, ScrollView, Keyboard} from 'react-native';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { PhotoPicker } from '../components/PhotoPicker';
import { TabsParamList } from '../Routes/navigationStacks/types/TabsStackParams';
import { actions, PostType } from '../store/PostReducer';
import { THEME } from '../THEME';


type CreateScreenNavProp = StackNavigationProp<TabsParamList>;

type CreateScreenPopsType = {
    navigation: CreateScreenNavProp
}

export const CreateScreen: React.FC<CreateScreenPopsType> = ({navigation}) => {
    const [text, setText] = useState('')
    const imgRef = useRef('')

    const dispatch = useDispatch()


    const saveHandler = () => {
        const post: PostType = {
            id: Date.now().toString(),
            img: imgRef.current,
            text,
            booked: false,
            date: new Date().toJSON(),
        }
        setText('')
        dispatch(actions.addPost(post))
        navigation.navigate('AllPostStack')
    }

    const photoPickHandler = (uri: string) => {
        imgRef.current = uri
    }

    return (
        <ScrollView style={styles.wrapper}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Text style={styles.title}>Create new post</Text>
                <TextInput 
                    multiline
                    value={text}
                    onChangeText={setText}
                    placeholder={'Input post text'}
                    style={styles.textarea}/>
                <PhotoPicker onPick={photoPickHandler}/>
                <Button disabled={!text} title="Create post" color={THEME.MAIN_COLOR} onPress={saveHandler}/>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "open-regular",
        marginVertical: 10
    },
    textarea: {
        padding: 10,
        fontFamily: "open-regular",
        marginBottom: 10
    }
})