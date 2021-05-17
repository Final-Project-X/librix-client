import React from 'react';
import styles from './styles';
import { View, Image, Text } from 'react-native';

const Book = ({ book }) => (
  <View style={styles.card}>
    <Image source={{ uri: book.selectedFiles }} style={styles.cardImage} />
    <View style={styles.info}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.text}>by {book.authors.join(', ')}</Text>
      <Text numberOfLines={3}>{book.description}</Text>
    </View>
  </View>
);

export default Book;
