import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';
// pull in from DrawerTrigger.js
import DrawerTrigger from './DrawerTrigger'

export default function () {
  
    return (
        <Header 
        containerStyle={styles.header}
        leftComponent={<DrawerTrigger />}
        centerComponent={{text:'BEAUTY APP'}}
        rightComponent={{icon: 'home', color:'black'}}
      />
    )
  }

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    backgroundColor: 'whitesmoke'
  }
});
