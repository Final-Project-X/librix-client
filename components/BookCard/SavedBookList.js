import React from 'react';
import { colors } from '../../global/styles';
import { View, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import styles from './styles';
import PrimaryText from '../Texts/PrimaryText';
import PrimaryBold from '../Texts/PrimaryBold';
import PrimaryLight from '../Texts/PrimaryLight';

const SavedBookList = ({ item, setBooks, books, navigation }) => {
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
          <PrimaryBold text={item.title} customStyles={styles.titleText} />
          <PrimaryLight text={item.description} numberOfLines={2} />
          <PrimaryText text={item.category[0]} customStyles={styles.category} />
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

export default SavedBookList;
