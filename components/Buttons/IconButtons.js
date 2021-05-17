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

export const MatchesIconButton = ({
  iconName,
  iconColor,
  buttonColor,
  handlePress,
}) => {
  return (
    <IconButton
      iconSize="18"
      iconName={iconName}
      iconColor={iconColor}
      buttonColor={buttonColor}
      handlePress={handlePress}
      shadow={true}
    />
  );
};

export const HeaderIconButton = ({
  iconName,
  iconColor,
  buttonColor,
  handlePress,
}) => {
  return (
    <IconButton
      iconSize="24"
      iconName={iconName}
      iconColor={iconColor}
      buttonColor={buttonColor}
      handlePress={handlePress}
    />
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
      margin: 10,
    },
    shadow: buttonShadow,
  });
