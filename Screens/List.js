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
    paddingHorizontal: 33,
    marginBottom: 60,
    paddingTop: 40,
  },
  news: {},
  destination: {
    width: width - 33 * 2,
    borderRadius: 12,
    marginHorizontal: 33,
    paddingHorizontal: 33,
    paddingVertical: 24,
    padding: 33,
    overflow: 'visible',
  },
  destinations: {
    overflow: 'visible',
    marginBottom: 50, // add this
  },
  recommended: {
    padding: 33,
  },
  avatar: {
    width: 33,
    height: 33,
    borderRadius: 18,
  },
  destinationInfo: {
    position: 'absolute',
    padding: 24,
    bottom: -33,
    right: 33,
    left: 33,
    borderRadius: 12,
    backgroundColor: 'white',
  
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

  renderDestinations = () => {
    return (
      
      <View  style={[styles.flex, styles.column]}>

        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          data={this.props.destinations}
          keyExtractor={(item, index) => `$(item.id)`}
          renderItem={({item}) => (
            
            this.renderDestination(item)
       
          )}
        />
          
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
              {item.user.name}
            </Text>
            <Text style={{color: 'white'}}>{item.location}</Text>
          </View>
        </View>
        <View style={[styles.destinationInfo, styles.column]}>

          <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
          <Text>{item.previewDescription}</Text>
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
      <>
        <View>
          <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        </View>
        <View style={[styles.flex, styles.news]}>
        <View style={{
        width: 200,
        height: 200,
        position:'relative',
        backgroundColor: 'green',
      }}>
        <View style={{
          position: 'absolute',
          top: 20,
      
          width: 400,
          height: 100,
          backgroundColor: 'red',
        }} />
      </View>
          {this.renderDestinations()}
          {this.renderRecommended()}
        </View>
      </>
    );
  }
}
Articles.defaultProps = {
  destinations: home,
};

export default Articles;
