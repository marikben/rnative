import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default function Products() {
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
    <View style={styles.container}>
      <Header
      leftComponent={{icon: 'menu', color:'#fff'}}
      centerComponent={{text:'BEAUTY APP'}}
      rightComponent={{icon: 'home', color:'#fff'}}
        />
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={getData} title='SHOW'></Button>
      <StatusBar style="auto" />
    </View>
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
