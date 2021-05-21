import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000030',
  },
  main: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 2,
    backgroundColor: '#be53ea',
  },
  buttonN: {
    marginRight: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
