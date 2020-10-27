import React from 'react';
import { Image, StyleSheet, } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

export default function LoginScreen() {
    return (
        <Screen>
            <Image source={require("../assets/logo-red.png")} style={styles.logo} />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={({ email, password }) => console.log(email, password)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="email"
                    placeholder="Email"
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <AppFormField
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry
                />
                <SubmitButton title="Submit" />
            </AppForm>

        </Screen >
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
});
