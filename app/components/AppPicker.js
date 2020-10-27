import React from 'react';
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';
import AppButton from './AppButton';

export default function AppPicker({ icon, items, placeholder, selectedItem, onSelectedItem, }) {
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <>
            <TouchableWithoutFeedback
                onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons name={icon} size={24} color={defaultStyles.colors.lightGrey} style={styles.icon} />
                    )}
                    <AppText
                        style={selectedItem ? styles.text : styles.placeholder}> {selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.mediumGrey} />
                </View>
            </TouchableWithoutFeedback>
            {
                items && <Modal visible={modalVisible} animationType="slide">
                    <Screen>
                        <AppButton
                            color="mediumGrey"
                            title="Close"
                            onPress={() => {
                                setModalVisible(false);
                            }
                            } />
                        <FlatList
                            data={items}
                            keyExtractor={item => item.value.toString()}
                            renderItem={({ item }) =>
                                <PickerItem
                                    label={item.label}
                                    onPress={() => {
                                        setModalVisible(false);
                                        onSelectedItem(item);
                                    }} />
                            }
                        />
                    </Screen>
                </Modal>
            }
        </>
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
        alignItems: "center",
        marginHorizontal: 10,
        alignSelf: "center"
    },
    icon: {
        marginRight: 10,
    },
    placeholder: {
        color: defaultStyles.colors.mediumGrey,
        flex: 1,
    },
    text: {
        flex: 1,
    },
});