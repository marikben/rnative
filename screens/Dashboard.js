// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../database/firebaseDB';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    if (firebase.auth().currentUser!=null)
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }
    if (firebase.auth().currentUser==null)
    this.state = { 
      displayName: 'moi',
      uid:'123'
    }  
    return (
      <View style={styles.container}>
        

        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});