import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, Modal, Pressable, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Header, Icon, ListItem } from 'react-native-elements';
import firebase from '../database/firebaseDB';

export default function Profile ({ navigation }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        firebase.database().ref('items/').on('value', snapshot => {
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
        <FlatList 
      style={{marginLeft : "5%"}}
      keyExtractor={item => item.id} 
      renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18}}>{item.name}, {item.price} </Text>
      </View>} 
      data={items} 
      ItemSeparatorComponent={listSeparator} 
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
      alignItems: 'center'
     },
  });