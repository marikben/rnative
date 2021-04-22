import React from 'react';
import firebase from '../database/firebaseDB';
import { Button, FlatList, Image,  StyleSheet, Text, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';

class Profile extends React.Component {
    constructor() {
        super();
    
        this.state = {
          uid: '',
        };
      }

    render(){
        this.state = { 
            displayName: firebase.auth().currentUser.displayName,
            uid: firebase.auth().currentUser.uid
          }
        return(<View>
            <Header 
        containerStyle={styles.header}
        leftComponent={<Icon name='keyboard-arrow-left' size={30}
            onPress={() => this.props.navigation.navigate('Carousel')}
          />}
        />
            <Text>Hello {this.state.displayName}</Text></View>)
    }
    
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        backgroundColor: 'whitesmoke',
      }
    });
    export default Profile;