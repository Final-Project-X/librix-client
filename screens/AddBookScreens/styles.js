import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    margin: 30,
    fontSize: 20,
  },
  label: {
    marginLeft: 30,
    marginBottom: 5,
    marginTop: 20,
  },
  isbnInput: {
    width: '80%',
    marginRight: 5,
  },
  inputText: {
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 40,
    shadowRadius: 7,
    shadowColor: colors.black,
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  noteText: {
    height: 100,
  },
  inputContainer: {
    marginBottom: 10,
  },
  or: {
    marginTop: 60,
    marginBottom: 20,
    fontSize: 20,
    alignSelf: 'center',
  },
  smallButton: {
    backgroundColor: colors.primary.dark,
    borderRadius: 15,
    width: '12%',
    padding: 10,
    alignSelf: 'center',
  },
  button: {
    marginTop: 40,
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 60,
  },
  upload: {
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  uploadButtton: {
    flexDirection: 'row',
    paddingHorizontal: 60,
    paddingVertical: 10,
  },
  uploadText: {
    color: colors.white,
    marginRight: 10,
  },
  backgroundDrop: {
    backgroundColor: colors.primary.light,
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
    marginHorizontal: 20,
  },
  main: {
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
