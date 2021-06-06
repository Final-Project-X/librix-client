import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import PrimaryMedium from '../Texts/PrimaryMedium';

const ReservedLabel = ({ text }) => {
  return (
    <View style={styles.reservedLabel}>
      <PrimaryMedium text={text} customStyles={styles.reservedLabelText} />
    </View>
  );
};

export default ReservedLabel;
