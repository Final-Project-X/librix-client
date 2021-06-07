import { StyleSheet } from 'react-native';
import { colors, shadow } from '../../global/styles';

export const styles = StyleSheet.create({
  matchCard: {
    margin: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  matchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  matchHeader: {
    fontSize: 24,
  },
  bookCard: {
    width: '44%',
    borderRadius: 10,
    padding: 3,
    marginTop: 10,
  },
  nameLabel: {
    position: 'absolute',
    top: -5,
    left: -5,
    zIndex: 3,
    backgroundColor: colors.white,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderColor: colors.secondary.light,
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  nameLabelText: {
    color: colors.secondary.dark,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  imageShadow: shadow.image,
  bookTitle: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  bookAuthor: {
    fontSize: 14,
  },
  matchOverlay: {
    position: 'absolute',
    top: 20,
    left: 0,
    width: '100%',
    zIndex: 5,
    padding: 15,
    borderRadius: 25,
    backgroundColor: colors.neutralBackground,
    opacity: 0.9,
  },
  matchOverlayShadow: shadow.card,
  matchOverlayText: {
    backgroundColor: colors.neutralBackground,
    color: colors.primary.dark,
    lineHeight: 24,
    fontSize: 16,
    textAlign: 'center',
  },
  reservedLabel: {
    position: 'absolute',
    top: 10,
    left: 3,
    width: '100%',
    zIndex: 4,
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: colors.primary.dark,
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  reservedLabelText: {
    color: colors.primary.dark,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export const textStyles = (isSelected) =>
  StyleSheet.create({
    text: {
      padding: 10,
      color: isSelected ? colors.primary.dark : colors.black,
      backgroundColor: isSelected ? colors.neutralBackground : colors.white,
    },
  });

export const matchPartnerMatchStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  match: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  bookCard: {
    width: 100,
    shadowColor: colors.black,
  },
  nameLabel: {
    position: 'absolute',
    top: -5,
    left: -5,
    zIndex: 3,
    backgroundColor: colors.white,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderColor: colors.secondary.light,
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  nameLabelText: {
    color: colors.secondary.dark,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bookImage: {
    width: '100%',
    height: 100,
    borderRadius: 20,
    marginBottom: 5,
  },
  imageShadow: shadow.image,
  rotateIcon: {
    marginHorizontal: 15,
  },
  buttonGroup: {
    marginLeft: 15,
  },
  button: {
    padding: 11,
    borderRadius: 50,
  },
  purpleBtn: {
    backgroundColor: colors.primary.dark,
    marginBottom: 15,
  },
  orangeBtn: {
    backgroundColor: colors.secondary.dark,
  },
});
