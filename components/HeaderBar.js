import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import DrawerTrigger from './DrawerTrigger'
import Icon from 'react-native-vector-icons/AntDesign'
import { MenuProvider } from 'react-native-popup-menu';
import firebase from '../database/firebaseDB';
import UserMenu from './UserMenu';
import { useNavigation } from '@react-navigation/native';
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
        });
        this.setState({ loading: false });
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
   
      if (this.state.loading) {
        return (
          <Root>
            <AppLoading />
          </Root>
        );
      }
      return (
        <View>
        <Header 
        containerStyle={styles.header}
        leftComponent={<DrawerTrigger />}
        centerComponent={<Text style={{fontFamily: 'Tomatoes', fontSize: 18, marginBottom: -25}}>Beauty App</Text>}
        rightComponent={
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('Profile')}>
              <Text style={{color:'#E35D86', marginTop: 5}}><Icon name='user' color='grey' size={15}/>{this.state.displayName}</Text>
          </TouchableOpacity>}
      /></View>
      );
    }
        
    
  }
  const triggerStyles = {
    triggerText: {
      color: 'white',
    },
    triggerOuterWrapper: {
      backgroundColor: 'orange',
      padding: 5,
      flex: 1,
    },
    triggerWrapper: {
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    triggerTouchable: {
      underlayColor: 'darkblue',
      activeOpacity: 70,
      style : {
        flex: 1,
      },
    },
  };

  const optionsStyles = {
    optionsContainer: {
      backgroundColor: 'green',
      padding: 5,
      width: 200
    },
    optionsWrapper: {
      backgroundColor: 'purple',
      height: 200
    },
    optionWrapper: {
      backgroundColor: 'yellow',
      margin: 5,
      width: 200
    },
    optionTouchable: {
      underlayColor: 'gold',
      activeOpacity: 70,
    },
    optionText: {
      color: 'brown',
    },
  };
  
  const optionStyles = {
    optionTouchable: {
      underlayColor: 'red',
      activeOpacity: 40,
    },
    optionWrapper: {
      backgroundColor: 'pink',
      margin: 5,
      height: 500
    },
    optionText: {
      color: 'black',
    },
  };

const styles = StyleSheet.create({
  header: {
    //paddingTop: 40,
    backgroundColor: 'whitesmoke',
  },
  menu: {
    backgroundColor: 'red'
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

const menuProviderStyles = {
  menuProviderWrapper: styles.container,
  backdrop: styles.backdrop,
};

export default withNavigation(HeaderBar);