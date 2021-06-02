import React from 'react';
import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../../../global/styles';
import { styles, positionStyles } from './styles';

// icon buttons for the saved books cards

// usage example:

/* <SavedBooksIconButton
  iconName={'trash'}
  buttonColor={colors.secondary.dark}
  handlePress={() => {}}
  absolutePosition={{ top: -15, left: -10 }}
/> */

/* <SavedBooksIconButton
  iconName={'heart'}
  buttonColor={colors.primary.dark}
  handlePress={() => {}}
  absolutePosition={{ top: -13, right: -10 }}
/> */

export const SavedBooksIconButton = ({
  iconName,
  buttonColor,
  handlePress,
  absolutePosition,
}) => {
  const { top, left, right } = absolutePosition;
  return (
    <TouchableOpacity
      style={[
        styles(21, 'center', buttonColor).iconButton,
        styles().shadow,
        positionStyles(top, left, right).absolutePosition,
      ]}
      onPress={handlePress}
    >
      <Feather name={iconName} size={21} color={colors.white} />
    </TouchableOpacity>
  );
};
