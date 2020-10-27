import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import defaultStyles from '../config/styles';
import BodyText from './AppText';

export default function Card({ title, subTitle, image, style }) {
    return (
        <View style={[styles.card, style]}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailContainer}>
                <BodyText>{title}</BodyText>
                <BodyText style={styles.subTitle}>{subTitle}</BodyText>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: defaultStyles.colors.white,
        marginVertical: 16,
        overflow: "hidden",
        elevation: 6,
        shadowColor: defaultStyles.colors.lightGrey,
        shadowOffset: { width: -2, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailContainer: {
        padding: 20,
    },
    subTitle: {
        color: defaultStyles.colors.secondary,
        marginTop: 8,
        fontWeight: "bold"
    }
});
