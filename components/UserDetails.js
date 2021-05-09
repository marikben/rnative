  
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import firebase from '../database/firebaseDB';

export default function UserDetails () {
    const user = firebase.auth().currentUser;
    const [image2, setImage2] = useState('https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg');
    
    useEffect (() => {
        getImage();
    })

    const getImage = () => {
        let ref = firebase.storage().ref(user.uid+'/my-image')
        ref
        .getDownloadURL()
        .then((url) => {
         setImage2(url)
        })
        .catch((e) => console.log('getting downloadURL of image error => ', e)); 
      ;}

    return(<View style={styles.container}>
        <Image source={{ uri: image2 }} style={styles.img} />
        <Text style={{fontSize: 16}}>Username: {user.displayName}</Text>
        <Text style={{fontSize: 16}}>Email: {user.email}</Text>
        </View>)
        }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 200,
        height: 200, 
        borderRadius: 200 / 2,
        marginBottom: 20
    }
    });