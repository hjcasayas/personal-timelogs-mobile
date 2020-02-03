import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import styles from './login.styles';

const handleLogin = (email, password) => {
  console.log({ email, password });
};

// Funtion Component
const LoginScreen = props => {
  // Hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { navigation } = props;
  console.log(email);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.container} type='padding'>
        <Text style={styles.text} h3>
          Login
        </Text>
        <Input
          placeholder='Enter your email'
          containerStyle={styles.email}
          onChangeText={setEmail}
          autoCompleteType='off'
          autoCapitalize='none'
          label='Email'
          value={email}
        />
        <Input
          placeholder='Enter your passsord'
          containerStyle={styles.password}
          onChangeText={setPassword}
          textContentType='password'
          secureTextEntry={true}
          autoCompleteType='off'
          autoCapitalize='none'
          label='Password'
          value={password}
        />
        <Button
          onPress={() => {
            handleLogin(email, password);
          }}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          title='SIGN IN'
        />
        <Button
          title={`Don't have an account yet?`}
          onPress={() => navigation.navigate('Registration')}
          type='clear'
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
