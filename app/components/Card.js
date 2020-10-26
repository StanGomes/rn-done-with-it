import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../config/colors';
import BodyText from './AppText';

export default function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
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
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailContainer: {
        padding: 20,
    },
    subTitle: {
        color: colors.secondary,
        marginTop: 8,
        fontWeight: "bold"
    }
});
