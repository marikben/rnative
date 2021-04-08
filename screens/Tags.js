import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header, Icon, ListItem } from 'react-native-elements';
import TagSelector from 'react-native-tag-selector';

export default function Tags ({ navigation }) {
    const [selections, setSelections] = useState([]);
    const type = navigation.getParam('list');
    const tags = getTags(type);
    
    useEffect(() => {
        getTags(type) 
    })

    function getTags (param) {
    
    switch(param) {
        case 'foundation':
         return[{'name': 'Vegan', 'id': 'Vegan'}, {'name': 'Natural', 'id': 'Natural'},
         {'name': 'Hypoallergenic', 'id': 'Hypoallergenic'}, {'name': 'No talc', 'id': 'No talc'},
         {'name': 'Cruelty free', 'id': 'Cruelty free'}, {'name': 'Alcohol free', 'id': 'Alcohol free'},
         {'name': 'Oil free', 'id': 'Oil free'}, {'name': 'Silicone free', 'id': 'Silicone free'}]
          break;
        case 'mascara':
          return[{'name': 'Vegan', 'id': 'Vegan'}, {'name': 'Natural', 'id': 'Natural'},
          {'name': 'Hypoallergenic', 'id': 'Hypoallergenic'}, {'name': 'Ecocert', 'id': 'Ecocert'},
          {'name': 'Organic', 'id': 'Organic'}]
          break;
        case 'lipstick':
            return[{'name': 'Vegan', 'id': 'Vegan'}, {'name': 'Natural', 'id': 'Natural'},
            {'name': 'Hypoallergenic', 'id': 'Hypoallergenic'}, {'name': 'Cruelty free', 'id': 'Cruelty free'},
            {'name': 'Organic', 'id': 'Organic'}]
            break;
        case 'lipliner':
            return[{'name': 'Vegan', 'id': 'Vegan'}, {'name': 'Natural', 'id': 'Natural'},
            {'name': 'Hypoallergenic', 'id': 'Hypoallergenic'}, {'name': 'Cruelty free', 'id': 'Cruelty free'}];
            break;
        case 'eyeshadow':
            return[{'name': 'Vegan', 'id': 'Vegan'}, {'name': 'Natural', 'id': 'Natural'},
            {'name': 'Hypoallergenic', 'id': 'Hypoallergenic'}, {'name': 'Ecocert', 'id': 'Ecocert'},
            {'name': 'Organic', 'id': 'Organic'}, {'name': 'No talc', 'id': 'No talc'}]
            break;
        case 'eyeliner':
            return[{'name': 'Vegan', 'id': 'Vegan'}, {'name': 'Natural', 'id': 'Natural'},
            {'name': 'Hypoallergenic', 'id': 'Hypoallergenic'}, {'name': 'Ecocert', 'id': 'Ecocert'},
            {'name': 'Organic', 'id': 'Organic'}];
            break;
        case 'bronzer':
            return[{'name': 'Vegan', 'id': 'Vegan'}, {'name': 'Natural', 'id': 'Natural'},
            {'name': 'Organic', 'id': 'Organic'}]
            break;
        case 'blush':
            return [{'name': 'Vegan', 'id': 'Vegan'}, {'name': 'Natural', 'id': 'Natural'},
            {'name': 'Hypoallergenic', 'id': 'Hypoallergenic'},
            {'name': 'Organic', 'id': 'Organic'}, {'name': 'No talc', 'id': 'No talc'}]
            break;
        case 'nail_polish':
            return([{'name': 'Vegan', 'id': 'Vegan'}, {'name': 'Natural', 'id': 'Natural'}])
            break;

        default:
          console.log('toimii');
      
        }
    }
    
    return(
    <View style={styles.container}>
        <Header 
        containerStyle={styles.header}
        leftComponent={{icon: 'arrow-left'}}
        onPress={() => navigation.navigate('Base')}/>
        <Text>Select preferences</Text>
        <View>
				<TagSelector 
					maxHeight={70}
					tags={tags}
					onChange={(selected) => setSelections({ selected })} />
			</View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
        header: {
          paddingTop: 40,
          backgroundColor: 'whitesmoke',
        }
    })