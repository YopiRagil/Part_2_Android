import React, {useState} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../Navigation/Routes';
import {Iconic} from '../../Icon';
import {InputX} from '../../Component/Input';
import {ButtonX} from '../../Component/Button';
import {useDispatch} from 'react-redux';
import {setName} from '../../Redux/Action/Main.Action';

function LoginScreen(_props: any) {
  const {navigate} = useNavigation<any>();
  const styles = styleTheme();
  const [input, setInput] = useState({palindrome: '', name: ''});
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setInput({...input, [e.name]: e.value});
  };

  const checkPalindrome = () => {
    const splitString = input.name.split('');
    setInput({...input, palindrome: splitString.reverse().join('')});
  };

  const handleGoToHome = () => {
    dispatch(setName({name: input.name, picture: ''}));
    navigate(ROUTES.HOME);
  };
  return (
    <ImageBackground
      source={require('./../../Assets/Background/background1.png')}
      resizeMode="cover"
      style={styles.bgimage}>
      <LoginImage />
      <InputX
        placeholder="Name"
        name="name"
        value={input.name}
        onChangeText={handleChange}
      />
      <InputX
        placeholder="Palindrome"
        name="palindrome"
        value={input.palindrome}
        onChangeText={() => {}}
      />
      <View style={styles.viewSpace} />
      <ButtonX label="Check" onPress={checkPalindrome} />
      <ButtonX disabled={!input.name} label="Next" onPress={handleGoToHome} />
    </ImageBackground>
  );
}

export default LoginScreen;

const LoginImage = () => {
  const styles = styleTheme();
  return (
    <View style={styles.boxIcon}>
      <Iconic type="ENTYPO" name="add-user" size={40} color="white" />
    </View>
  );
};

const styleTheme = () => {
  return StyleSheet.create({
    bgimage: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
    },
    boxIcon: {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      padding: 20,
      borderRadius: 100,
      width: 116,
      height: 116,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    viewSpace: {
      height: 20,
    },
  });
};
