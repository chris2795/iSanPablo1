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
import logo2 from '../assets/package.png';

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
  {
    id: 3,
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
const iSanPablo = [
  {
    id: 1,
    previewImage: logo2,
  },
  {
    id: 2,
    previewImage: logo2,
  },
  {
    id: 3,
    previewImage: logo2,
  },
 
  {
    id: 4,
    previewImage: logo2,
  },
 
  {
    id: 5,
    previewImage: logo2,
  },
  {
    id: 6,
    previewImage: logo2,
  },
 
];

const styles = StyleSheet.create({
  flex: {
    flex: 1,
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
    width: width - 22 * 2,
    height: width - 22 * 2,
    borderRadius: 12,
    marginHorizontal: 22,
    paddingHorizontal: 22,
    paddingVertical: 24,
    padding: 22,
  },
  destinations: {
    justifyContent: 'space-between',
  },
  recommended: {
    padding: 20,
  },
  recommendedList: {
  borderRadius: 12
  },
  recommendation: {
    width: (width - 36 * 2) / 2,

    borderRadius: 12,
    marginHorizontal: 18,
    // paddingHorizontal: 33,
    // paddingVertical: 24,
  },
  recommendationImage: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    width: (width - 36 * 2) / 2,
    height: (width - 36 * 2) / 2,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  dots: {
    width: 11,
    height: 11,
    backgroundColor: '#DCE0E9',
    borderRadius: 7,
    borderWidth: 2,
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
          <Text style={{fontSize: 20}}>City Government of San Pablo</Text>
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
      <View style={[styles.column, styles.destinations, styles.shadow]}>
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
        <View
          style={[
            styles.row,
            {
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 20,
            },
          ]}>
          <Text style={{fontSize: 18}}>Recommended</Text>
          <Text style={{color: '#BCCCD4'}}>More</Text>
        </View>
        <View style={[styles.column, ]}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            data={this.props.isanpanblo}
            keyExtractor={(item, index) => `$(item.id)`}
            renderItem={({item}) => this.renderRecommendation(item)}
          />
        </View>
      </View>
    );
  };

  renderRecommendation = item => {
    return (
      <View style={[ styles.shadow, {  width: (width - 36 * 2) / 2, marginHorizontal: 12, borderRadius: 12 ,backgroundColor: 'white' ,marginVertical: 5 }]}>
      <View style={{ height: (width - 36\
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        * 2) / 2,   width: (width - 36 * 2) / 2,}}>
          <ImageBackground
          6t666666666666666666666666666666666666666666666666666666666666666`````````````````````  style={[styles.flex, styles.row, styles.recommendationImage]}
            imageStyle={{
              // borderTopRightRadius: 12,
              // borderTopLeftRadius: 12,
              margin: 10,
              // width: (width - 36* 2) / 2,
              // height: (width - 36 * 2) / 2,
            }}
            source={item.previewImage}2>
     
          </ImageBackground>
          </View>
          <View style={[ styles.column, { height: 'auto', width: (width - 36 * 2) / 2, justifyContent: 'space-evenly', }]}>
          <Text style={{ fontSize: 18, fontWeight: '500', paddingBottom: 8}} >asdasdasd</Text>
          </View>
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
  isanpanblo: iSanPablo,
};

export default Articles;
