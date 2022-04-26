/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {ROUTES} from '../../Navigation/Routes';
import {ButtonX} from '../../Component/Button';
import {theme} from '../../Customs/Colos';
import Avatar from '../../Component/Avatar';

function ProfileScreen() {
  const {navigate, goBack} = useNavigation<any>();
  const {params} = useRoute<any>();
  const styles = styleTheme();

  useFocusEffect(
    useCallback(() => {
      if (!params?.name) {
        goBack();
      }
    }, [params?.name]),
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.wellcomeText}>Wellcome</Text>
        <Text style={styles.userName}>{params.name}</Text>
      </View>
      <View style={styles.iconCenter}>
        <View style={styles.mb20}>
          <Avatar size={150} profile={params.profile} />
        </View>
        <Text style={styles.userName2}>{params?.name}</Text>
        <Text style={styles.userEmail}>{params?.email}</Text>
        <TouchableOpacity onPress={() => navigate(ROUTES.WEBVIEW)}>
          <Text style={styles.userWeb}>website</Text>
        </TouchableOpacity>
      </View>
      <ButtonX
        label="Choose a User"
        onPress={() => navigate(ROUTES.USERS.USER)}
      />
    </View>
  );
}
// 'https://suitmedia.com/';

export default ProfileScreen;

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
    userName2: {
      fontSize: 24,
      fontFamily: theme.font.PoppinsM,
      color: theme.color.text,
    },
    userEmail: {
      fontSize: 18,
      fontFamily: theme.font.Poppins,
    },
    userWeb: {
      fontSize: 18,
      fontFamily: theme.font.PoppinsM,
      color: theme.color.primary,
      textDecorationLine: 'underline',
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
