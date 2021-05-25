import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';

const styles = StyleSheet.create({
  mainModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, 0.9)',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 40,
  },
  buttonN: {
    marginRight: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.secondary.dark,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 2,
    backgroundColor: colors.secondary.dark,
  },
  white: {
    color: colors.secondary.dark,
    fontWeight: 'bold',
  },
  textStyle: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
