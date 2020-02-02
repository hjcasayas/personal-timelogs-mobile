import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createAppContainer } from 'react-navigation';

import rootSwitchNavigator from './navigation/root-switch.navigator';
EStyleSheet.build({});

const App = createAppContainer(rootSwitchNavigator);

export default () => <App />;
