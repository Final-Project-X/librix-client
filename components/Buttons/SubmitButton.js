import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import ButtonGradient from '../Gradients/ButtonGradient';
import PrimaryBold from '../Texts/PrimaryBold';
import styles from './styles';

const SubmitButton = ({ title, handleSubmit, onSubmit, customStyles }) => {
  return (
    <TouchableOpacity onPress={handleSubmit(onSubmit)} style={customStyles}>
      <ButtonGradient>
        <View style={styles.wrapper}>
          <PrimaryBold text={title} customStyles={styles.title} />
        </View>
      </ButtonGradient>
    </TouchableOpacity>
  );
};

export default SubmitButton;
