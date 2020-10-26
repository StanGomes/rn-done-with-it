import React from 'react';
import { StyleSheet, View, } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import colors from './app/config/colors';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
  console.log("App Executed");
  return (
    <MessagesScreen />
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
    borderColor: colors.primary,
    borderWidth: 4,
    borderRadius: 50,
    elevation: 20,
    shadowColor: 'grey',
    shadowOffset: { width: -5, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 30,
  }
});
