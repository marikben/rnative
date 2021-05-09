import React from 'react';
import { Alert, Button,  StyleSheet, View} from 'react-native';
import firebase from '../database/firebaseDB';
import { withNavigation } from 'react-navigation';
import ImagePick from './ImagePick';

class UserSettings extends React.Component {

      render(){
        createTwoButtonAlert = () => {
            Alert.alert(
            "Are you sure?",
            "All of your data will be permantently lost",
            [
              {
                text: "Cancel",
                onPress: () => console.log('cancelled'),
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

        
    return(<View style={styles.container}>
        <View style={styles.listcontainer}>
        <ImagePick />   
        <View style={{marginBottom: 50}}><Button title='delete user' onPress={() => createTwoButtonAlert()} color='#ff0000'></Button></View>
    </View>
    </View>     
    )
}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
   },
   listcontainer: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 1
   }})

export default withNavigation(UserSettings);