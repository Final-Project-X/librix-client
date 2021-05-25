import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PrimaryBold from '../Texts/PrimaryBold';
import { colors } from '../../global/styles';

const AlertButton = ({ text, handlePress, variant }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles(variant).wrapper}>
      <PrimaryBold text={text} customStyles={styles(variant).text} />
    </TouchableOpacity>
  );
};

const styles = (variant) =>
  StyleSheet.create({
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 146,
      height: 50,
      backgroundColor:
        variant === 'white'
          ? colors.white
          : variant === 'purple' && colors.primary.dark,
      borderColor: variant === 'white' ? colors.primary.dark : null,
      borderWidth: variant === 'white' ? 2 : null,
      borderRadius: 25,
    },
    text: {
      fontSize: 18,
      color:
        variant === 'white'
          ? colors.primary.dark
          : variant === 'purple' && colors.white,
    },
  });

export default AlertButton;
