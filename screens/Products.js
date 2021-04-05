import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from '../components/Header.js'

export default function Products ({ navigation }) {
  const [data, setData] = useState([]);
  const tags = navigation.getParam('list'); //route.params substitute for drawer navigation
  //console.log(tags)

  async function getData () {
    const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_tags='+tags.selected+'&product_type=foundation';
    try{
      const response = await fetch(url);
      const prod = await response.json();
      setData(prod);
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