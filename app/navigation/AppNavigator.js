import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountScreen, ListingEditScreen } from '../screens';
import React from 'react';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewListingButton from './NewListingButton';
import routes from './routes';


const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name={routes.FEED}
            component={FeedNavigator}
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name="home" size={size} color={color} />
            }} />
        <Tab.Screen
            name={routes.LISTING_EDIT}
            component={ListingEditScreen}
            options={({ navigation }) => ({
                tabBarButton: () => (
                    <NewListingButton onPress={() => navigation.navigate("ListingEdit")} />
                ),
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="plus-circle"
                        size={size}
                        color={color} />
                )
            })}
        />
        <Tab.Screen
            name={routes.ACCOUNT}
            component={AccountNavigator}
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name="account" size={size} color={color} />
            }} />
    </Tab.Navigator>
);