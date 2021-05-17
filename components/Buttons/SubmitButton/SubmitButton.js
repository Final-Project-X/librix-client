import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const SubmitButton = ({ title, handleSubmit, onSubmit, errors, setErrors }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setErrors(errors);
        handleSubmit(onSubmit);
      }}
    >
      <LinearGradient
        colors={['#d8d3ff', '#5f41ee']}
        start={[1.25, 1]}
        style={styles.gradient}
      >
        <View style={styles.wrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SubmitButton;
