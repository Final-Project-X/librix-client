import React from 'react';
import { View, Image } from 'react-native';
import PrimaryText from '../Texts/PrimaryText';
import SerifText from '../Texts/SerifText';
import Icon from '../../assets/icon.png';
import { styles } from './styles';

const MatchBookCard = ({ bookTitle, bookAuthor, bookImageUri }) => {
  return (
    <View style={styles.bookCard}>
      <Image
        style={[styles.image, styles.imageShadow]}
        source={
          bookImageUri
            ? {
                uri: bookImageUri,
              }
            : Icon
        }
      />
      <SerifText
        customStyles={styles.bookTitle}
        text={bookTitle}
        numberOfLines={2}
      />
      <PrimaryText
        customStyles={styles.bookAuthor}
        text={bookAuthor}
        numberOfLines={1}
      />
    </View>
  );
};

export default MatchBookCard;
