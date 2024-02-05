import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'Treks in Pune',
    data: ['Torana', 'RajGad', 'Lonawala'],
  },
  {
    title: 'Treks in Nashik',
    data: ['Harihar', 'Dugarwadi', 'Bramhgiri'],
  },
  {
    title: 'Treks in Nagar',
    data: ['Harishchandra gad', 'Ratangad', 'Kalsubai'],
  },
  {
    title: 'Other Treks',
    data: ['Sandhan Vally', 'Raigad'],
  },
];

const SectionListApp = () => (
  <SectionList
    sections={DATA}
    keyExtractor={(item, index) => item + index}
    renderItem={({item}) => (
      <View style={styles.item}>
        <Text style={styles.title}>{item}</Text>
      </View>
    )}
    renderSectionHeader={({section: {title}}) => (
      <Text style={styles.header}>{title}</Text>
    )}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    borderRadius: 4,
    marginLeft: 15,
    marginRight: 15,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
    color: '#000',
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    color: '#000',
  },
});

export default SectionListApp;
