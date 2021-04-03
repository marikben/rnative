import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Products from './Products';
import Quiz from './Quiz';
import MyComponent from './MyComponent';


const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Quiz" component={Quiz} />
      <Drawer.Screen name="Products" component={Products} />
      <Drawer.Screen name="MyComponent" component={MyComponent} />
    </Drawer.Navigator>
  </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

