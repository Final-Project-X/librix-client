import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PrimaryText from '../Texts/PrimaryText';
import PrimaryBold from '../Texts/PrimaryBold';
import { colors, shadow } from '../../global/styles';

const NameLabel = ({ labelName }) => {
  return (
    <View style={styles.nameLabel}>
      <PrimaryBold customStyles={styles.nameLabelText} text={labelName} />
    </View>
  );
};
const MatchBookCard = ({ bookOwner, bookTitle, bookAuthor, bookImageUri }) => {
  return (
    <View style={styles.bookCard}>
      <NameLabel labelName={bookOwner} />
      <Image
        style={[styles.image, styles.imageShadow]}
        source={{
          uri: bookImageUri,
        }}
      />
      <PrimaryText customStyles={styles.bookTitle} text={bookTitle} lines={2} />
      <PrimaryText
        customStyles={styles.bookAuthor}
        text={bookAuthor}
        lines={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bookCard: {
    width: '44%',
    borderWidth: 1,
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
  },
  bookAuthor: {
    fontSize: 14,
  },
});

export default MatchBookCard;
