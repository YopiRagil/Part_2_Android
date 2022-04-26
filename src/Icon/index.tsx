/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import {TextStyle} from 'react-native';
import {theme} from '../Customs/Colos';

export type ICONType =
  | 'ANT'
  | 'ENTYPO'
  | 'ZOCIAL'
  | 'EVIL'
  | 'OCTICONS'
  | 'FONTISTO'
  | 'IONIC'
  | 'FEATHER'
  | 'FONTAWESOME'
  | 'FONTAWESOME_5'
  | 'MATERIAL'
  | 'MATERIALCOMMUNITY';

export interface IconType {
  type: ICONType;
  name: string;
  size?: number;
  style?: TextStyle;
  color?: string;
}

export const Iconic = (props: IconType) => {
  const {
    type,
    name = 'user',
    color = theme.color.primary,
    size = 24,
    style,
  } = props;
  let Element: any = FontAwesome;

  switch (type) {
    case 'ANT':
      Element = AntDesign;
      break;
    case 'ENTYPO':
      Element = Entypo;
      break;
    case 'MATERIAL':
      Element = MaterialIcons;
      break;
    case 'FONTAWESOME_5':
      Element = FontAwesome5;
      break;
    case 'FEATHER':
      Element = Feather;
      break;
    case 'EVIL':
      Element = EvilIcons;
      break;
    case 'FONTAWESOME':
      Element = FontAwesome;
      break;
    case 'OCTICONS':
      Element = Octicons;
      break;
    case 'MATERIALCOMMUNITY':
      Element = MaterialCommunityIcons;
      break;
    case 'FONTISTO':
      Element = Fontisto;
      break;
    case 'IONIC':
      Element = Ionicons;
      break;
    case 'ZOCIAL':
      Element = Zocial;
      break;
    default:
      Element = FontAwesome;
      break;
  }

  return (
    <Element
      name={name}
      size={size}
      color={color}
      style={[{width: size}, style]}
    />
  );
};
