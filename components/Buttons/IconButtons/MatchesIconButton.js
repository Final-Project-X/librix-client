import React from 'react';
import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../../../global/styles';
import { matchIconStyles } from './styles';

const iconStrokes = {
  emphasis: colors.white,
  danger: colors.white,
  neutral: colors.primary.dark,
};

export const MatchesIconButton = ({ iconName, handlePress, type }) => {
  return (
    <TouchableOpacity
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
