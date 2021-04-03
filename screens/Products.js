import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from '../components/Header.js'

export default function ScreenTwo () {
  const [data, setData] = useState([]);
  const [toner, setToner] = useState([]);
 
  async function getData () {
    const url = 'http://api.thegoodfaceproject.com/api/website/products?q=cream&page=1&load-all=true';
    
    try{
      const response = await fetch(url);
      const prod = await response.json();
      setData(prod);
      setToner(prod.products[0]);
      console.log(Math.floor(Math.random() * 100));
      console.log(data);
    }
    catch (error) {
    setData('Error', error);
    };
    
  }
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
        <Button onPress={getData} title='SHOW'></Button>
        <StatusBar style="auto" />
        </View>
      </React.Fragment>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});