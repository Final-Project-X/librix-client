import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ButtonGradient = ({ children, customStyles }) => {
  return (
    <LinearGradient
      colors={['#d8d3ff', '#5f41ee']}
      start={[1.25, 1]}
      style={[styles.gradient, customStyles]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 20,
  },
});

export default ButtonGradient;
