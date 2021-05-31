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
import { useDispatch } from 'react-redux';
import { SavedBooksIconButton } from '../Buttons/IconButtons/SavedBooksIconButton';

const SavedBookList = ({ item, setSavedBooks, savedBooks, navigation }) => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.userReducer.user);
  // const SavedBooks = useSelector((state) => state.savedBookReducer.savedBooks);

  const handleDelete = async (book) => {
    // await helpDeleteBookFromSavedBooks(book, savedBooks);
    // dispatch(removeBookFromSavedBooks(book._id));
    const newBooks = savedBooks.filter(
      (savedBook) => savedBook._id !== book._id,
    );
    return setSavedBooks(newBooks);
    // return savedBooks
  };
  const handleLike = (book) => {
    //  user.bookInterestedIn.push(val)
    // dispatch(createMatch(user._id, book._id))
    // dispatch(removeBookFromSavedBooks(book._id));
    const newBooks = savedBooks.filter(
      (SavedBook) => SavedBook._id !== book._id,
    );
    return setSavedBooks(newBooks);
    // return savedBooks
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SingleBook', { item })}
    >
      <View style={styles.item}>
        <Image source={{ uri: item.selectedFiles }} style={styles.img} />
        <SavedBooksIconButton
          iconName={'trash'}
          buttonColor={colors.secondary.dark}
          handlePress={() => handleDelete(item)}
          absolutePosition={{ top: -15, left: -10 }}
        />

        <View style={styles.detail}>
          <PrimaryBold text={item.title} customStyles={styles.titleText} />
          <PrimaryLight text={item.description} numberOfLines={2} />
          <PrimaryText text={item.category[0]} customStyles={styles.category} />
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
