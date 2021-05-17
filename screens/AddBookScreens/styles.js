import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
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
    marginLeft: 40,
    marginBottom: 5,
    marginTop: 20,
  },
  inputText: {
    width: '80%',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 40,
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 7 },
  },
  or: {
    marginTop: 60,
    marginBottom: 20,
    fontSize: 20,
    alignSelf: 'center',
  },
  smallButton: {
    backgroundColor: '#2a2a81',
    borderRadius: 15,
    padding: 10,
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#2a2a81',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 60,
    marginTop: 40,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  uploadButtton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: '#2a2a81',
    borderRadius: 40,
    alignSelf: 'flex-start',
    marginLeft: 40,
    flexDirection: 'row',
  },
  uploadText: {
    color: 'white',
    marginRight: 5,
  },
  backgroundDrop: {
    backgroundColor: 'lightblue',
  },
  picker: {
    borderColor: 'transparent',
    borderRadius: 40,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 7 },
  },
  main: {
    marginHorizontal: 40,
  },
});

export default styles;
