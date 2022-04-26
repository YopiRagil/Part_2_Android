import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const color = {
  primary: '#2B637B',
  text: '#04021D',
};

const font = {
  sansserif: 'sans-serif',
  Noticia: 'Noticia',
  PoppinsXS: 'Poppins-Thin',
  PoppinsS: 'Poppins-Light',
  Poppins: 'Poppins-Regular',
  PoppinsM: 'Poppins-Medium',
  PoppinsL: 'Poppins-SemiBold',
  PoppinsXL: 'Poppins-Bold',
  Roboto: 'Roboto',
  Condensed: 'sans-serif-condensed',
  Serif: 'Serif',
  Monospace: 'monospace',
  AveriaSerifLibre: 'AveriaSerifLibre',
};

export const theme = {
  font,
  color,
  width,
  height,
};
