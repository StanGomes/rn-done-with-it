import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';



export default function AppFormPicker({ name, items, placeholder }) {
    const { setFieldValue, values, errors, touched } = useFormikContext();
    return (
        <>
            <AppPicker
                onSelectedItem={(item) => setFieldValue(name, item)}
                selectedItem={values[name]}
                items={items}
                placeholder={placeholder} />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

const styles = StyleSheet.create({});
