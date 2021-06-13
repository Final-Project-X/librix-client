import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../global/styles';

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
  },
  gradient: {
    padding: 20,
  },
  userCard: {
    padding: 20,
    borderRadius: 25,
    backgroundColor: colors.white,
  },
  avatar: {
    width: 75,
    height: 75,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 50,
  },
  userDataText: {
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
  },
  aboutUserContainer: {
    height: 60,
    marginVertical: 15,
  },
  aboutUser: {
    fontSize: 16,
  },
  lightButtonText: {
    marginLeft: 5,
    color: colors.textFaded,
  },
  scrollArea: {
    height: 200,
  },
  accordionHeaderGroup: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  accordionHeaderText: {
    fontSize: 16,
  },
  listItem: {
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 6,
    marginBottom: 5,
  },
  bookImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 6,
  },
  listItemTexts: {
    justifyContent: 'space-around',
  },
  marginLeft: {
    marginLeft: 20,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 18,
    paddingLeft: 30,
    paddingRight: 30,
  },
  textMarginBottom: {
    marginBottom: 20,
  },
  deleteButton: {
    margin: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default styles;
