import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import BodyText from '../components/AppText';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    const backgroundUrl = require('../assets/background.jpg');
    const logoUrl = require('../assets/logo-red.png');
    return (
        <ImageBackground
            style={styles.background}
            source={backgroundUrl}>
            <View style={styles.logoContainer}>
                <Image source={logoUrl} style={styles.logo} />
                <BodyText>Sell what you don't need</BodyText>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="login" />
                <AppButton color="secondary" title="register" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 16,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 8,
    },
});

export default WelcomeScreen;
