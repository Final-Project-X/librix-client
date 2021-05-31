import React from 'react';
import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../../../global/styles';
import { styles } from './style';

const IconButton = ({
  iconName,
  iconSize,
  iconColor,
  buttonColor,
  shadowOn,
  position,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles(iconSize, buttonColor, position).iconButton,
        shadowOn && styles().shadow,
      ]}
      onPress={handlePress}
    >
      <Feather
        name={iconName}
        size={Number(iconSize) || 18}
        color={iconColor || colors.primary.dark}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
