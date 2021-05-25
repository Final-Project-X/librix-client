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
    paddingHorizontal: 15,
    height: 40,
    borderRadius: 25,
    borderColor: colors.primary.dark,
    borderWidth: 1,
    backgroundColor: colors.white,
  },
  text: {
    color: colors.primary.dark,
    marginRight: 5,
  },
});
