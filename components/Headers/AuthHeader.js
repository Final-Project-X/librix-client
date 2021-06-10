import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import PrimaryMedium from '../Texts/PrimaryMedium';
import { colors } from '../../global/styles';

const AuthHeader = () => {
  return (
    <SafeAreaView style={styles.header}>
      <PrimaryMedium text="librix" customStyles={styles.text} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    backgroundColor: colors.almostWhite,
  },
  text: {
    fontSize: 22,
    marginLeft: 30,
    color: colors.primary.dark,
  },
});

export default AuthHeader;
