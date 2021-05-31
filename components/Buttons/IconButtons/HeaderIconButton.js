import React from 'react';
import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { styles, shadowStyles } from './style';

export const HeaderIconButton = ({
  iconName,
  iconColor,
  buttonColor,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles(24, 'center', buttonColor).iconButton,
        shadowStyles(false).shadow,
      ]}
      onPress={handlePress}
    >
      <Feather name={iconName} size={24} color={iconColor} />
    </TouchableOpacity>
  );
};
