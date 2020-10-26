import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {
    useFonts,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
} from '@expo-google-fonts/poppins';

import {
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
} from '@expo-google-fonts/nunito';

import colors from '../config/colors';

export default function BodyText({ children, style }) {

    const [fontsLoaded] = useFonts({
        Poppins_200ExtraLight,
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        Poppins_900Black,
        Nunito_200ExtraLight,
        Nunito_300Light,
        Nunito_400Regular,
        Nunito_600SemiBold,
        Nunito_700Bold,
        Nunito_800ExtraBold,
        Nunito_900Black,
    });

    if (fontsLoaded) {
        return (
            <Text style={[styles.text, style]}>{children}</Text>
        );
    } else {
        return null;
    }
};


const styles = StyleSheet.create({
    text: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 18,
        color: colors.black
    }
});
