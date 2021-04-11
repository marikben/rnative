import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header, Icon, ListItem } from 'react-native-elements';

export default function Results ({ navigation }) {
  const [data, setData] = useState([]);
  const tags = navigation.getParam('list'); //route.params substitute for drawer navigation
  const type = navigation.getParam('type');
  //console.log(tags)

  async function getData () {
    const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_tags='+tags.selected+'&product_type='+type;
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
        <Header 
        containerStyle={styles.header}
        leftComponent={<Icon name='keyboard-arrow-left' size={30}
            onPress={() => navigation.navigate('Tags')}
          />}
        />
        <View style={styles.container}>
        <Button color='#E35D86' onPress={getData} title='SHOW'></Button>
        <StatusBar style="auto" />
        </View>
        <View style ={styles.row}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ListItem bottomDivider >
                <ListItem.Content>
                  <View style={styles.row_cell_timeplace}>
                  <ListItem.Title>{item.name.length < 25
                    ? `${item.name}`
                    : `${item.name.substring(0, 29)}...`}
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
    justifyContent: 'center',
    marginTop: -200
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
    marginTop: -200,
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
  header: {
    paddingTop: 40,
    backgroundColor: 'whitesmoke',
  }
});
