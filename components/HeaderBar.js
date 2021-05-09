import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import DrawerTrigger from './DrawerTrigger'
import Icon from 'react-native-vector-icons/AntDesign'
import firebase from '../database/firebaseDB';
import { withNavigation } from 'react-navigation';
import * as Font from 'expo-font';
import { AppLoading } from "expo";

class HeaderBar extends React.Component {
    constructor() {
        super();
        this.state = { 
          uid: '',
          loading: true
        }
      }
      async componentWillMount() {
        await Font.loadAsync({
          Tomatoes: require("../assets/fonts/Tomatoes-O8L8.ttf"),
          Colombia: require("../assets/fonts/Colombia-Rp0DV.ttf")
        });
        this.setState({ loading: false });

      }
      
    render() {
      this.state = { 
        displayName: firebase.auth().currentUser.displayName,
        uid: firebase.auth().currentUser.uid
        }
   
      if (this.state.loading) {
        return (
          <Root>
            <AppLoading />
          </Root>
        );
      }else{
      return (
        <View>
        <Header 
        containerStyle={styles.header}
        leftComponent={<DrawerTrigger />}
        centerComponent={<Text style={{fontFamily: 'Tomatoes', fontSize: 18, marginBottom: -25}}>Beauty App</Text>}
        rightComponent={
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('Profile')}>
              <Text style={{color:'#E35D86', marginTop: 5, fontSize: 23, fontFamily: 'Colombia'}}><Icon name='user' color='grey' size={15}/>{this.state.displayName}</Text>
          </TouchableOpacity>}
      /></View>
      );}
    }
        
    
  }
 
const styles = StyleSheet.create({
  header: {
    //paddingTop: 40,
    backgroundColor: 'whitesmoke',
  },
  option: {
    width: 100,
    height: 20
  },
  container: {
    flexDirection: 'column',
    padding: 3,
    //width: 150,
    height: 150
  },
  backdrop: {
    backgroundColor: 'red',
    opacity: 0.5,
  },
  anchorStyle: {
    backgroundColor: 'blue',
  },
});


export default withNavigation(HeaderBar);