import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    shadowRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 7 },
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: -50,
    elevation: 4,
  },
  container: {
    flex: 0.8,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    marginVertical: 10,
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
    marginBottom: 50,
    fontSize: 16,
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
    marginBottom: 5,
  },
  category: {
    marginTop: 5,
  },
  lan: {
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  button: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 60,
  },
});

export default styles;
