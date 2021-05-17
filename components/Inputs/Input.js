import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

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
  return (
    <TextInput
      style={[styles.input, customStyles]}
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
