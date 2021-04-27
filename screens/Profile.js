import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, Modal, Pressable, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import firebase from '../database/firebaseDB';
import Header from '../components/Header.js'

export default function Profile ({ navigation }) {
    const [items, setItems] = useState([]);
    const user = firebase.auth().currentUser;
    console.log(user.uid)
    useEffect(() => {
        firebase.database().ref(user.uid+'/').on('value', snapshot => {
          const data = snapshot.val();
          const prods = Object.values(data);
          setItems(prods);
        });
      }, []);

      const listSeparator = () => {
        return (
          <View
            style={{
              height: 5,
              width: "80%",
              backgroundColor: "#fff",
              marginLeft: "10%"
            }}
          />
        );
      };
    return(<View>
      <Header />
      
      <FlatList
            data={items}
            renderItem={({item}) => (
              <TouchableWithoutFeedback>
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
              </TouchableWithoutFeedback>
            )
          }
          keyExtractor={(item, index) => index.toString()}
          />
    </View>)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     },
     listcontainer: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      //paddingTop: 50
     },
     row_cell_timeplace: {
      flex: 1,
      flexDirection: "column",
    },
    row_cell_temp: {
      //marginTop: -45,
      paddingLeft: 240,
      flex: 0,
    }
  });