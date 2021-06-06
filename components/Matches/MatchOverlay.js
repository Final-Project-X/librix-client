import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import PrimaryText from '../Texts/PrimaryText';

const MatchOverlay = ({ text }) => {
  return (
    <View style={styles.matchOverlay}>
      <PrimaryText text={text} customStyles={styles.matchOverlayText} />
    </View>
  );
};

export default MatchOverlay;
