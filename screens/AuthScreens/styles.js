import { StyleSheet } from 'react-native';

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
    fontSize: 18,
    backgroundColor: '#ffffff',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 7,
  },
  errorContainer: {
    height: 25,
  },
  inputError: {
    color: 'red',
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
    width: 270,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWithIcon: {
    flex: 1,
    marginRight: 6,
  },
  toLogin: {
    marginLeft: 5,
    color: '#5f41ee',
    textTransform: 'uppercase',
  },
  buttonMargin: {
    marginTop: 6,
  },
});

export default styles;
