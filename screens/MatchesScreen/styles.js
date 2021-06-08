import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';

export const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  gradient: {
    padding: 20,
    paddingBottom: 0,
  },
  userCard: {
    padding: 20,
    borderRadius: 25,
    backgroundColor: colors.white,
    marginBottom: 10,
  },
  avatar: {
    width: 75,
    height: 75,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: 'red',
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
    marginTop: 15,
  },
  aboutUser: {
    fontSize: 16,
  },
  listHeader: {
    fontSize: 20,
    marginVertical: 5,
    marginLeft: 10,
  },
  listFooter: {
    marginBottom: 60,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 30,
    marginBottom: 20,
  },
  modalBoldText: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  textMarginBottom: {
    marginBottom: 20,
  },
  matchesListEmpty: {
    alignSelf: 'center',
    color: colors.primary.dark,
    fontSize: 24,
    paddingVertical: 20,
    marginTop: 50,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  matchesListEnd: {
    marginBottom: 80,
    color: colors.white,
    alignSelf: 'center',
  },
  alertModalBold: {
    width: '80%',
    marginBottom: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  alertModalText: {
    width: '80%',
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },
});
