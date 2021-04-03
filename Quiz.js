import React, { useEffect, useState } from 'react';
import{ Button, FlatList, View, Text, StatusBar, StyleSheet, Alert} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { Menu, Divider, Provider } from 'react-native-paper';
import MyComponent from './MyComponent';

export default function Quiz({ navigation }) {
    const [skin, setSkin] = useState('');
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

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
  
    return (<View>
        <Header
        leftComponent={<View><Button onPress={() => openMenu()} title='Show menu'><Icon name='menu'></Icon></Button>
        </View>
        }
        centerComponent={{text:'BEAUTY APP'}}
        rightComponent={{icon: 'home', color:'#fff'}}
          />
        <Button title='Oily' onPress={() => active('Oily')}></Button>
        <Button title='Dry' onPress={() => active('Dry')}></Button>
        <Button title='Normal' onPress={() => active('Normal')}></Button>
        <Button title='Acne' onPress={() => active('Acne')}></Button>
        <Button title='Open' onPress={() => navigation.navigate('MyComponent')}></Button>
        </View>);
}