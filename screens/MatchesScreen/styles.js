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
  // match: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: colors.white,
  //   padding: 20,
  //   borderRadius: 20,
  //   marginBottom: 20,
  // },
  // bookCard: {
  //   width: 100,
  //   shadowColor: colors.black,
  // },
  // nameLabel: {
  //   position: 'absolute',
  //   top: -5,
  //   left: -5,
  //   zIndex: 3,
  //   backgroundColor: colors.white,
  //   paddingVertical: 3,
  //   paddingHorizontal: 5,
  //   borderColor: colors.secondary.light,
  //   borderRadius: 20,
  //   borderStyle: 'solid',
  //   borderWidth: 1,
  // },
  // nameLabelText: {
  //   color: colors.secondary.dark,
  //   fontWeight: 'bold',
  //   textTransform: 'uppercase',
  // },
  // bookImage: {
  //   width: '100%',
  //   height: 100,
  //   borderRadius: 20,
  //   marginBottom: 5,
  // },
  // imageShadow: shadow.image,
  // rotateIcon: {
  //   marginHorizontal: 15,
  // },
  // buttonGroup: {
  //   marginLeft: 15,
  // },
  // button: {
  //   padding: 11,
  //   borderRadius: 50,
  // },
  // purpleBtn: {
  //   backgroundColor: colors.primary.dark,
  //   marginBottom: 15,
  // },
  // orangeBtn: {
  //   backgroundColor: colors.secondary.dark,
  // },
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
});
