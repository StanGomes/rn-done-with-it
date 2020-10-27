import React from 'react';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    name: Yup.string().required().label("Name")
});

export default function RegisterScreen() {
    return (
        <Screen>
            <AppForm
                initialValues={{ email: '', password: '', name: '' }}
                onSubmit={({ email, password, name }) => console.log(email, password, name)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="name"
                    placeholder="Name"
                    icon="account"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="name"
                />
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
                <SubmitButton title="Register" />
            </AppForm>
        </Screen>
    );
}
