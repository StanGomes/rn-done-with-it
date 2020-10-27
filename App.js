import React from 'react';
import { StyleSheet, } from 'react-native';
import ListItem from './app/components/ListItem';
import defaultStyles from './app/config/styles';
import ListingEditScreen from './app/screens/ListingEditScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import MessagesScreen from './app/screens/MessagesScreen';


export default function App() {

  console.log("App Executed");
  return (
    <ListingEditScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 80,
  },
  view: {
    backgroundColor: "dodgerblue",
    height: 100,
    width: 100,
    borderColor: defaultStyles.colors.primary,
    borderWidth: 4,
    borderRadius: 50,
    elevation: 20,
    shadowColor: 'grey',
    shadowOffset: { width: -5, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 30,
  }
});
