import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';

export default function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && (
                <MaterialCommunityIcons name={icon} size={24} color={defaultStyles.colors.mediumGrey} style={styles.icon} />
            )}
            <TextInput style={styles.textInput} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightGrey,
        borderRadius: 25,
        flexDirection: "row",
        width: "95%",
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: "center",
        alignSelf: "center"
    },
    textInput: {
        color: defaultStyles.colors.darkGrey,
        fontSize: 18,
        width: "100%",
    },
    icon: {
        marginRight: 10,
    }
});
