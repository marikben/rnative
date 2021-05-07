import React from 'react';
//Pull in AppNavigator from the navigation folder
import AppNavigator from './navigation/AppNavigator'
import { LogBox } from 'react-native';

export default function App() {
  //Ignoring "irrelevant" warnings 
  LogBox.ignoreLogs(['Setting a timer']);
  LogBox.ignoreLogs(['Your project is accessing']);
  return (
    <AppNavigator /> 
  );
}