import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, Modal, Pressable, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import firebase from '../database/firebaseDB';
import Header from '../components/Header.js'
import { DrawerItems } from 'react-navigation-drawer';
import Favourites from '../components/Favourites';
import UserDetails from '../components/UserDetails';

export default function Profile ({ navigation }) {
    const [items, setItems] = useState([]);
    const [items2, setItems2] = useState({});
    const [visible, setVisible] = useState('');
    const [keys, seKeys] = useState([]);
    const user = firebase.auth().currentUser;
    const db = firebase.database().ref(user.uid+'/');
    //console.log(user.uid)
    useEffect(() => {
        firebase.database().ref(user.uid+'/').on('value', snapshot => {
        
          const data = snapshot.val();
          const prods = Object.values(data);
          const keys = Object.entries(data);
          setItems(prods);
          setItems2(data)
          console.log(items2)
          
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
      
      const deleteItem = (props) => {
        console.log(props)
        firebase.database().ref(user.uid+'/').child(props).remove()
        console.log('success')
        
        firebase.database().ref(user.uid+'/').on('value', snapshot => {
          const data = snapshot.val();
          const prods = Object.values(data);
          setItems(prods);
        })
        console.log(items)
      }
      const EmptyListMessage = ({item}) => {
        return (
          // Flat List Item
          <Text>
            No Data Found
          </Text>
        );
      };
     
    const prof2 = () => {
      return(<View><Text>Böö</Text></View>)
    }
    const showScreen = (props) => {
      if(props=='user'){
        return(<Favourites/>)
      }else if (props=='faves') {
        return(<UserDetails/>)
      }else{
        return(<View><Text>Byy</Text></View>)
      }
    }
    return(<View style={styles.container}>
      <Header />
      <View style={styles.row} ><Button title='user' onPress={() => setVisible('user')}></Button>
      <Button title='faves' onPress={() => setVisible('faves')}></Button>
      <Button title='settings'></Button></View>
      <View style={styles.row} ><View>{showScreen(visible)}</View></View>
      <View style ={styles.row}>
      <FlatList
            data={Object.keys(items2)}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback>
              <ListItem bottomDivider >
                <ListItem.Content>
                  <View style={styles.row_cell_timeplace}>
                  <ListItem.Title>{items2[item].name.length < 25
                    ? `${items2[item].name}`
                    : `${items2[item].name.substring(0, 29)}...`}
                  </ListItem.Title>
                  <ListItem.Subtitle>{items2[item].brand}</ListItem.Subtitle>
                  <ListItem.Subtitle>Price: {items2[item].price}</ListItem.Subtitle>
                  <ListItem><Button title='Delete' color='#E35D86' onPress={() => deleteItem(item)}></Button></ListItem>
                  </View>
                  <View style={styles.row_cell_temp}><Image source={{uri: items2[item].picture}} 
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
          } ListEmptyComponent={EmptyListMessage}/>
    </View></View>)
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
      marginTop: 100,
      marginBottom: 50,
    },
     row_cell_timeplace: {
      flex: 1,
      flexDirection: "column",
    },
    row_cell_temp: {
      marginTop: -115,
      paddingLeft: 240,
      flex: 0,
    }
  });