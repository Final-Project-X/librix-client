import React from 'react';
import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { styles } from './style';
import { colors } from '../../../global/styles';

// Icon buttons for the matches in another user's profile

// usage example:
/* <ProfileMatchesIconButton
  iconName={'trash'}
  buttonColor={colors.secondary.dark}
  handlePress={() => {}}
/> */

/* <ProfileMatchesIconButton
  iconName={'message-circle'}
  buttonColor={colors.primary.dark}
  handlePress={() => {}}
/> */

export const ProfileMatchesIconButton = ({
  iconName,
  buttonColor,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      style={styles(21, 'center', buttonColor).iconButton}
      onPress={handlePress}
    >
      <Feather name={iconName} size={21} color={colors.white} />
    </TouchableOpacity>
  );
};
