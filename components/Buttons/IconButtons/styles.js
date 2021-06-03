import { StyleSheet } from 'react-native';
import { colors, shadow } from '../../../global/styles';

export const styles = (iconSize, position, buttonColor = colors.white) =>
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
  });

export const shadowStyles = (shadowOn) =>
  StyleSheet.create({
    shadow: shadowOn ? shadow.button : { elevation: 0 },
  });
// export const shadowStyles = StyleSheet.create({
//   shadow: shadow.button,
// });

export const positionStyles = (absTop, absLeft, absRight) =>
  StyleSheet.create({
    absolutePosition: {
      position: 'absolute',
      top: absTop,
      left: absLeft,
      right: absRight,
    },
  });

export const matchIconStyles = StyleSheet.create({
  iconButton: {
    width: 30,
    height: 30,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 10,
  },
});