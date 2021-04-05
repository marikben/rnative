import React, { useEffect, useState } from 'react';
import{ Button, FlatList, View, Text, StatusBar, StyleSheet, Alert} from 'react-native';
import Header from '../components/Header.js'
import TagSelector from 'react-native-tag-selector';

export default function Quiz ({ navigation }){
    const [skin, setSkin] = useState('');
    const [questions, setQuestions] = useState([{'name': 'Alcohol free', 'id': 'Alcohol free'}, 
    {'name': 'Cruelty free', 'id': 'Cruelty free'}, {'name': 'No talc', 'id': 'No talc'},
    {'name': 'Oil free', 'id': 'Oil free'}, {'name': 'Silicone free', 'id': 'Silicone free'},
    {'name': 'Vegan', 'id': 'Vegan'}])
    const [selections, setSelections] = useState([]);

    return (
        <React.Fragment>
        <Header />
        <View>
        <Text>Select preferences</Text>
        <View>
				<TagSelector 
					maxHeight={70}
					tags={questions}
					onChange={(selected) => setSelections({ selected })} />
			</View>
      <Button onPress={() => navigation.navigate('Products', {'list':selections})} title="Show products"></Button>
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