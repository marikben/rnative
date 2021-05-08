import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, Modal, Pressable, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import firebase from '../database/firebaseDB';
import HeaderBar from '../components/HeaderBar.js'
import { DrawerItems } from 'react-navigation-drawer';
import UserSettings from '../components/UserSettings';
import UserDetails from '../components/UserDetails';

export default function Profile ({ navigation }) {
    const [items, setItems] = useState([]);
    const [items2, setItems2] = useState({});
    const user = firebase.auth().currentUser;
    const options = [{'name':'user', 'color': '#EC88AC'}, {'name':'faves', 'color': '#EC88AC'}, 
    {'name':'settings', 'color': '#EC88AC'}, {'name': 'logout', 'color': '#F21E6A'}]
    const [opt, setOpt] = useState('');
    
    useEffect(() => {
        firebase.database().ref(user.uid+'/faves').on('value', snapshot => {
        
          const data = snapshot.val();
          
          if(data){
          setItems2(data)
          console.log(data)
          }else{
            console.log('empty list')
            setItems2({})
          }
          
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
        firebase.database().ref(user.uid+'/faves').child(props).remove()
       
        firebase.database().ref(user.uid+'/faves').on('value', snapshot => {
          const data = snapshot.val();
          if(data){
            setItems2(data)
            setKey(key+1)
            
          }else{
            
            setItems2({})
            console.log('empty list')
          }
        })
      }
      
      const EmptyListMessage = ({item}) => {
        return (
          // Flat List Item
          <Text>
            No Data Found
          </Text>
        );
      };
     const signOut = () => {
        firebase.auth().signOut().then(() => {
         navigation.navigate('Login')
        })
        .catch(error => console.log(error))
      }  
    //much more efficient/faster to have this in the same component
    const prof2 = () => {
      if(Object.keys(items2)===null | Object.keys(items2)===undefined){
      return(
        <Text>
        No Data Found
      </Text>
      )
    }else{
      return (
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
    } ListEmptyComponent={EmptyListMessage}/>)
    }
    }
    const showScreen = (props) => {
      if(props.name=='user'){
        return(<UserDetails/>)
      }else if (props.name=='faves') {
        return(prof2())
      }else if (props.name=='settings') {
        return(<UserSettings/>)
      }else if (props.name=='logout'){
        signOut()
      }
      else{
        return(<UserDetails/>)
      }
    }
    return(<View style={styles.container}>
      <HeaderBar />
      <View style={styles.box}>
      <FlatList
            data={options}
            renderItem={({item})=>(
            <View style={{paddingRight: 10}}>
            <Button title={item.name} color={item.color} onPress={() => setOpt(item)}></Button>
            </View>
            )} 
         numColumns={4}
            /></View>
      <View style ={styles.row}>
        {showScreen(opt)}</View>
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