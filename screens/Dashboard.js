import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import firebase from '../database/firebaseDB';


export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }


  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View>
          <Text>Logout</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -600
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});