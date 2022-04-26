/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function MapScreen() {
  const styles = styleTheme();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Map Screens</Text>
    </View>
  );
}

export default MapScreen;

const styleTheme = () => {
  return StyleSheet.create({});
};
