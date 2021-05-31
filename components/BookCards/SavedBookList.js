import React from 'react';
import { colors } from '../../global/styles';
import { View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import PrimaryText from '../Texts/PrimaryText';
import PrimaryBold from '../Texts/PrimaryBold';
import PrimaryLight from '../Texts/PrimaryLight';
import { removeBookFromSavedBooks } from '../../redux/actions/savedBooksActions';
import { createMatch } from '../../redux/actions/matchesActions';
import { helpDeleteBookFromSavedBooks } from '../../utils/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const SavedBookList = ({ item, savedBooks, navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleDelete = async (book) => {
    await helpDeleteBookFromSavedBooks(book, savedBooks);
    dispatch(removeBookFromSavedBooks(book._id));
    const newSavedBooks = savedBooks.filter(
      (savedBook) => savedBook._id !== book._id,
    );
    return newSavedBooks;
  };
  const handleLike = (book) => {
    user.bookInterestedIn.push(book);
    dispatch(createMatch(user._id, book._id));
    dispatch(removeBookFromSavedBooks(book._id));
    const newSavedBooks = savedBooks.filter(
      (SavedBook) => SavedBook._id !== book._id,
    );
    return newSavedBooks;
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SingleBook', { item })}
    >
      <View style={styles.item}>
        <Feather
          name="trash"
          size={24}
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
        <Feather
          name="heart"
          size={24}
          color={colors.primary.dark}
          style={styles.love}
          onPress={() => handleLike(item)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SavedBookList;
