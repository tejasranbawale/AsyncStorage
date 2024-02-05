import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function imageView() {
  return (
    <View>
      <Text>imageView</Text>
      <Image
        source={{
          uri: 'https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
