import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

export default function ListingDetailsScreen({ route }) {
    const listing = route.params;

    return (
        <View>
            <Image style={styles.image} source={listing.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>{listing.price}</AppText>
                <View
                    style={{ marginVertical: 40 }}>
                    <ListItem
                        image={require("../assets/mosh.jpg")}
                        title="Mosh Hamedani"
                        subTitle="5 Listings"
                        showChevron
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20,

    },
    price: {
        color: colors.secondary,
        marginVertical: 6,
        fontSize: 20,
    },
    title: {
        fontSize: 24,
    }
});