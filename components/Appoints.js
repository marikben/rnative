import React, { useEffect, useState } from 'react';
import { View, Text, Button, Platform, StyleSheet, TextInput, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Calendar } from 'react-native-calendars';
import firebase from '../database/firebaseDB';
import { Icon, ListItem } from 'react-native-elements';

export default function Appoints({ navigation }) {
    const [items2, setItems2] = useState({});
    const [del, setDel] = useState({});
    const user = firebase.auth().currentUser;
    useEffect(() => {
        firebase.database().ref(user.uid+'/calendar2').on('value', snapshot => {
        
          const data = snapshot.val();
          
          if(data){
            const prods = Object.values(data)
            setDel(data)
            console.log(Object.assign({}, ...prods))
            setItems2(Object.assign({}, ...Object.values(data)))
            
            }else{
              console.log('empty list')
              setDates({})
            }
        });
    }, []);

      const EmptyListMessage = ({item}) => {
        return (
          // Flat List Item
          <Text>
            No Data Found
          </Text>
        );
      };
      

      const deleteItem = (props) => {
        console.log(props)
        console.log(del)
      }
    return(
      <View style={styles.listcontainer}>
        <FlatList
      data={Object.keys(items2)}
      renderItem={({ item }) => (
        <TouchableWithoutFeedback>
        <ListItem bottomDivider >
          <ListItem.Content>
            <View >
            <ListItem.Title>{items2[item].desc}
            </ListItem.Title>
            <ListItem.Subtitle>{item}</ListItem.Subtitle>
            <View style={{marginLeft: 225, marginTop: -52}}>
              <ListItem><Button title='Delete' color='#E35D86' onPress={() => deleteItem(item)}></Button>
              </ListItem></View>
            </View>
          </ListItem.Content>
        </ListItem>
        </TouchableWithoutFeedback>
      )
    } ListEmptyComponent={EmptyListMessage}/>
    
    </View>
    )
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
      marginTop: -600,
      marginBottom: 10,
      width: '90%'
    },
     row_cell_timeplace: {
      flex: 1,
      flexDirection: "column",
    },
    row_cell_temp: {
      marginTop: -115,
      paddingLeft: 240,
      flex: 0,
    },
    box: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      flexWrap: 'wrap',
      //paddingBottom: 400,
      marginTop: 10
    },
    
  });