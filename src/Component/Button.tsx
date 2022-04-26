/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../Customs/Colos';

export const ButtonX = (_props: ButtonType) => {
  const {disabled, label, onPress} = _props;
  const styles = styleTheme();

  return (
    <TouchableOpacity
      style={styles.touchable}
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}>
      <View
        style={[
          styles.button,
          {backgroundColor: disabled ? 'silver' : theme.color.primary},
        ]}>
        <Text style={styles.labelButton}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styleTheme = () => {
  return StyleSheet.create({
    touchable: {width: '100%', marginBottom: 15},
    button: {
      width: '100%',
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 11,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    labelButton: {
      color: 'white',
      fontFamily: theme.font.PoppinsM,
      fontSize: 16,
      marginBottom: -3,
    },
  });
};
