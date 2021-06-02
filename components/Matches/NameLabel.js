import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import PrimaryBold from '../Texts/PrimaryBold';

const NameLabel = ({ labelName }) => {
  return (
    <View style={styles.nameLabel}>
      <PrimaryBold customStyles={styles.nameLabelText} text={labelName} />
    </View>
  );
};

export default NameLabel;
