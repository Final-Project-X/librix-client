import React from 'react';
import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../../../global/styles';
import { styles, shadowStyles, matchIconStyles } from './styles';

const iconStrokes = {
  emphasis: colors.white,
  danger: colors.white,
  neutral: colors.primary.dark,
};

export const MatchesIconButton = ({ iconName, handlePress, type }) => {
  // type: emphasis, danger, neutral
  return (
    <TouchableOpacity
      // style={[styles(iconSize, position).iconButton, shadowStyles(true).shadow]}
      style={[
        matchIconStyles.iconButton,
        matchIconStyles.buttonShadow,
        matchIconStyles[type],
      ]}
      onPress={handlePress}
    >
      <Feather name={iconName} size={20} color={iconStrokes[type]} />
    </TouchableOpacity>
  );
};
