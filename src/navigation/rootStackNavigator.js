import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import authStackNavigator from './authStackNavigator';

import { HomeScreen } from '../screens/home';

const routeConfigs = {
  Home: {
    screen: HomeScreen
  },
  Auth: {
    screen: authStackNavigator
  }
};

const stackNavigatorConfigs = {
  initialRoutename: 'Auth'
};

const rootStackNavigator = createStackNavigator(
  routeConfigs,
  stackNavigatorConfigs
);

export default rootStackNavigator;
