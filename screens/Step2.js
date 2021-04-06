import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ListItem } from 'react-native-elements';
import Header from '../components/Header.js'

export default function Products ({ navigation }) {
  const [data, setData] = useState([]);
  const tags = navigation.getParam('list'); //route.params substitute for drawer navigation
  console.log(tags)
  console.log(data)
  async function getData () {
    const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type='+tags;
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
        <View style ={styles.row}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ListItem bottomDivider >
                <ListItem.Content>
                  <View style={styles.row_cell_timeplace}>
                  <ListItem.Title>{item.name}
                  </ListItem.Title>
                  <ListItem.Subtitle>{item.brand}</ListItem.Subtitle>
                  <ListItem.Subtitle>Price: {item.price}</ListItem.Subtitle>
                  </View>
                  <View style={styles.row_cell_temp}><Image source={{uri: item.image_link}} 
                    style={{
                    width:60,
                    height:100,
                    borderWidth:1,
                    borderColor:'grey',
                    resizeMode:'contain'
                  }}
                /></View> 
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
  container2: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  row: {
    elevation: 1,
    borderRadius: 2,
    flex: 1,
    flexDirection: "row", // main axis
    justifyContent: "flex-start", // main axis
    alignItems: "center", // cross axis
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    marginBottom: 6,
  },
  row_cell_timeplace: {
    flex: 1,
    flexDirection: "column",
  },
  row_cell_temp: {
    marginTop: -45,
    paddingLeft: 240,
    flex: 0,
  },
  row_time: {
    textAlignVertical: "bottom",
    includeFontPadding: false,
    flex: 0,
  },
  row_place: {
    textAlignVertical: "top",
    includeFontPadding: false,
    flex: 0,
  },
});
