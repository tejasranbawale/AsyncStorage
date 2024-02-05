import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Register from './Components/Register';
import SectionListApp from './Components/SectionList';
import StatusBarApp from './Components/StatusBarApp';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Register />
        <SectionListApp />
        <StatusBarApp />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
