import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './app/navigation';
import NavigationTheme from './app/navigation/NavigationTheme';


export default function App() {
  console.log("App Executed");

  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}