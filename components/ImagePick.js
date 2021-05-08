import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../database/firebaseDB';

export default function ImagePick() {
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState('https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg');
  const [key, setKey] = useState(1)
  const user = firebase.auth().currentUser;
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
    getImage()
  }, []);

  const uploadImage = async(uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref(user.uid+'/').child("my-image");
    getImage()
    return ref.put(blob);
   
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    
    if (!result.cancelled) {
      uploadImage(result.uri); 
      getImage()
    }
  };

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

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16, marginBottom: 20}}>Change your profile picture</Text>
     <Image source={{ uri: image2 }} style={{ width: 200, height: 200, borderRadius: 200 / 2 , marginBottom: 20}} />
     <Button color='#EC88AC' title="Pick an image from camera roll" onPress={pickImage} />
    </View>
  );
}

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
    margin: 100
   }})