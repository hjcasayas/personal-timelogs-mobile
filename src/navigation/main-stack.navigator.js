import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/home';

const routeConfigs = {
    Home: {
        screen: HomeScreen
    },
};

const stackNavigatorConfigs = {
    initialRouteName: 'Home',
};

const mainStackNavigator = createStackNavigator(routeConfigs, stackNavigatorConfigs);

export default mainStackNavigator;