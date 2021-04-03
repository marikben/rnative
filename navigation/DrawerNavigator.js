import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Quiz from '../screens/Quiz';
import Products from '../screens/Products';

//If you change the drawer components/ their names, restart expo to enable the changes
const DrawerNavigator = createDrawerNavigator({
  Quiz: Quiz,
  Products: Products
});

export default DrawerNavigator;

