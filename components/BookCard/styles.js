import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 7 },
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginTop: -50,
    elevation: 4,
  },
  cardImage: {
    width: 200,
    height: 300,
    borderRadius: 15,
    resizeMode: 'cover',
    marginTop: 20,
  },
  info: {
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingBottom: 20,
  },
  text: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default styles;
