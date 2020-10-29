import React from 'react';
import { StyleSheet, Image, View, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';

export default function ListItem({ title, subTitle, image, onPress, renderRightActions, IconComponent, backgroundColor = colors.white, showChevron = false, }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableWithoutFeedback
                underlayColor={colors.lightGrey}
                onPress={onPress}>
                <View style={[styles.container, { backgroundColor: backgroundColor }]}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailContainer}>
                        <AppText styles={styles.title} numberOfLines={2}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={5}>{subTitle}</AppText>}
                    </View>
                    {showChevron && <MaterialCommunityIcons name="chevron-right" size={30} color={defaultStyles.colors.mediumGrey} />}
                </View>
            </TouchableWithoutFeedback>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 16,
        alignItems: "center",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: colors.mediumGrey
    },
    detailContainer: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: "center"
    },
});
