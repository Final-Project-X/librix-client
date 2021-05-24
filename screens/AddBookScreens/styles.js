import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 40,
  },
  input: {
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    marginBottom: 50,
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
    width: 370,
  },
  formContainer: {
    width: 400,
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
    marginTop: 40,
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
  },
  main: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 160,
    borderRadius: 15,
    resizeMode: 'cover',
    marginTop: 5,
  },
});

export default styles;
