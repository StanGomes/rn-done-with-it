import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function ImageInput({ imageUri, onChangeImage }) {

    React.useEffect(() => {
        requestPermission;
    }, []);

    const requestPermission = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (!granted) alert("Please allow camera roll access");
    };

    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert("Delete", "Are you sure you want to delete this image?", [
            { text: 'Yes', onPress: () => { onChangeImage(null); } },
            { text: 'No' }
        ]);
    };

    const selectImage = async () => {
        try {
            const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!cancelled) {
                onChangeImage(uri);
            }
        } catch (error) {
            console.log("Error reading image", error);
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            {!imageUri && (
                <MaterialCommunityIcons name="camera" size={50} color={defaultStyles.colors.mediumGrey} />
            )}
            {imageUri && (
                <Image source={{ uri: imageUri }} style={styles.image} />
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: defaultStyles.colors.lightGrey,
        borderRadius: 15,
        height: 100,
        justifyContent: "center",
        overflow: "hidden",
        width: 100,
    },
    image: {
        width: "100%",
        height: "100%"
    }
});
