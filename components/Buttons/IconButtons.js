import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { colors, shadow } from '../../global/styles';

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

export const MatchesIconButton = ({
  iconName,
  iconColor,
  buttonColor,
  handlePress,
  position,
}) => {
  return (
    <IconButton
      iconSize="20"
      iconName={iconName}
      iconColor={iconColor}
      buttonColor={buttonColor}
      handlePress={handlePress}
      shadowOn={true}
      position={position}
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

export const SavedBooksIconButton = ({
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

const styles = (iconSize, buttonColor = colors.white, position) =>
  StyleSheet.create({
    iconButton: {
      width: iconSize * 1.5,
      height: iconSize * 1.5,
      backgroundColor: buttonColor,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      marginVertical: 10,
      marginLeft: position === 'left' ? 0 : 10,
      marginRight: position === 'right' ? 0 : 10,
    },
    shadow: shadow.button,
  });
