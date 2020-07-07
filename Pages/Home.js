import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import List from '../Screens/List';
import News from '../Screens/News';

export default createStackNavigator(
  {
    List,
    News,
  },
  {
    initialRouteName: 'List',
   
  },
  {headerMode: 'none'},
);
