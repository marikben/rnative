import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header, Icon, ListItem } from 'react-native-elements';
import TagSelector from 'react-native-tag-selector';

export default function Tags ({ navigation }) {
    const [selections, setSelections] = useState([]);
    const type = navigation.getParam('list');
    const name = navigation.getParam('name');
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
        case 'lip_liner':
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
          return(['']);
      
        }
    }
    
    return(
        <React.Fragment>
        <Header 
        containerStyle={styles.header}
        leftComponent={<Icon name='keyboard-arrow-left' size={30}
            onPress={() => navigation.navigate('Base')}
          />}
        />
    <View style={styles.container}>
       
        <Text style={{padding: 10, fontSize: 16}}>Select preferences for your {name}</Text>
        <View style={{padding: 20}}>
				<TagSelector 
					maxHeight={70}
					tags={tags}
					onChange={(selected) => setSelections({ selected })} />
			</View>
            <Button color='#E35D86' onPress={() => navigation.navigate('Results', {'list':selections, 'type':type})} title="Show products"></Button>
    </View>
    </React.Fragment>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -500
    },
        header: {
          //paddingTop: 40,
          backgroundColor: 'whitesmoke',
        }
    })