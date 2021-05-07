  
import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, Modal, Pressable, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import firebase from '../database/firebaseDB';
import { DrawerItems } from 'react-navigation-drawer';

export default function UserDetails () {
    const user = firebase.auth().currentUser;
    const [image2, setImage2] = useState('https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg');
    
    useEffect (() => {
        getImage()
    })

    const getImage = () => {
      
        let ref = firebase.storage().ref(user.uid+'/my-image')
        ref
        .getDownloadURL()
        .then((url) => {
          //from url you can fetched the uploaded image easily
         setImage2(url)
        })
        .catch((e) => console.log('getting downloadURL of image error => ', e));
         
      ;}
    return(<View style={styles.container}>
        <Image source={{ uri: image2 }} style={{ width: 200, height: 200, borderRadius: 200 / 2 }} />
        <Text style={{fontSize: 16}}>Username: {user.displayName}</Text>
        <Text style={{fontSize: 16}}>Email: {user.email}</Text>
    </View>)
}

const styles = StyleSheet.create({
container: {
    marginTop: -200
}
});