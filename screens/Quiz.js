import React, { useEffect, useState } from 'react';
import{ Button, FlatList, View, Text, StatusBar, StyleSheet, Alert} from 'react-native';
import HeaderBar from '../components/HeaderBar.js'
import DropDownPicker from 'react-native-dropdown-picker';

export default function Quiz ({ navigation }){
    const [skin, setSkin] = useState('');
    const [questions, setQuestions] = useState([{label: 'Base products', value: 'foundation'}, 
    {label: 'Bronzer', value: 'bronzer'}, {label: 'Blush', value: 'blush'},
    {label: 'Eyeliner', value: 'eyeliner'},
    {label: 'Eyeshadow', value: 'eyeshadow'}, {label: 'Lipliner', value: 'lip_liner'}, 
    {label: 'Lipstick', value: 'lipstick'}, {label: 'Mascara', value: 'mascara'},
    {label: 'Nail polish', value: 'nail_polish'}])

    return (
        <React.Fragment>
        <StatusBar hidden={true} />
        <HeaderBar />
        <View style={styles.container}>
        <Text style={{fontSize: 18}}>Select product category</Text>
        <View style={styles.box}>
        <DropDownPicker
          items={questions}
          defaultIndex={0}
          containerStyle={{width: 300, height: 40}}
          onChangeItem={item => setSkin(item)}
        /></View>
      <View style={styles.next}>
      <Button color='#E35D86' onPress={() => navigation.navigate('Tags', {'list': skin.value, 'name': skin.label})} title="Next">
      </Button>
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
    marginBottom: -100,
    
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    paddingBottom: -500
  },
  next: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   // marginTop: -500,
    marginLeft: 250
    
  }
  
  
  
 
});