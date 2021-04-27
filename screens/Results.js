import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, Modal, Pressable, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Header, Icon, ListItem } from 'react-native-elements';
import firebase from '../database/firebaseDB';

export default function Results ({ navigation }) {
  const [data, setData] = useState([]);
  const tags = navigation.getParam('list'); //route.params substitute for drawer navigation
  const type = navigation.getParam('type');
  const [modalVisible, setModalVisible] = useState(false);
  const [mod, setMod] = useState('');
  const [items, setItems] = useState([]);
  const user = firebase.auth().currentUser;
  console.log(user.uid)
  //console.log(tags)


  async function getData () {
    const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_tags='+tags.selected+'&product_type='+type;
    try{
      const response = await fetch(url);
      const prod = await response.json();
      setData(prod);
      console.log(data);
    }
    catch (error) {
    setData('Error', error);
    };
    
  }
  const module = (props) => {
    setMod(props)
    setModalVisible(true);
    console.log(mod)
  }
  const saveItem = () => {
    console.log(mod)
    firebase.database().ref(user.uid+'/').push(
      {'nro': mod.id, 'name': mod.name, 'brand': mod.brand, 'price': mod.price, 'picture': mod.image_link}
    );
    console.log('success')
    setModalVisible(!modalVisible)
  }
    return (
      <React.Fragment>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{mod.name}</Text>
            <View style={styles.modal}>
           <Image
           style={{ width: 200, height: 200, resizeMode: 'stretch' }}
        source={{
          uri: mod.image_link
        }}
      /></View>
            <Text>Brand: {mod.brand}</Text>
            <Text>Price: {mod.price} $USD</Text>
            <Pressable
              style={[styles.buttonClose, styles.button]}
              onPress={() => setModalVisible(!modalVisible)}
              
            >
              <Text style={{color: 'white'}}>Hide Modal</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonClose, styles.button]}
              onPress={() => saveItem()}
              
            >
              <Text style={{color: 'white'}}>Add Item</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
        <Header 
        containerStyle={styles.header}
        leftComponent={<Icon name='keyboard-arrow-left' size={30}
            onPress={() => navigation.navigate('Tags')}
          />}
        />
        <View style={styles.container}>
        <Button color='#E35D86' onPress={getData} title='SHOW'></Button>
        </View>
      
        <View style ={styles.row}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableWithoutFeedback>
                <Pressable onPress={() => module(item)}>
              <ListItem bottomDivider >
                <ListItem.Content>
                  <View style={styles.row_cell_timeplace}>
                  
                  <ListItem.Title>{item.name.length < 25
                    ? `${item.name}`
                    : `${item.name.substring(0, 29)}...`}
                  </ListItem.Title>
                  <ListItem.Subtitle>{item.brand}</ListItem.Subtitle>
                  <ListItem.Subtitle>Price: {item.price}</ListItem.Subtitle>
                  </View>
                  <View style={styles.row_cell_temp}><Image source={{uri: item.image_link}} 
                    style={{
                    width:60,
                    height:100,
                    borderWidth:1,
                    borderColor:'grey',
                    resizeMode:'contain'
                  }}
                /></View> 
                </ListItem.Content>
              </ListItem>
              </Pressable>
              </TouchableWithoutFeedback>
            )
          }
          keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </React.Fragment>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -200
  },
  container2: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  row: {
    elevation: 1,
    borderRadius: 2,
    flex: 1,
    flexDirection: "row", // main axis
    justifyContent: "flex-start", // main axis
    alignItems: "center", // cross axis
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: -200,
    marginBottom: 6,
  },
  row_cell_timeplace: {
    flex: 1,
    flexDirection: "column",
  },
  row_cell_temp: {
    marginTop: -45,
    paddingLeft: 240,
    flex: 0,
  },
  row_time: {
    textAlignVertical: "bottom",
    includeFontPadding: false,
    flex: 0,
  },
  row_place: {
    textAlignVertical: "top",
    includeFontPadding: false,
    flex: 0,
  },
  header: {
    paddingTop: 40,
    backgroundColor: 'whitesmoke',
  },
  button: 
    {backgroundColor: "#E35D86", padding: 10, marginTop: 6, borderRadius: 5}
    
  ,
  buttonOpen: {
    backgroundColor: "#E35D86",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    paddingBottom : 100,
    paddingTop : 100,
    borderWidth : 1,
    borderColor : 'grey',
  },
});
