import React from 'react';
import { View, Image } from 'react-native';
import PrimaryText from '../Texts/PrimaryText';
import SerifText from '../Texts/SerifText';
import styles from './styles';

const SwipingBook = ({ book }) => (
  <View style={styles.card}>
    <Image source={{ uri: book.selectedFiles }} style={styles.cardImage} />
    <View style={styles.info}>
      <SerifText text={book.title} customStyles={styles.title} />
      <PrimaryText
        text={`by ${book?.authors.join(', ')}`}
        customStyles={styles.text}
      />
      <PrimaryText text={book.description} numberOfLines={3} />
      <PrimaryText
        text={`Language: ${book.language}`}
        customStyles={styles.lan}
      />
      <PrimaryText
        text={`Genre: ${book.category[0]}`}
        customStyles={styles.lan}
      />
    </View>
  </View>
);

export default SwipingBook;
