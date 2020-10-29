import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from './Icon';
import AppText from './AppText';

export default function CategoryPickerItem({ item, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
                <AppText style={styles.label}>{item.label}</AppText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 15,
        alignItems: "center"
    },
    label: {
        marginTop: 8,
        textAlign: "center"
    }
});
