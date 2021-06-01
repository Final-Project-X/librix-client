import React from 'react';
import { colors } from '../../global/styles';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import PrimaryText from '../Texts/PrimaryText';
import PrimaryBold from '../Texts/PrimaryBold';
import PrimaryLight from '../Texts/PrimaryLight';
import { removeBookFromSavedBooks } from '../../redux/actions/savedBooksActions';
import { createMatch } from '../../redux/actions/matchesActions';
import { helpDeleteBookFromSavedBooks } from '../../utils/apiCalls';
import { SavedBooksIconButton } from '../Buttons/IconButtons/SavedBooksIconButton';
import { useDispatch, useSelector } from 'react-redux';

const SavedBookList = ({ item, navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const savedBooks = useSelector((state) => state.savedBooks.savedBooks);

  const handleDelete = async (book) => {
    dispatch(removeBookFromSavedBooks(book._id, user._id, savedBooks));
  };

  const handleLike = async (book) => {
    const newSavedBooks = await helpDeleteBookFromSavedBooks({
      bookId: book._id,
      userId: user._id,
    });
    dispatch(createMatch(user._id, book._id));
    dispatch(removeBookFromSavedBooks(book._id, savedBooks));
    return newSavedBooks;
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SingleBook', { item })}
    >
      <View style={styles.item}>
        <Image
          source={{ uri: item.selectedFiles.toString() }}
          style={styles.img}
        />
        <SavedBooksIconButton
          iconName={'trash'}
          buttonColor={colors.secondary.dark}
          handlePress={() => handleDelete(item)}
          absolutePosition={{ top: -15, left: -10 }}
        />

        <View style={styles.detail}>
          <PrimaryBold text={item.title} customStyles={styles.titleText} />
          <PrimaryLight text={item.description} numberOfLines={2} />
          <PrimaryText text={item.genre} customStyles={styles.category} />
        </View>
        <SavedBooksIconButton
          iconName={'heart'}
          buttonColor={colors.primary.dark}
          handlePress={() => handleLike(item)}
          absolutePosition={{ top: -13, right: -10 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SavedBookList;
