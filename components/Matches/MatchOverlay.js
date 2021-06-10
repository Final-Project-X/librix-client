import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import PrimaryMedium from '../Texts/PrimaryMedium';

const MatchOverlay = ({ text }) => {
  return (
    <View style={[styles.matchOverlay, styles.matchOverlayShadow]}>
      <PrimaryMedium text={text} customStyles={styles.matchOverlayText} />
    </View>
  );
};

export default MatchOverlay;
