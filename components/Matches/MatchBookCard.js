import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PrimaryText from '../Texts/PrimaryText';
import { colors } from '../../global/styles';

const NameLabel = ({ labelName }) => {
  return (
    <View style={styles.nameLabel}>
      <PrimaryText customStyles={styles.nameLabelText} text={labelName} />
    </View>
  );
};
const MatchBookCard = ({ bookOwner, bookTitle, bookAuthor, bookImageUri }) => {
  return (
    <View>
      <NameLabel labelName={bookOwner} />
      <Image
        style={styles.image}
        source={{
          uri: bookImageUri,
        }}
      />
      <PrimaryText customStyles={styles.bookTitle} text={bookTitle} />
      <PrimaryText customStyles={styles.bookAuthor} text={bookAuthor} />
    </View>
  );
};

const styles = StyleSheet.create({
  nameLabel: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 3,
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
    width: 120,
    height: 120,
  },
  bookTitle: {
    fontSize: 16,
  },
  bookAuthor: {
    fontSize: 14,
  },
});

export default MatchBookCard;
