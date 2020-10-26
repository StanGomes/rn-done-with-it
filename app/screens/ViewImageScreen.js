import React from 'react';
import { TouchableOpacity, View, StyleSheet, Platform, ImageBackground, StatusBar, SafeAreaView, Image } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../components/Screen';

function ViewImageScreen() {
    return (
        <Screen style={styles.container}>
            <TouchableOpacity style={styles.close}>
                <MaterialCommunityIcons name="close" color="white" size={35} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.delete}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
            </TouchableOpacity>
            <Image
                style={styles.image}
                source={require('../assets/chair.jpg')}
                resizeMode="contain" />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    image: {
        width: '100%',
        height: '100%',
    },
    close: {
        position: "absolute",
        top: 40,
        left: 30
    },
    delete: {
        position: "absolute",
        top: 40,
        right: 30
    }
});

export default ViewImageScreen;