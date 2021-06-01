import { StyleSheet } from 'react-native';
import { colors, shadow } from '../../global/styles';

export const styles = StyleSheet.create({
  matchesListEmpty: {
    alignSelf: 'center',
    color: colors.primary.dark,
    fontSize: 24,
    paddingVertical: 20,
  },
  matchesListEnd: {
    marginBottom: 50,
    color: colors.white,
    alignSelf: 'center',
  },
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
});

export const textStyles = (isSelected) =>
  StyleSheet.create({
    text: {
      padding: 10,
      color: isSelected ? colors.primary.dark : colors.black,
      backgroundColor: isSelected ? colors.neutralBackground : colors.white,
    },
  });
