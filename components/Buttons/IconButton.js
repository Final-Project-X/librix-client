import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { buttonShadow, colors } from '../../global/styles';

const IconButton = ({
  iconName,
  iconSize,
  iconColor,
  buttonColor,
  shadow,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles(iconSize, buttonColor).iconButton,
        shadow && styles().shadow,
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

const styles = (iconSize, buttonColor = colors.white) =>
  StyleSheet.create({
    iconButton: {
      width: iconSize * 1.4,
      height: iconSize * 1.4,
      backgroundColor: buttonColor,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
    },
    shadow: buttonShadow,
  });

export default IconButton;
