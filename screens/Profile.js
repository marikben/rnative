import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, Modal, Pressable, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { Header, Icon, ListItem } from 'react-native-elements';

export default function Profile ({ navigation }) {
  const [data, setData] = useState([]);
  const tags = navigation.getParam('list'); //route.params substitute for drawer navigation
  const type = navigation.getParam('type');
  const [modalVisible, setModalVisible] = useState(false);
  //console.log(tags)

  async function getData () {
    const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?&product_type=foundation';
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
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
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
              <ListItem bottomDivider >
                 <Pressable
        
        onPress={() => setModalVisible(true)}
      >
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
                </Pressable>
              </ListItem>
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
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
    textAlign: "center"
  }
});
