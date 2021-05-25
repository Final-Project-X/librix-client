import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';

const styles = StyleSheet.create({
  singleBook: {
    flex: 1,
    margin: 15,
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
    borderRadius: 15,
    resizeMode: 'cover',
    marginBottom: 10,
    marginTop: -10,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  text: {
    padding: 8,
    textAlign: 'center',
    fontSize: 16,
  },
  des: {
    lineHeight: 22,
  },
  note: {
    marginTop: 10,
  },
  item: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  lan: {
    marginRight: 10,
  },
});

export default styles;
