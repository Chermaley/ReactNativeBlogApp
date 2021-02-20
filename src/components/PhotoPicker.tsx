import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { View, StyleSheet, Image, Button, Alert } from 'react-native';

async function askForPermissions() {
    const {status} = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.MEDIA_LIBRARY
    )
    if (status !== 'granted') {
        Alert.alert('No permissions')
        return false
    }
    return true
}

type PhotoPickerPropTypes = {
    onPick: (uir: string) => void
}

export const PhotoPicker: React.FC<PhotoPickerPropTypes> = ({onPick}) => {
    const [image, setImage] = useState<null | any>(null);
    
    const takePhoto = async () => {
        const hasPermissions = await askForPermissions()

        if (!hasPermissions) {
            return
        }

        const img = await ImagePicker.launchCameraAsync({
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9]
        })

        if (!img.cancelled){
            setImage(img.uri);  
            onPick(img.uri)
        }
    }
    
    return (
        <View style={styles.wrapper}>
            <Button title="Make photo" onPress={takePhoto}/>
            {image && <Image style={styles.image} source={{uri: image}}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 40
    }
})