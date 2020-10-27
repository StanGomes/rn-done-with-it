import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import defaultStyles from '../config/styles';

export default function AppButton({ title, onPress, color = "primary", style }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: defaultStyles.colors[color] }, style]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: defaultStyles.colors.primary,
        width: '95%',
        height: 52,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 25,
        elevation: 20,
        shadowColor: 'grey',
        shadowOffset: { width: -2, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 10
    },
    text: {
        color: defaultStyles.colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    }
});
