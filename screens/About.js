import React, { Component } from 'react';
import firebase from '../database/firebaseDB';
import {Dimensions, View, ImageBackground, FlatList, Text, TouchableWithoutFeedback, StatusBar} from 'react-native';
import {Card} from '../components/Card'
import {Title} from '../components/Title'
import HeaderBar from '../components/HeaderBar';

export default class About extends Component {
  constructor() {
    super();

    this.state = {
      data: '',
      uid: ''
    };
  }
  
  keyExtractor = (item, index) => index.toString();
  renderCarousel = ({item}) => (
    <Card style={styles.cardContainerStyle}>
      <TouchableWithoutFeedback
        onPress={() => {
          this.setState({
            data: item.title,
          });
          this.props.onCarouselPress;
        }}>
        <ImageBackground
          source={{uri: item.src}}
          style={styles.imageBackgroundStyle}>
          <View style={styles.titleView}>
            <Title style={styles.titleStyle}>{item.title}</Title>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
      <Text style={styles.text}>{item.description}</Text>
    </Card>
  );

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }

    const eventslist = [
  
      {src:
          'https://www.teads.com/wp-content/uploads/2019/10/cover-research-beauty.jpg',
        title: 'Welcome',
        description: <Text >
        Hello, <Text style={{color:'#E35D86'}}>{this.state.displayName}</Text>! {'\n'}
        Swipe left to learn more about how to use this app.
      </Text>
      },
      {
        src:
          'https://media.self.com/photos/57e00e471db118765d302bdd/2:1/pass/sub-channel-beauty_makeup.jpg',
        title: 'Personalized',
        description: <Text >Take a quiz to find makeup products that fit your criteria:{'\n'}
        select product type and preferences for it!</Text>
      },
      {
        src:
          'https://media-we-cdn.oriflame.com/-/media/Images/Navigation/Main-menu/Discover-2020/Beauty-by-sweden/13370393_2732x778x580.ashx?u=0101010000',
        title: 'Favourites',
        description: <Text >Manage interesting products by adding them to your shopping list and
        deleting them when you feel like it. {'\n'}You can always come back to your saved items by 
        signing back to your account.</Text>
      },
      {
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWQzqNelD6MSJgPKigH22LtCosXeK4d9W1QWvfknbN-hFPNXssY9U-Ly9VkGatsiXw5M&usqp=CAU',
        title: 'Appointments',
        description: <Text>Mark your appointments in your personal calendar!</Text>
      },
      {
        src:
          'https://media.allure.com/photos/5f6fa448eb43f61579aac592/16:9/w_3408,h_1917,c_limit/coconut-oil-uses-lede.jpg',
        title: 'Profile',
        description: <Text>Change your profile picture and maintain your account.</Text>
      },
    ];

    return (
     <View style={styles.mainContainer}>
    <HeaderBar />
    <StatusBar hidden={true} />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={this.keyExtractor}
          data={eventslist}
          renderItem={this.renderCarousel}
        />
      </View>
    );
  }}


const styles = {
  mainContainer: {
    flex: 1
  },
  cardContainerStyle: {
    overflow: 'hidden',
    elevation: 3,
    width: Dimensions.get('window').width*0.965,
  },
  imageBackgroundStyle: {
    width: Dimensions.get('window').width*0.935,
    height: 160,
    marginLeft: 6,
    marginTop: 5,
    justifyContent: 'center',
  },
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  titleStyle: {
    color: '#fff',
    fontSize: 30,
    marginVertical: 10,
    textShadowColor: '#E11584',
    textShadowRadius: 10,
    
  },
  text: {marginLeft: 15,
     marginTop: 20,
     fontSize: 18,
     padding: 5},

};