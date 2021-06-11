import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import { useFonts } from 'expo-font';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../../redux/actions/actions';

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

  const error = useSelector((state) => state.error.error);

  const dispatch = useDispatch();

  return (
    <TextInput
      style={[styles.input, fontFamily, customStyles]}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      placeholder={placeholder}
      onChangeText={(value) => {
        onChange(value);
        error.message &&
          dispatch({
            type: ACTIONS.CLEAR_ERROR,
          });
      }}
      value={value}
      numberOfLines={numberOfLines}
    />
  );
};

export default Input;
