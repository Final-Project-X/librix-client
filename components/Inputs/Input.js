import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import { useFonts } from 'expo-font';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';

const Input = ({
  customStyles,
  keyboardType,
  secureTextEntry,
  multiline,
  placeholder,
  onChange,
  value,
  numberOfLines,
}) => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  const fontFamily = {
    fontFamily: fontsLoaded ? 'Montserrat_400Regular' : null,
  };

  return (
    <TextInput
      style={[styles.input, fontFamily, customStyles]}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      placeholder={placeholder}
      onChangeText={(value) => {
        onChange(value);
      }}
      value={value}
      numberOfLines={numberOfLines}
    />
  );
};

export default Input;
