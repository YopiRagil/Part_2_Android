import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Iconic} from '../Icon/index';
import {theme} from '../Customs/Colos';
import {ROUTES} from '../Navigation/Routes';
import {useNavigation} from '@react-navigation/native';

const TopNavbar = (_props: any) => {
  const {route, options} = _props;
  const {navigate, goBack} = useNavigation<any>();
  const styles = styleTheme();
  console.log(route);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => goBack()}>
          <Iconic
            type="ENTYPO"
            name="chevron-thin-left"
            style={styles.chevronIcon}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>{options.title}</Text>
        <View style={styles.rightIcon}>
          {route.name === ROUTES.USERS.MAP ? (
            <TouchableOpacity onPress={() => navigate(ROUTES.USERS.USER)}>
              <Iconic
                color={theme.color.primary}
                type="FONTAWESOME"
                name="list"
              />
            </TouchableOpacity>
          ) : route.name === ROUTES.USERS.USER ? (
            <TouchableOpacity onPress={() => navigate(ROUTES.USERS.MAP)}>
              <Iconic
                color={theme.color.primary}
                type="FONTAWESOME"
                name="map-marker"
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TopNavbar;

const styleTheme = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      alignItems: 'center',
      elevation: 5,
    },
    chevronIcon: {marginRight: 10},
    titleText: {
      fontSize: 18,
      fontWeight: '600',
      fontFamily: theme.font.PoppinsL,
      width: theme.width - 88,
      textAlign: 'center',
      color: theme.color.primary,
    },
    rightIcon: {
      width: 24,
    },
  });
};
