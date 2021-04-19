import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import DrawerTrigger from './DrawerTrigger'
import Icon from 'react-native-vector-icons/AntDesign'
import { MenuProvider } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const YourComponent = () => (
  <View>
    <Menu>
      <MenuTrigger text='Select action' />
      <MenuOptions>
        <MenuOption text='Save' />
        <MenuOption text='Moi' />
      </MenuOptions>
    </Menu>
  </View>
);
export default function () {
  
    return (
        <Header 
        containerStyle={styles.header}
        leftComponent={<DrawerTrigger />}
        centerComponent={{text:'BEAUTY APP'}}
        rightComponent={
          <MenuProvider><YourComponent /></MenuProvider>}
      />
    )
  }

const styles = StyleSheet.create({
  header: {
    //paddingTop: 40,
    backgroundColor: 'whitesmoke',
  }
});
