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
  Animated
} from 'react-native';


import * as theme from '../theme'
import icon from '../assets/new_icon.png';
import img1 from '../assets/slider3.jpg';
import logo2 from '../assets/package.png';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons';
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
    previevTitle: 'Business in the City',
  },
  {
    id: 2,
    previewImage: logo2,
    previevTitle: 'My Taxes',
  },
  {
    id: 3,
    previewImage: logo2,
    previevTitle: 'My App Online Request',
  },

  {
    id: 4,
    previewImage: logo2,
    previevTitle: 'City Hotlines',
  },

  {
    id: 5,
    previewImage: logo2,
    previevTitle: 'Government Online Services',
  },
  {
    id: 6,
    previewImage: logo2,
    previevTitle: 'City Employee Corner',
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
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingBottom: 60,
    paddingTop: 20,
  },

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
    borderRadius: 12,
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
  icon: {
    width: 33,
    height: 33,
 
  },
  // destinationInfo: {
  //   padding: 24,
  //   position: 'absolute',
  //   borderRadius: 12,
  //   backgroundColor: theme.colors.white,
  // },
  shadow: {
    shadowColor: '#000',
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
  scrollX = new Animated.Value(0);
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
          <Text style={{ color: theme.colors.caption}}>Republic of the Philippines</Text>
          <Text style={{fontSize: 20}}>City Government of San Pablo</Text>
        </View>
        <View>
          {/* <Image source={icon} style={[styles.icon]} /> */}
          <Icon size={24} color="blue" name="menu" type="Feather" />
          <Text />
        </View>
      </View>
    ),
  };

  renderDots() {
    const {destinations} = this.props;
    const dotPosition = Animated.divide(this.scrollX, width)

    return (
      <View
        style={[
          styles.flex,
          styles.row,
          {justifyContent: 'center', marginTop: 10},
        ]}>
        {destinations.map((item, index) => {
          const opacity = dotPosition.interpolate ({
            inputRange: [index -1, index, index + 1],
            outputRange: [0, 2, 0],
            extrapolate: 'clamp'
          })
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[styles.dots, styles.activeDot, {  borderWidth: opacity} ]}
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
          decelerationRate={0}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          data={this.props.destinations}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {x: this.scrollX}}}])}
          keyExtractor={(item, index) => `$(item.id)`}
          renderItem={({item}) => this.renderDestination(item)}
        />
        {this.renderDots()}
      </View>
    );
  };

  renderDestination = (item) => {
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
            <Text style={{color: theme.colors.white, fontWeight: 'bold'}}>
              {item.title}
            </Text>
            <Text style={{color: theme.colors.white}}>{item.location}</Text>
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
              marginBottom: 10,
              marginTop: 20,
            },
          ]}>
          <Text style={{fontSize: 24}}>My iSanPablo</Text>
          {/* <Text style={{color: '#BCCCD4'}}>More</Text> */}
        </View>
        <View style={[styles.column]}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            decelerationRate={0}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            data={this.props.isanpanblo}
            onScroll={Animated.event}
            keyExtractor={(item, index) => `$(item.id)`}
            renderItem={({item}) => this.renderRecommendation(item)}
          />
        </View>
      </View>
    );
  };

  renderRecommendation = (item) => {
    return (
      <View
        style={[
          {
            width: (width - 36 * 2) / 2,
            marginHorizontal: 5,
            borderRadius: 12,

            marginVertical: 5,
          },
        ]}>
        <View
          style={{height: (width - 36 * 2) / 2, width: (width - 36 * 2) / 2}}>
          <ImageBackground
            style={[styles.flex, styles.row, styles.recommendationImage]}
            imageStyle={{
              // borderTopRightRadius: 12,
              // borderTopLeftRadius: 12,
              margin: 10,
              // width: (width - 36* 2) / 2,
              // height: (width - 36 * 2) / 2,
            }}
            source={item.previewImage}
          />
        </View>
        <View
          style={[
            styles.column,
            {
              height: 'auto',
              width: (width - 36 * 2) / 2,
              justifyContent: 'space-evenly',
            },
          ]}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '800',
                paddingBottom: 8,
                alignSelf: 'center',
                width: (width - 36 * 2) / 2,
                textAlign: 'center',
              }}>
              {item.previevTitle}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView
        style={[styles.flex, styles.column, {backgroundColor: '#FFFF'}]}>
        <StatusBar backgroundColor="#FFFF" barStyle="dark-content" />
        <View style={[styles.flex, styles.column]}>
          {this.renderDestinations()}
          {this.renderRecommended()}
          {this.renderRecommended()}
        </View>
      </ScrollView>
    );
  }
}
Articles.defaultProps = {
  destinations: home,
  isanpanblo: iSanPablo,
};

export default Articles;
