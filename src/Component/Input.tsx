import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {theme} from '../Customs/Colos';

export const InputX = (_props: InputType) => {
  const {placeholder, name, onChangeText, value} = _props;
  const styles = styleTheme();

  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      value={value}
      onChangeText={e => onChangeText({name: name, value: e})}
    />
  );
};

const styleTheme = () => {
  return StyleSheet.create({
    input: {
      backgroundColor: 'white',
      width: '100%',
      borderRadius: 12,
      paddingHorizontal: 20,
      fontSize: 16,
      fontFamily: theme.font.PoppinsM,
      marginBottom: 20,
    },
  });
};
