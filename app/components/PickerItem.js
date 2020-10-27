import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';

export default function PickerItem({ item, onPress, }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    text: {
        paddingHorizontal: 16,
        paddingVertical: 12
    }
});
