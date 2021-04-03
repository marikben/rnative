import React, { useEffect, useState } from 'react';
import{ Button, FlatList, View, Text, StatusBar, StyleSheet, Alert} from 'react-native';
import Header from '../components/Header.js'

export default function ScreenOne () {
    const [skin, setSkin] = useState('');

    useEffect (() => {
        console.log(skin)
    })

    const active = (param) => {
        switch(param) {
 
            case 'Oily':
              setSkin('Oily');
              break;
            
            case 'Dry':
              setSkin('Dry')
              break;
       
            case 'Acne':
              setSkin('Acne')
              break;
       
            case 'Normal':
              setSkin('Normal')
              break;
       
            default:
              setSkin('');
          
            }
    }

    return (
        <React.Fragment>
        <Header />
        <View style={styles.container}>
        <Button title='Oily' onPress={() => active('Oily')}></Button>
        <Button title='Dry' onPress={() => active('Dry')}></Button>
        <Button title='Normal' onPress={() => active('Normal')}></Button>
        <Button title='Acne' onPress={() => active('Acne')}></Button>
        </View>
      </React.Fragment>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
 
});