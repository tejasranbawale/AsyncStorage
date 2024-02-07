import React, {useState} from 'react'; // Added useState
import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  Button,
  Alert,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register() {
  const [name, setName] = useState(''); // Added state for each input
  const [roll, setRoll] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [className, setClassName] = useState('');
  const [dept, setDept] = useState('');
  const [college, setCollege] = useState('');

  const setData = async () => {
    await AsyncStorage.setItem('data', 'good morning');
  };

  const getData = async () => {
    const storedData = await AsyncStorage.getItem('data');
    console.warn(storedData);
  };

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

  const handleSubmit = () => {
    // Print the details to console (you can modify this as needed)
    console.log('Name:', name);
    console.log('Roll Number:', roll);
    console.log('Email ID:', email);
    console.log('Mobile Number:', mobile);
    console.log('Class:', className);
    console.log('Department:', dept);
    console.log('College Name:', college);
  };

  return (
    <View>
      <Text style={styles.pageHeader}>Registration form</Text>
      <TextInput
        value={name}
        onChangeText={text => setName(text)} // Added onChangeText
        style={styles.input}
        placeholder="Enter Your Name"
      />
      <TextInput
        value={roll}
        onChangeText={text => setRoll(text)}
        style={styles.input}
        placeholder="Enter Roll Number"
      />
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        placeholder="Enter Email ID"
      />
      <TextInput
        value={mobile}
        onChangeText={text => setMobile(text)}
        style={styles.input}
        placeholder="Enter Mobile Number"
      />
      <TextInput
        value={className}
        onChangeText={text => setClassName(text)}
        style={styles.input}
        placeholder="Enter Class"
      />
      <TextInput
        value={dept}
        onChangeText={text => setDept(text)}
        style={styles.input}
        placeholder="Enter Department"
      />
      <TextInput
        value={college}
        onChangeText={text => setCollege(text)}
        style={styles.input}
        placeholder="Enter College name"
      />
      <View style={styles.register}>
        <Button title="Alert" onPress={createTwoButtonAlert} />
        <Button title="Toast" onPress={showToast} />
      </View>

      <View style={styles.register}>
        <Button title="set data" onPress={setData} />
        <Button title="get data" onPress={getData} />
        <Button title="Submit" onPress={handleSubmit} />
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
    marginBottom: 20,
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
});

// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   ToastAndroid,
//   Button,
//   Alert,
//   View,
// } from 'react-native';
// import React from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Register() {
//   const setData = async () => {
//     await AsyncStorage.setItem('data', 'good morning');

//   };

//   const getData = async () => {
//     const name = await AsyncStorage.getItem('data');
//     console.warn(name);
//     // ToastAndroid.show(name, ToastAndroid.SHORT);
//   };

//   const showToast = () => {
//     ToastAndroid.show('Register Button Pressed !!!', ToastAndroid.SHORT);
//   };

//   const createTwoButtonAlert = () =>
//     Alert.alert(
//       'Registration',
//       'Are you Sure to be registered with this Site',
//       [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//         {text: 'OK', onPress: () => console.log('OK Pressed')},
//       ],
//     );

//   return (
//     <View>
//       <Text style={styles.pageHeader}>Registration form</Text>
//       <TextInput value={name} style={styles.input} placeholder="Enter Your Name" />
//       <TextInput value={roll} style={styles.input} placeholder="Enter Roll Number" />
//       <TextInput value={email} style={styles.input} placeholder="Enter Email ID" />
//       <TextInput value={mobile} style={styles.input} placeholder="Enter Mobile Number" />
//       <TextInput value={className} style={styles.input} placeholder="Enter Class" />
//       <TextInput value={dept} style={styles.input} placeholder="Enter Department" />
//       <TextInput value={college} style={styles.input} placeholder="Enter College name" />
//       <View style={styles.register}>
//         <Button title="Alert" onPress={createTwoButtonAlert} />
//         <Button title="Toast" onPress={showToast} />
//       </View>

//       <View style={styles.register}>
//         <Button title="set data" onPress={setData} />
//         <Button title="get data" onPress={getData} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   pageHeader: {
//     alignSelf: 'center',
//     marginTop: 10,
//   },

//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     borderRadius: 4,
//     padding: 10,
//     borderColor: 'green',
//   },

//   register: {
//     marginLeft: 90,
//     marginRight: 90,
//     marginBottom: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginTop: 20,
//   },
// });
