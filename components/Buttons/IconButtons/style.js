import { StyleSheet } from 'react-native';
import { colors, shadow } from '../../../global/styles';

export const styles = (iconSize, buttonColor = colors.white, position) =>
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

export const positionStyles = (absTop, absLeft, absRight) =>
  StyleSheet.create({
    absolutePosition: {
      position: 'absolute',
      top: absTop,
      left: absLeft,
      right: absRight,
    },
  });
