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
  Animated,
} from 'react-native';

import {Thumbnail} from 'native-base';

import * as theme from '../theme';

import {ScrollView} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';

import ViewMoreText from 'react-native-view-more-text';

//local data
import {home} from '../localdata/datahome';
import {iSanPablo} from '../localdata/dataiSanPablo';
import {news} from '../localdata/datanews';

import {
  Row,
  Column as Col,
  Grid,
  setBreakPoints,
} from 'react-native-responsive-grid';

const {width, height} = Dimensions.get('screen');
const height_logo = width * 0.7 * 1.2;

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

  // style News
  card: {
    marginTop: 30,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f5f3f2',
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    width: height_logo,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    // shadowOffset: {
    //   width: 1,
    //   height: 3,
    // },
  },
  titleNews: {
    fontSize: 20,
    margin: 1,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#082f9c',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 18,

    marginStart: 5,
    fontWeight: '200',
    color: '#082f9c',
  },
  namedesc: {
    fontSize: 16,
    marginStart: 5,
    fontWeight: '200',
    color: '#92949c',
  },
  //style End of News
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
            paddingTop: 10,
            justifyContent: 'space-between',
            alignContent: 'center',
          },
        ]}>
        <View>
          <Text style={{color: theme.colors.caption}}>
            Republic of the Philippines
          </Text>
          <Text style={{fontSize: 20}}>City Government of San Pablo</Text>
        </View>
        <View>
          <Icon
            name="menu"
            size={23}
            type="Feather"
            color="grey"
            style={{marginTop: 10}}
          />
        </View>
      </View>
    ),
  };

  //Banner
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
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: this.scrollX}}},
          ])}
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
            <Text style={{color: theme.colors.white, fontWeight: 'bold'}}>
              {item.title}
            </Text>
            <Text style={{color: theme.colors.white}}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  };

  renderDots() {
    const {destinations} = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);

    return (
      <View
        style={[
          styles.flex,
          styles.row,
          {justifyContent: 'center', marginTop: 10},
        ]}>
        {destinations.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2, 0],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[styles.dots, styles.activeDot, {borderWidth: opacity}]}
            />
          );
        })}
      </View>
    );
  }
  //End of Banner

  //iSanPablo
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

  renderRecommendation = item => {
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
  //End of iSanPablo

  //News
  renderNews = () => {
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
          <Text style={{fontSize: 24}}>News and Announcement</Text>
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
            data={this.props.News}
            onScroll={Animated.event}
            keyExtractor={(item, index) => `$(item.id)`}
            renderItem={({item}) => this.renderNewsInformation(item)}
          />
        </View>
      </View>
    );
  };

  renderNewsInformation = item => {
    return (
      <View style={styles.card}>
        <Text style={styles.titleNews}>{item.title}</Text>
        <Image source={item.image} style={styles.cardImage} />
        <View style={{flexDirection: 'row', padding: 10}}>
          <Thumbnail source={item.thumb} style={{height: 43, width: 43}} />
          {/* News Claimer */}
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.name}>{item.officeUploader}</Text>
            <Text style={styles.namedesc}>{item.nameUploader}</Text>
          </View>
        </View>
      </View>
    );
  };
  //End of News

  render() {
    return (
      <ScrollView
        style={[styles.flex, styles.column, {backgroundColor: '#FFFF'}]}>
        <StatusBar backgroundColor="#FFFF" barStyle="dark-content" />
        <View style={[styles.flex, styles.column]}>
          {this.renderDestinations()}
          {this.renderNews()}
          {this.renderRecommended()}
        </View>
      </ScrollView>
    );
  }
}
Articles.defaultProps = {
  destinations: home,
  isanpanblo: iSanPablo,
  News: news,
};

export default Articles;
