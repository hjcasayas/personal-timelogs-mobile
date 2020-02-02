import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import authStackNavigator from './auth-stack.navigator';

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
  initialRouteName: 'Auth'
};

const rootSwitchNavigator = createSwitchNavigator(
  routeConfigs,
  stackNavigatorConfigs
);

export default rootSwitchNavigator;
