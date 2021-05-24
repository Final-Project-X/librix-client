import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    padding: 16,
  },
  text: {
    padding: 8,
    textAlign: 'center',
    fontSize: 16,
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
