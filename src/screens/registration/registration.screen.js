import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Text, Button, Input } from 'react-native-elements';

import styles from './registration.styles';

const handleRegister = (email, password, confirmPassword) => {
  console.log({ email, password, confirmPassword });
};

const RegistrationScreen = props => {
  // Hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { navigation } = props;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.container} type='padding'>
        <Text style={styles.text} h3>
          Register
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
        <Input
          placeholder='Confirm your passsord'
          containerStyle={styles.confirmPassword}
          onChangeText={setConfirmPassword}
          textContentType='password'
          secureTextEntry={true}
          autoCompleteType='off'
          autoCapitalize='none'
          label='Confirm Password'
          value={confirmPassword}
        />
        <Button
          onPress={() => {
            handleRegister(email, password, confirmPassword);
          }}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          title='REGISTER'
        />
        <Button
          title={`Have an account already?`}
          onPress={() => navigation.navigate('Login')}
          type='clear'
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
