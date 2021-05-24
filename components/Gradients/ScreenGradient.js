import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../global/styles';

const ScreenGradient = ({ children, customStyles }) => {
  return (
    <LinearGradient
      colors={[colors.neutralBackground, colors.secondary.light]}
      start={[0.1, 0.6]}
      end={[0.5, 1]}
      style={[styles.gradient, customStyles]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export default ScreenGradient;
