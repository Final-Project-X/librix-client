import React from 'react';
import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../../../global/styles';
import { styles, shadowStyles, matchIconStyles } from './styles';

export const MatchesIconButton = ({ iconName, handlePress }) => {
  return (
    <TouchableOpacity
      // style={[styles(iconSize, position).iconButton, shadowStyles(true).shadow]}
      // style={matchIconStyles.iconButton}
      onPress={handlePress}
    >
      <Feather name={iconName} size={20} color={colors.primary.dark} />
    </TouchableOpacity>
  );
};
