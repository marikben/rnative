import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Button, FlatList, Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import firebase from '../database/firebaseDB';
import HeaderBar from '../components/HeaderBar.js'
import { DrawerItems } from 'react-navigation-drawer';
import UserSettings from '../components/UserSettings';
import UserDetails from '../components/UserDetails';
import CalendarAct from '../components/CalendarAct';
import Appoints from '../components/Appoints';

export default function Appointments ({ navigation }) {
    const options = [{'name':'calendar', 'color': '#EC88AC'}, {'name':'all appointments', 'color': '#EC88AC'}]
    const [opt, setOpt] = useState('');
    const showScreen = (props) => {
      if(props.name=='calendar'){
        return(<CalendarAct />)
      }else if (props.name=='all appointments') {
        return(<Appoints/>)
      }
      else{
        return(<CalendarAct />)
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
         numColumns={2}
            />
      <View style={styles.row}>{showScreen(opt)}</View></View>
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
      marginTop: -50
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
      width: '100%'
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
      marginTop: 15
      //paddingBottom: 400,
      
    },
    
  });