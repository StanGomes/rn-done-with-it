import React from 'react';
import { Button, Text } from 'react-native';
import Screen from './app/components/Screen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Link = () => {
  //useNavigation hook to get access to navigation in child components
  const navigation = useNavigation();

  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", { toolbarTitle: "Tweet Details" })} />
  );
};

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

//route contains params passed from parent {route.params}
const TweetDetails = ({ navigation, route }) => (
  <Screen>
    <Text>Tweet Details {route.params.name}</Text>
    <Button
      title="View Tweets"
      onPress={() => navigation.navigate("Tweets")} />
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: "white",
    }}>
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
      }} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.toolbarTitle })} />
  </Stack.Navigator>
);

export default function App() {
  console.log("App Executed");

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}