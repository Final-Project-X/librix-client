import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  singleBook: {
    width: '100%',
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 60,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 15,
    shadowRadius: 5,
    shadowColor: colors.black,
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  card: {
    width: 140,
    height: 200,
    borderRadius: 15,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  text: {
    padding: 8,
    textAlign: 'center',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
  },
  author: {
    marginBottom: 10,
  },
  des: {
    lineHeight: 22,
  },
  note: {
    marginTop: 10,
  },
  item: {
    marginTop: 10,
  },
});

export default styles;
