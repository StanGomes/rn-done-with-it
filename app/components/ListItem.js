import React from 'react';
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

export default function ListItem({ title, subTitle, image, onPress }) {
    return (
        <TouchableHighlight
            underlayColor={colors.lightGrey}
            onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={image} />
                <View>
                    <AppText styles={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 16
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    title: {
        fontWeight: "500"
    },
    subTitle: {
        color: colors.mediumGrey
    },
});
