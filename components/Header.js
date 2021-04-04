import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import DrawerTrigger from './DrawerTrigger'

export default function () {
  
    return (
        <Header 
        containerStyle={styles.header}
        leftComponent={<DrawerTrigger />}
        centerComponent={{text:'BEAUTY APP'}}
        rightComponent={{icon: 'home', color:'grey'}}
      />
    )
  }

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    backgroundColor: 'whitesmoke',
  }
});
