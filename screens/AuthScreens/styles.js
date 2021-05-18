import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 20,
    height: 48,
    width: 270,
    fontSize: 16,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 4,
  },
  errorContainer: {
    height: 25,
  },
  inputError: {
    color: colors.error,
  },
  textWrapper: {
    width: 270,
    flexDirection: 'row',
    marginTop: 18,
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
  },
  inputWrapper: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toLogin: {
    marginLeft: 5,
    color: colors.primary.dark,
    textTransform: 'uppercase',
  },
  buttonMargin: {
    marginTop: 6,
  },
  icon: {
    position: 'absolute',
    right: 20,
  },
});

export default styles;
