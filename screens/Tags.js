import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Header, Icon, ListItem } from 'react-native-elements';
import TagSelector from 'react-native-tag-selector';
import { TagSelect } from 'react-native-tag-select';

export default function Tags ({ navigation }) {
    const [selections, setSelections] = useState([]);
    const type = navigation.getParam('list');
    const name = navigation.getParam('name');
    const tags = getTags(type);
    const [key, setKey] = useState(1);
    const data = [{'name': 'Vegan', 'id': 'Vegan'}, {'name': 'Natural', 'id': 'Natural'},
    {'name': 'Hypoallergenic', 'id': 'Hypoallergenic'}, {'name': 'Cruelty free', 'id': 'Cruelty free'}];


    console.log(selections)
    useEffect(() => {
        getTags(type) 
        console.log(selections)
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
    
    const tagStyle = () => {
      
      if(selections.length===0){
        return {
          borderWidth: 0.25,
          borderColor: '#999999',  
          borderRadius: 5,  
          backgroundColor: '#FFF',
          padding: 7,
          margin: 2
        }
      }else{
        return {
          borderWidth: 0.25,
          borderColor: '#999999',  
          borderRadius: 5, 
          backgroundColor: '#dddddd',
          padding: 7,
          margin: 2
        }
      }
    }
    console.log(key)
    const tagSelect = () => {
      return <TagSelector 
      key={key}
      tags={tags}
                //containerStyle = {styles.container}
                selectedTagStyle = {styles.itemSelected}
                tagStyle = {styles.item}
                expandTextStyle={styles.label}
                //separatorStyle = {styles.separator}
                //expandBtnStyle = {styles.btnStyle}
                //expandTextStyle = {styles.btnText}
      onChange={(selected) => setSelections({ selected })} />
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
        <View style={styles.buttonContainer}>
				{tagSelect()}
			</View>
            <Button color='#E35D86' onPress={() => navigation.navigate('Results', {'list':selections, 'type':type}, setSelections([]), setKey(key+1))} title="Show products"></Button>
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
        },
        buttonContainer: {
            padding: 15,
          },
          buttonInner: {
            marginBottom: 15,
          },
          labelText: {
            color: '#333',
            fontSize: 15,
            fontWeight: '500',
            marginBottom: 15,
          },
          item: {
            borderWidth: 0.25,
            borderColor: '#999999',  
            borderRadius: 5,  
            backgroundColor: '#FFF',
            padding: 7,
            margin: 2
          },
          label: {
            color: '#333'
          },
          itemSelected: {
            borderWidth: 0.25,
            borderColor: '#999999',  
            borderRadius: 5, 
            backgroundColor: '#dddddd',
            padding: 7,
            margin: 2
          },
          labelSelected: {
            color: '#FFF',
          },
    })