import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class HomeScreen extends PureComponent {
  render() {
    return (
      <View>
        <Text>HomeScreen works!</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Auth');
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
