import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';
import firebase from '../database/firebaseDB';
import { ListItem } from 'react-native-elements';

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
              setItems2({})
              setDel({})
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
        firebase.database().ref(user.uid+'/calendar2').child(props).remove()
       
        firebase.database().ref(user.uid+'/calendar2').on('value', snapshot => {
          const data = snapshot.val();
          
          if(data){
            const prods = Object.values(data)
            setDel(data)
            console.log(Object.assign({}, ...prods))
            setItems2(Object.assign({}, ...Object.values(data)))
            
            }else{
              console.log('empty list')
              setItems2({})
              setDel({})
            }
        });
      }
      return(
        <View style={styles.listcontainer}>
          <FlatList
        data={Object.keys(del)}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback>
          <ListItem bottomDivider >
            <ListItem.Content>
              <View >
              <ListItem.Title>{Object.values(del[item])[0].desc}
              </ListItem.Title>
              <ListItem.Subtitle>{Object.keys(del[item])}</ListItem.Subtitle>
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
      flexDirection: "row", 
      justifyContent: "flex-start", 
      alignItems: "center", 
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
      marginTop: 10
    },
    
  });