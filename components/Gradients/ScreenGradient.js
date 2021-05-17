import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ScreenGradient = ({ children }) => {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#FAA96C']}
      start={[0.2, 0.7]}
      style={styles.gradient}
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
