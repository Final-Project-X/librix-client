import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../../../global/styles';
import { matchIconStyles } from './styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const iconStrokes = {
  emphasis: colors.white,
  danger: colors.white,
  neutral: colors.primary.dark,
};

export const MatchesIconButton = ({ iconName, handlePress, iconType }) => {
  return (
    <Pressable
      style={[
        matchIconStyles.iconButton,
        matchIconStyles.buttonShadow,
        matchIconStyles[iconType],
      ]}
      onPress={handlePress}
    >
      <Feather name={iconName} size={20} color={iconStrokes[iconType]} />
      {/* <Feather name={iconName} size={20} color={colors.primary.dark} /> */}
    </Pressable>
  );
};
