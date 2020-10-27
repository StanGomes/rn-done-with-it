import React from 'react';
import { StyleSheet, } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import { AppForm, AppFormField, SubmitButton, AppFormPicker } from '../components/forms';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().max(200).label("Description"),
    category: Yup.object().required().nullable().label("Category"),
});

const categories = [
    {
        label: "Clothing", value: 1
    },
    {
        label: "Electronics", value: 2
    },
    {
        label: "Furniture", value: 3
    }
];

export default function ListingEditScreen() {
    return (
        <Screen>
            <AppForm
                initialValues={{ title: '', price: '', category: null, description: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
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
