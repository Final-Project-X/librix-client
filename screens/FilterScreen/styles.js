import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: colors.white,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  main: {
    width: '100%',
    alignItems: 'center',
    // marginHorizontal: 20,
  },
  pickerContainer: {
    marginHorizontal: 20,
  },
  picker: {
    width: 270,
    borderColor: 'transparent',
    borderRadius: 40,
    marginBottom: 20,
    backgroundColor: colors.white,
    shadowRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  backgroundDrop: {
    backgroundColor: colors.primary.light,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 40,
  },
  input: {
    width: 270,
    marginHorizontal: 20,
    borderRadius: 40,
    padding: Platform.OS === 'ios' ? 15 : 10,
    backgroundColor: colors.white,
    marginBottom: 20,
    shadowRadius: 8,
    shadowColor: colors.black,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  button: {
    marginTop: 40,
    alignSelf: 'center',
  },
  buttonText: {
    paddingVertical: 10,
    paddingHorizontal: 60,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;