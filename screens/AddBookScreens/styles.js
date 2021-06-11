import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    marginVertical: 30,
    marginHorizontal: 50,
    fontSize: 18,
  },
  isbnInput: {
    width: 250,
    padding: Platform.OS === 'ios' ? 15 : 10,
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    shadowRadius: 7,
    shadowColor: colors.black,
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  inputText: {
    marginHorizontal: 50,
    marginBottom: 15,
    padding: Platform.OS === 'ios' ? 15 : 10,
    backgroundColor: colors.white,
    borderRadius: 40,
    shadowRadius: 7,
    shadowColor: colors.black,
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  inputError: {
    color: colors.error,
    alignSelf: 'center',
  },
  noteText: {
    height: 100,
    borderRadius: 20,
  },
  inputContainer: {
    marginBottom: 10,
    marginLeft: -50,
    marginRight: -50,
  },
  formContainer: {
    width: '100%',
  },
  or: {
    marginTop: 40,
    fontSize: 16,
    alignSelf: 'center',
  },
  smallButton: {
    backgroundColor: colors.primary.dark,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    padding: 16,
    alignSelf: 'center',
  },
  button: {
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 60,
  },
  btnText: {
    color: colors.white,
    fontSize: 16,
    marginRight: 10,
  },
  buttonMix: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 60,
  },
  upload: {
    alignSelf: 'flex-start',
    marginLeft: 50,
  },
  backgroundDrop: {
    backgroundColor: colors.primary.light,
    elevation: 4,
    borderColor: 'transparent',
    lineHeight: 10,
  },
  picker: {
    borderColor: 'transparent',
    borderRadius: 40,
    marginBottom: 10,
    backgroundColor: colors.white,
    shadowRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  pickerContainer: {
    marginHorizontal: 50,
    position: 'relative',
    zIndex: 500,
  },
  main: {
    alignItems: 'center',
  },
  imageText: {
    color: colors.primary.dark,
    marginLeft: -20,
  },
});

export default styles;
