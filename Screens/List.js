import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';

import img1 from '../assets/slider3.jpg';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');
const home = [
  {
    id: 1,
    user: {
      name: 'Christian Velasco',
      avatar: img1,
    },
    location: 'Brgy. IV-A, San Pablo City',
    title: 'Sampaloc Lake',
    previewDescription: 'Lorem Ispum noelasdsd asdsdlka',
    previewImage: img1,
  },
  {
    id: 2,
    user: {
      name: 'Christian Velasco',
      avatar: img1,
    },
    location: 'Brgy. IV-A, San Pablo City',
    title: 'Sampaloc Lake',
    previewDescription: 'Lorem Ispum noelasdsd asdsdlka',
    previewImage: img1,
  },
];
const styles = StyleSheet.create({
  flex: {
    flex: 2,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 60,
  },
  news: {},
  destination: {
    backgroundColor: 'red',
    width: width - 33 * 2,
    height: width - 33 * 2,
    borderRadius: 12,
    marginHorizontal: 33,
    paddingHorizontal: 33,
    paddingVertical: 24,
    padding: 33,
  },
  destinations: {
    justifyContent: 'space-between',


  },
  recommended: {
    padding: 33,
  },
  avatar: {
    width: 33,
    height: 33,
    borderRadius: 18,
  },
  // destinationInfo: {
  //   padding: 24,
  //   position: 'absolute',
  //   borderRadius: 12,
  //   backgroundColor: 'white',
  // },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  dots: {
    width: 12,
    height: 12,
    backgroundColor: '#DCE0E9',
    borderRadius: 7,
    borderWidth: 3,
    marginHorizontal: 7,
    borderColor: 'transparent',
  },
  activeDot: {
    borderColor: '#007BFA',
  },
});
class Articles extends Component {
  static navigationOptions = {
    header: (
      <View
        style={[
          styles.flex,
          styles.row,
          styles.header,
          {
            justifyContent: 'space-between',
            alignContent: 'center',
      
          },
        ]}>
        <View>
          <Text>Republic of the Philippines</Text>
          <Text style={{fontSize: 18}}>City Government of San Pablo</Text>
        </View>
        <View>
          <Image source={img1} style={[styles.avatar]} />
          <Text />
        </View>
      </View>
    ),
  };

  renderDots() {
    const {destinations} = this.props;
    return (
      <View
        style={[
          styles.flex,
          styles.row,
          {justifyContent: 'center', marginTop: 10},
        ]}>
        {destinations.map(item => {
          return (
            <View
              key={`step-${item.id}`}
              style={[styles.dots, item.id === 1 ? styles.activeDot : null]}
            />
          );
        })}
      </View>
    );
  }

  renderDestinations = () => {
    return (
      <View style={[ styles.column, styles.destinations, styles.shadow]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          data={this.props.destinations}
          keyExtractor={(item, index) => `$(item.id)`}
          renderItem={({item}) => this.renderDestination(item)}
        />
        {this.renderDots()}
      </View>
    );
  };

  renderDestination = item => {
    return (
      <ImageBackground
        style={[styles.flex, styles.destination]}
        imageStyle={{borderRadius: 12}}
        source={item.previewImage}>
        <View style={[styles.row]}>
          <View style={{flex: 0, alignSelf: 'center'}}>
            <Image source={item.user.avatar} style={[styles.avatar]} />
          </View>
          <View style={[styles.column, {flex: 2, paddingHorizontal: 18}]}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {item.title}
            </Text>
            <Text style={{color: 'white'}}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  };
  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <Text>Recommended</Text>
      </View>
    );
  };
  render() {
    return (
        <ScrollView contentContainerStyle={[styles.flex, styles.news]}>
          {this.renderDestinations()}
          {this.renderRecommended()}
        </ScrollView>
    
    );
  }
}
Articles.defaultProps = {
  destinations: home,
};

export default Articles;
