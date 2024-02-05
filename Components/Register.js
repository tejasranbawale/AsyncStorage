import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  Button,
  Alert,
  View,
} from 'react-native';
import React from 'react';

export default function Register() {
  const showToast = () => {
    ToastAndroid.show('Register Button Pressed !!!', ToastAndroid.SHORT);
  };

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Registration',
      'Are you Sure to be registered with this Site',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
    );

  return (
    <View>
      <Text style={styles.pageHeader}>Registration form</Text>
      <TextInput style={styles.input} placeholder="Enter Your Name" />
      <TextInput style={styles.input} placeholder="Enter Roll Number" />
      <TextInput style={styles.input} placeholder="Enter Email ID" />
      <TextInput style={styles.input} placeholder="Enter Mobile Number" />
      <TextInput style={styles.input} placeholder="Enter Class" />
      <TextInput style={styles.input} placeholder="Enter Department" />
      <TextInput style={styles.input} placeholder="Enter College name" />
      <View style={styles.register}>
        <Button title="Register Alert" onPress={createTwoButtonAlert} />
      </View>
      <View style={styles.register}>
        <Button title="Register Toast" onPress={showToast} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageHeader: {
    alignSelf: 'center',
    marginTop: 10,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    borderColor: 'green',
  },

  register: {
    marginLeft: 90,
    marginRight: 90,
    marginBottom: 20,
    marginTop: 20,
  },
});
