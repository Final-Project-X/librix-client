import React from 'react';
import { colors } from '../../global/styles';
import { View, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './styles';
import PrimaryText from '../Texts/PrimaryText';
import PrimaryBold from '../Texts/PrimaryBold';
import PrimaryLight from '../Texts/PrimaryLight';
import { removeBookFromSavedBooks } from '../../redux/actions/savedBooksActions';
import { createMatch } from '../../redux/actions/matchesActions';
import { SavedBooksIconButton } from '../Buttons/IconButtons/SavedBooksIconButton';
import { helpCreateMatch } from '../../utils/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../../assets/book-open.png';

const SavedBookList = ({ item, navigation, setShowModal }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userToken = useSelector((state) => state.token.token);
  const booksToOffer = useSelector((state) => state.usersBooks.booksToOffer);

  const showAlert = () => {
    Alert.alert('A match has been created', 'You have got a match!', [
      { text: 'OK' },
    ]);
  };

  const handleDelete = (book) => {
    dispatch(removeBookFromSavedBooks(book._id, user._id, userToken));
  };

  const handleLike = async (book) => {
    if (booksToOffer.length < 1) {
      setShowModal(true);
    } else {
      const isThereAMatch = await helpCreateMatch(
        { userId: user._id, bookId: book._id },
        userToken,
      );
      if (isThereAMatch?.response?.message.slice(0, 7) === 'You got') {
        showAlert();
      }
      dispatch(createMatch(isThereAMatch, { userId: user._id }));
      dispatch(removeBookFromSavedBooks(book._id, user._id, userToken));
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleBook', { item })}
      >
        <View style={styles.item}>
          <Image
            source={
              item.selectedFiles.length > 0
                ? { uri: `data:image/jpeg;base64,${item.selectedFiles[0]}` }
                : Icon
            }
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
    </View>
  );
};

export default SavedBookList;
