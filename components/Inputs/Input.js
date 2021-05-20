import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import { useFonts } from 'expo-font';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';

const Input = ({
  setErrors,
  customStyles,
  keyboardType,
  secureTextEntry,
  multiline,
  placeholder,
  onChange,
  value,
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
        setErrors({});
        onChange(value);
      }}
      value={value}
    />
  );
};

export default Input;
