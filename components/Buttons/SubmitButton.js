import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import ButtonGradient from '../Gradients/ButtonGradient';
import styles from './styles';

const SubmitButton = ({
  title,
  handleSubmit,
  onSubmit,
  errors,
  setErrors,
  customStyles,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setErrors(errors);
        handleSubmit(onSubmit);
      }}
      style={customStyles}
    >
      <ButtonGradient>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ButtonGradient>
    </TouchableOpacity>
  );
};

export default SubmitButton;
