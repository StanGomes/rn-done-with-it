import React from 'react';
import { StyleSheet, } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import { AppForm, AppFormField, SubmitButton, AppFormPicker } from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().max(200).label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least 1 image.")
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor: '#fc5c65', icon: 'floor-lamp' },
    { label: "Cars", value: 2, backgroundColor: '#fd9644', icon: 'car' },
    { label: "Cameras", value: 3, backgroundColor: '#fed330', icon: 'lock' },
    { label: "Games", value: 4, backgroundColor: '#26de81', icon: 'cards' },
    { label: "Clothing", value: 5, backgroundColor: '#2bcbba', icon: 'shoe-heel' },
    { label: "Sports", value: 6, backgroundColor: '#45aaf2', icon: 'basketball' },
    { label: "Movies & Music", value: 7, backgroundColor: '#4b7bec', icon: 'headphones' },

];

export default function ListingEditScreen() {
    const location = useLocation();

    return (
        <Screen>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    category: null,
                    description: '',
                    images: [],
                }}
                onSubmit={(values) => console.log(values, location)}
                validationSchema={validationSchema}
            >
                <AppFormImagePicker name="images" />
                <AppFormField
                    autoCapitalize="words"
                    autoCorrect={false}
                    name="title"
                    placeholder="Title"
                    textContentType="name"
                />
                <AppFormField
                    autoCapitalize="none"
                    keyboardType="numeric"
                    name="price"
                    placeholder="Price"
                    textContentType="emailAddress"
                />
                <AppFormPicker
                    name="category"
                    items={categories}
                    placeholder="Category"
                    PickerItemComponent={CategoryPickerItem}
                    numberOfColumns={3}
                />
                <AppFormField
                    name="description"
                    autoCapitalize="none"
                    autoCorrect={true}
                    multiline
                    numOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({});
