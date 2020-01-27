import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import { LoginScreen } from '../screens/login';
import { RegistrationScreen } from '../screens/registration';

const routeConfigs = {
  Login: {
    screen: LoginScreen
  },
  Registration: {
    screen: RegistrationScreen
  }
};

const stackNavigatorConfigs = {
  initialRoutename: 'Login',
  headerMode: 'none'
};

const authStackNavigator = createStackNavigator(
  routeConfigs,
  stackNavigatorConfigs
);

export default authStackNavigator;
