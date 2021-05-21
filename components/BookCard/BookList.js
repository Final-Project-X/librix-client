import React from 'react';
import { colors } from '../../global/styles';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import styles from './styles';

const BookList = ({ item, setBooks, books, navigation }) => {
  const handleDelete = (val) => {
    const newBooks = books.filter((book) => book._id !== val._id);
    return setBooks(newBooks);
  };
  const handleLike = (val) => {
    //  user.bookInterestedIn.push(val)
    const newBooks = books.filter((book) => book._id !== val._id);
    return setBooks(newBooks);
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SingleBook', { item })}
    >
      <View style={styles.item}>
        <MaterialCommunityIcons
          name="delete-circle"
          size={28}
          color={colors.secondary.dark}
          style={styles.delete}
          onPress={() => handleDelete(item)}
        />
        <Image source={{ uri: item.selectedFiles }} style={styles.img} />

        <View style={styles.detail}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text numberOfLines={2}>{item.description}</Text>
          <Text style={styles.category}>{item.category[0]}</Text>
        </View>
        <Ionicons
          name="heart-circle-sharp"
          size={28}
          color={colors.primary.dark}
          style={styles.love}
          onPress={() => handleLike(item)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default BookList;
