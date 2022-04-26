import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../Navigation/Routes';
import {useSelector} from 'react-redux';
import {ButtonX} from '../Component/Button';
import {theme} from '../Customs/Colos';
import Avatar from '../Component/Avatar';

function HomeScreen() {
  const {navigate} = useNavigation<any>();
  const mainState = useSelector((state: IState) => state.main);
  const styles = styleTheme();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.wellcomeText}>Wellcome</Text>
        <Text style={styles.userName}>{mainState.name}</Text>
      </View>
      <View style={styles.iconCenter}>
        <View style={styles.mb20}>
          <Avatar size={150} />
        </View>
        <Text style={styles.selectUser}>Select a user to show the profile</Text>
      </View>
      <ButtonX
        label="Choose a User"
        onPress={() => navigate(ROUTES.USERS.USER)}
      />
    </View>
  );
}

export default HomeScreen;

const styleTheme = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: 20,
      flexDirection: 'column',
    },
    iconCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxIcon: {backgroundColor: '#686b82', borderRadius: 100, marginBottom: 20},
    wellcomeText: {
      fontFamily: theme.font.PoppinsM,
      fontSize: 12,
      color: theme.color.text,
    },
    userName: {
      fontSize: 18,
      fontFamily: theme.font.PoppinsM,
      color: theme.color.text,
    },
    selectUser: {
      fontSize: 18,
      fontFamily: theme.font.Poppins,
    },
    mb20: {
      marginBottom: 20,
    },
  });
};
