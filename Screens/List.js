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
      avatar: '',
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
    width: width - (33 * 2),
    borderRadius: 12,
    marginHorizontal: 33,
    padding: 33,
    backgroundColor: 'pink',
  },
  destinations: {},
  recommended: {
    padding: 33,
  },
  avatar: {width: 30, height: 30, borderRadius: 18},
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
          <Text>Avatar</Text>
          <Text />
        </View>
      </View>
    ),
  };

  renderDestinations = () => {
    return (
      <View style={[styles.flex, styles.column, styles.destinations]}>
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
      </View>
    );
  };

  renderDestination = item => {
    return (
      <ImageBackground
        style={[styles.flex, styles.destination]}
        imageStyle={{borderRadius: 12}}
        source={item.previewImage}>
        <View style={[ styles.row]}>
          <View>
            <Image source={{uri: item.user.avatar}} style={[styles.avatar]} />
          </View>
          <View style={[styles.flex, styles.column]}>
            <Text>{item.user.name}</Text>
            <Text>{item.location}</Text>
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
      <>
        <View>
          <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        </View>
        <View style={[styles.flex, styles.news]}>
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
