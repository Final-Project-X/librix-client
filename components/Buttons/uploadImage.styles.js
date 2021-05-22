import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';

export default StyleSheet.create({
  gradient: {
    borderRadius: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 15,
    paddingRight: 15,
    height: 40,
    width: 170,
    borderRadius: 25,
    borderColor: colors.primary.dark,
    borderWidth: 1,
  },
  text: {
    color: colors.primary.dark,
  },
});
