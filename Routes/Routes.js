import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import Home from '../Pages/Home';

const AppNavigator = createStackNavigator(
  {

    Home: Home,
  },
  // {
  //   initialRouteName: 'Loading',
  {headerMode: 'none'},
);

const AppContainer = createAppContainer(AppNavigator);
// class App extends React.Component {
//   state = {
//     isLoaded: false,
//   };

//   setAppLoaded = () => {
//     this.setState({isLoaded: true});
//   };

//   render() {
//     return (
//       <AnimatedSplash
//         translucent={true}
//         isLoaded={this.state.isLoaded}
//         logoImage={require('../assets/img/sars.png')}
//         backgroundColor={'#90caf9'}
//         logoHeight={150}
//         logoWidht={150}>
//         <Container screenProps={{setAppLoaded: this.setAppLoaded}} />
//       </AnimatedSplash>
//     );
//   }
// }
export default AppContainer;
// export default App;
