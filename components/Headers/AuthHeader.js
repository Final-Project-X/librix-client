import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Dimensions,
  Platform,
} from 'react-native';

import { colors } from '../../global/styles';
import smallLogo from '../../assets/librix-small-logo.png';

const windowHeight = Dimensions.get('window').height;

const AuthHeader = () => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={smallLogo} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
    height: windowHeight / 9,
    alignItems: 'baseline',
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
    backgroundColor: colors.almostWhite,
  },
  text: {
    fontSize: 22,
    marginLeft: 30,
    color: colors.primary.dark,
  },
  logoContainer: {
    padding: 5,
    marginLeft: 20,
    height: 36,
    width: 72,
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});

export default AuthHeader;
