import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ListItem } from 'react-native-elements';
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
        <View>
        <Button onPress={getData} title='SHOW'></Button>
        <StatusBar style="auto" />
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ListItem bottomDivider >
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  <Image source={{uri: item.image_link}} 
                    style={{
                    width:60,
                    height:90,
                    borderWidth:2,
                    borderColor:'grey',
                    resizeMode:'contain',
                    margin:8
                  }}
                />
                </ListItem.Content>
              </ListItem>
            )
          }
          keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </React.Fragment>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});