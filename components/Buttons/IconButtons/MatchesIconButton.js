import React from 'react';
import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../../../global/styles';
import { styles, shadowStyles } from './style';

export const MatchesIconButton = ({
  iconSize,
  iconName,
  position,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      // style={[styles(iconSize, position).iconButton, shadowStyles(true).shadow]}
      style={[
        styles(iconSize, position, colors.white).iconButton,
        shadowStyles(true).shadow,
      ]}
      onPress={handlePress}
    >
      <Feather name={iconName} size={iconSize} color={colors.primary.dark} />
    </TouchableOpacity>
  );
};
