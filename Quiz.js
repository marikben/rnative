import React, { useEffect, useState } from 'react';
import{ Button, FlatList, View, Text, StatusBar, StyleSheet} from 'react-native';

export default function Quiz() {
    const [skin, setSkin] = useState('');

    useEffect (() => {
        console.log(skin)
    })
    const active = (param) => {
        switch(param) {
 
            case 'Oily':
              setSkin('Oily');
              break;
            
            case 'Dry':
              setSkin('Dry')
              break;
       
            case 'Acne':
              setSkin('Acne')
              break;
       
            case 'Normal':
              setSkin('Normal')
              break;
       
            default:
              setSkin('');
          
            }
    }
    return (<View><Text>
        <Button title='Oily' onPress={() => active('Oily')}></Button>
        <Button title='Dry' onPress={() => active('Dry')}></Button>
        <Button title='Normal' onPress={() => active('Normal')}></Button>
        <Button title='Acne' onPress={() => active('Acne')}></Button>

        </Text></View>);
}