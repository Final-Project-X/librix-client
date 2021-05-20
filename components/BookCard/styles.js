import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';

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
  item: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: 10,
    margin: 15,
    borderRadius: 15,
    shadowRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 5 },
    alignItems: 'center',
    elevation: 4,
  },
  noBooks: {
    textAlign: 'center',
  },
  delete: {
    position: 'absolute',
    top: -15,
    left: -10,
    elevation: 4,
  },
  love: {
    position: 'absolute',
    top: -13,
    right: -10,
    elevation: 4,
  },
  img: {
    width: 60,
    height: 100,
    resizeMode: 'cover',
  },
  detail: {
    width: 280,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    flex: 1,
  },
  titleText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default styles;
