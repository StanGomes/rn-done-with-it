import React from 'react';
import { View, StyleSheet } from 'react-native';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';
import ImageInputList from '../ImageInputList';

function AppFormImagePicker({ name }) {
    const { setFieldValue, errors, touched, values } = useFormikContext();
    const imageUris = values[name];

    const handleAdd = uri => {
        setFieldValue(name, [...imageUris, uri]);
    };

    const handleRemove = uri => {
        setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri));
    };

    return (
        <>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}
export default AppFormImagePicker;