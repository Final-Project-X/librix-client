import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    padding: 20,
    color: colors.primary.dark,
  },
  text: {
    padding: 20,
    textAlign: 'center',
    fontSize: 24,
    color: colors.primary.dark,
  },
  flatlist: {
    marginBottom: 120,
  },
  button: {
    marginTop: 40,
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 60,
  },
});

export default styles;
