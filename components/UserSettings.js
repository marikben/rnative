import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import firebase from '../database/firebaseDB';
import DropDownPicker from 'react-native-dropdown-picker';
import { withNavigation } from 'react-navigation';


class UserSettings extends React.Component {

      render(){
        createTwoButtonAlert = () => {
            console.log('byy')
            Alert.alert(
            "Are you sure?",
            "All of your data will be permantently lost",
            [
              {
                text: "Cancel",
                onPress: () => console.log('bää'),
                style: "cancel"
              },
              { text: "OK", onPress: () => deleteUser() }
            ],
            { cancelable: false }
          ); 
        }
        deleteUser = () => {
          firebase.auth().currentUser.delete().then( () =>
            this.props.navigation.navigate('Signup')
        ).catch(function (error) {
            console.error({error})
          })
        }
    return(<View>
        <Text>Byy</Text>
        
        <Button title='delete user' onPress={() => createTwoButtonAlert()} color='#ff0000'></Button>
            
    </View>
         
    )
}}
export default withNavigation(UserSettings);