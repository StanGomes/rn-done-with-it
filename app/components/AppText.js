import React from 'react';
import { Text } from 'react-native';
import defaultStyles from '../config/styles';

export default function BodyText({ children, style, ...otherProps }) {
    return (
        <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>
    );
};
