import * as React from 'react';
import {
    Dimensions, 
  View,
  ImageBackground,
  FlatList,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {Card} from '../components/Card'
import {Title} from '../components/Title'
import Header from '../components/Header.js'

const eventslist = [
  {
    src:
      'https://www.teads.com/wp-content/uploads/2019/10/cover-research-beauty.jpg',
    title: 'Breakfast',
    description: 'Byy'
  },
  {
    src:
      'https://media.self.com/photos/57e00e471db118765d302bdd/2:1/pass/sub-channel-beauty_makeup.jpg',
    title: 'Brunch',
    description: 'Bää'
  },
  {
    src:
      'https://media-we-cdn.oriflame.com/-/media/Images/Navigation/Main-menu/Discover-2020/Beauty-by-sweden/13370393_2732x778x580.ashx?u=0101010000',
    title: 'Lunch',
    description: 'Böö'
  },
  {
    src:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWQzqNelD6MSJgPKigH22LtCosXeK4d9W1QWvfknbN-hFPNXssY9U-Ly9VkGatsiXw5M&usqp=CAU',
    title: 'Snacks',
    description: 'Zii'
  },
  {
    src:
      'https://media.allure.com/photos/5f6fa448eb43f61579aac592/16:9/w_3408,h_1917,c_limit/coconut-oil-uses-lede.jpg',
    title: 'Dinner',
    description: 'BZäp'
  },
];

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
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
      <Text style={{marginLeft: 15}}>{item.description}</Text>
    </Card>
  );

  render() {
    return (
     <View style={styles.mainContainer}>
    <Header />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={this.keyExtractor}
          data={eventslist}
          renderItem={this.renderCarousel}
        />
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
  },
  cardContainerStyle: {
  
    overflow: 'hidden',
    elevation: 5,
    //margin: 5,
    width: Dimensions.get('window').width*0.9,
  },
  imageBackgroundStyle: {
    width: Dimensions.get('window').width*0.85,
    height: 160,
    marginLeft: 10,
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
  },
};
