import React from 'react';
import { View, Image } from 'react-native';
import PrimaryText from '../Texts/PrimaryText';
import SerifText from '../Texts/SerifText';
import Icon from '../../assets/book-open.png';
import { styles } from './styles';
import ReservedLabel from './ReservedLabel';

const MatchBookCard = ({
  bookTitle,
  bookAuthor,
  bookImageUri,
  reservedLabelText,
}) => {
  return (
    <View style={styles.bookCard}>
      {reservedLabelText && <ReservedLabel text={reservedLabelText} />}
      <Image
        style={[styles.image, styles.imageShadow]}
        source={
          bookImageUri
            ? {
                uri: `data:image/jpeg;base64,${bookImageUri}`,
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
