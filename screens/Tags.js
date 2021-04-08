import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ListItem } from 'react-native-elements';
import Header from '../components/Header.js'

export default function Tags ({ navigation }) {
    const [tags, setTags] = useState([]);
    const type = navigation.getParam('list');
    
    useEffect(()=>{ 
        setTags({'name': 'Vegan', 'id': 'Vegan'}, {'name': 'Natural', 'id': 'Natural'})
        console.log(tags)
    });

    const testi = (param) => {
    
    switch(param) {
        case 'foundation':
          console.log('1');  
          break;
        case 'mascara':
          console.log('mo')
          break;
        case 'lipstick':
            console.log('hei')
            break;
        case 'lipliner':
            console.log('hhui')
            break;
        case 'eyeshadow':
            console.log('hei')
            break;
        case 'eyeliner':
            console.log('kok')
            break;
        case 'bronzer':
            console.log('yuu')
            break;
        case 'blush':
            console.log('vvv')
            break;
        case 'nail_polish':
            console.log('cv')
            break;

        default:
          setTags('toimii');
      
        }
    }
    
    return(
    <View style={styles.container}>
        <Text>Testing{type}</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }})