import React, { useEffect, useState } from 'react';
import{ Button, FlatList, View, Text, StatusBar, StyleSheet, Alert} from 'react-native';
import Header from '../components/Header.js'
import TagSelector from 'react-native-tag-selector';
export default function ScreenOne () {
    const [skin, setSkin] = useState('');
    const [questions, setQuestions] = useState([{'name': 'Oily', 'id': 'Oily'}, 
    {'name': 'Dry', 'id': 'Dry'}, {'name': 'Normal', 'id': 'Normal'}])
    const [selections, setSelections] = useState([]);
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

    return (
        <React.Fragment>
        <Header />
        <View>
        <Text>Select your skin type</Text>
        <View>
				<TagSelector 
					maxHeight={70}
					tags={questions}
					onChange={(selected) => setSelections({ selected })} />
			</View>
        </View>
      </React.Fragment>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
 
});