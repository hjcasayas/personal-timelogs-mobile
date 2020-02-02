import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';

class RegistrationScreen extends PureComponent {
  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text>RegistrationScreen works</Text>
        <Button title='Login' onPress={() => navigation.navigate('Login')} />
      </View>
    );
  }
}

export default RegistrationScreen;
