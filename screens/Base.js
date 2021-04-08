import React, { useEffect, useState } from 'react';
import{ Button, FlatList, View, Text, StatusBar, StyleSheet, Alert} from 'react-native';
import Header from '../components/Header.js'
import TagSelector from 'react-native-tag-selector';

export default function Quiz ({ navigation }){
    const [skin, setSkin] = useState('');
    const [questions, setQuestions] = useState([{'name': 'Base products', 'id': 'foundation'}, 
    {'name': 'Bronzer', 'id': 'bronzer'}, {'name': 'Blush', 'id': 'blush'},
    {'name': 'Brows', 'id': 'eyebrow'}, {'name': 'Eyeliner', 'id': 'eyeliner'},
    {'name': 'Eyeshadow', 'id': 'eyeshadow'}, {'name': 'Lipliner', 'id': 'lip_liner'}, 
    {'name': 'Lipstick', 'id': 'lipstick'}, {'name': 'Mascara', 'id': 'mascara'},
    {'name': 'Nail polish', 'id': 'nail_polish'}])

    return (
        <React.Fragment>
        <Header />
        <View>
        <Text>Select preferences</Text>
        <View>
        <FlatList
            style={{marginTop:40}}
            data={questions}
            renderItem={({item})=>(
            <View style={{justifyContent:'center',marginBottom:10}}>
            <Button title={item.name} onPress={() => setSkin(item.id)}></Button>
            </View>
            )}
            />
			</View>
        <Button onPress={() => navigation.navigate('Step2', {'list': skin})} title="Show products"></Button>
        <Button onPress={() => navigation.navigate('Tags', {'list': skin})} title="Tags"></Button>
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