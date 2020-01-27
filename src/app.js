import React from 'react';
import { createAppContainer } from 'react-navigation';

import rootStackNavigator from './navigation/rootStackNavigator';

const App = createAppContainer(rootStackNavigator);

export default () => <App />;
