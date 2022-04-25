import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {color} from '../Customs/Colos';
import {Iconic} from '../Icon/index';

const TopNavbar = (_props: any) => {
  const styles = styleTheme();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Iconic
          type="ENTYPO"
          name="chevron-thin-left"
          style={styles.chevronIcon}
        />
        <Text style={styles.titleText}>Navbar</Text>
      </View>
    </SafeAreaView>
  );
};

export default TopNavbar;

const styleTheme = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
    },
    chevronIcon: {marginRight: 10},
    titleText: {fontSize: 18, fontWeight: '600'},
  });
};
