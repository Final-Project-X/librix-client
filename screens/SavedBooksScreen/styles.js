import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';

const styles = StyleSheet.create({
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
  cardImage: {
    width: 60,
    height: 100,
    resizeMode: 'cover',
  },
  info: {
    width: 280,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
  },
  category: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  singleBook: {
    flex: 0.88,
    margin: 20,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 15,
    shadowRadius: 5,
    shadowColor: colors.black,
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 5 },
    alignItems: 'center',
    elevation: 4,
  },
  card: {
    width: 120,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    marginTop: -10,
  },
  info2: {
    width: 280,
    paddingHorizontal: 10,
    alignItems: 'center',
    textAlign: 'center',
  },
  title2: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  scrollView: {
    height: '25%',
    alignSelf: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.neutralBackground,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  item1: {
    marginTop: 10,
    flexDirection: 'row',
  },
  lan: {
    marginRight: 10,
  },
});

export default styles;
