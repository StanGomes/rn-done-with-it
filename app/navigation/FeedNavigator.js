import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ListingDetailsScreen, ListingsScreen } from '../screens';
import routes from './routes';

const Stack = createStackNavigator();

export default FeedNavigator = () => (
    <Stack.Navigator
        mode="modal"
        headerMode="float"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name={routes.LISTINGS}
            component={ListingsScreen} />
        <Stack.Screen
            name={routes.LISTING_DETAILS}
            component={ListingDetailsScreen} />
    </Stack.Navigator>
);