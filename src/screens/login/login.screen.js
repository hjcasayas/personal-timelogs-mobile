import React, { PureComponent } from 'react';
import {View} from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import styles from './login.styles';

class LoginScreen extends PureComponent {

  handleLogin = () => {
    console.log('Login')
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}> 
        <Text style={styles.text} h3>Login</Text>
        <Input placeholder="Enter your email" label="Email" containerStyle={styles.email} />
        <Input placeholder="Enter your passsord" label="Password"  containerStyle={styles.password}/>
        <Button onPress={this.handleLogin} buttonStyle={styles.button} title="Sign In" />
      </View>
    );
  }
}

export default LoginScreen;
