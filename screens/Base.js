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
        <View style={styles.container}>
        <Text style={{fontSize: 16}}>Select product category</Text>
        <View style={styles.box}>
        <FlatList
            style={{marginTop:60}}
            data={questions}
            renderItem={({item})=>(
            <View style={{justifyContent:'center',marginBottom:10, paddingRight: 5}}>
            <Button title={item.name} color="#EC88AC" onPress={() => setSkin(item)}></Button>
            </View>
            )} 
         numColumns={3}
            />
			</View>
      <View style={styles.next}>
      <Button color='#E35D86' onPress={() => navigation.navigate('Tags', {'list': skin.id, 'name': skin.name})} title="Next"></Button>
      </View>
        </View>
      </React.Fragment>
    );
  }


const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
   
  },
  next: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -700
  }
  
  
  
 
});