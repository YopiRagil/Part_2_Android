/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Iconic} from '../Icon';

function Avatar(_props: AvatarType) {
  const {size, profile} = _props;
  const styles = styleTheme();
  if (profile) {
    return (
      <Image
        style={{width: size + 20, height: size + 20, borderRadius: 1000}}
        resizeMode="center"
        source={{uri: profile}}
      />
    );
  } else {
    return (
      <View style={styles.boxIcon}>
        <Iconic name="user" type="ENTYPO" size={size} color="white" />
      </View>
    );
  }
}

export default Avatar;

const styleTheme = () => {
  return StyleSheet.create({
    boxIcon: {
      backgroundColor: '#686b82',
      borderRadius: 100,
      padding: 10,
    },
  });
};
