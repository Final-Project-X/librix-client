import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import SwipingBook from '../../components/BookCards/SwipingBook';
import NoBookCard from '../../components/BookCards/NoBookCard';
import { colors } from '../../global/styles';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import { Feather } from '@expo/vector-icons';
import AlertModal from '../../components/AlertModal/AlertModal';
import PrimaryMedium from '../../components/Texts/PrimaryMedium';
import PrimaryText from '../../components/Texts/PrimaryText';
import { getPoolOfBooks } from '../../redux/actions/poolOfBooksActions';
import {
  addBookToSavedBooks,
  getSavedBooks,
} from '../../redux/actions/savedBooksActions';
import { removeBookFromPool } from '../../redux/actions/poolOfBooksActions';
import { createMatch } from '../../redux/actions/matchesActions';
import { getBooksToOffer } from '../../redux/actions/usersBooksActions';
import { useDispatch, useSelector } from 'react-redux';
import LoadingModal from '../../components/AlertModal/LoadingModal';

const Books = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userToken = useSelector((state) => state.token.token);

  const books = useSelector((state) => state.poolOfBooks.books);
  const booksToOffer = useSelector((state) => state.usersBooks.booksToOffer);
  console.log('books in Books.js:', books?.length);

  useEffect(() => {
    setLoading(true);
    dispatch(getPoolOfBooks({ userID: user._id }, userToken));
    dispatch(getSavedBooks(user.booksToRemember));
    dispatch(getBooksToOffer(user.booksToOffer));

    if (userToken) {
      setLoading(false);
    }
  }, [user, userToken, dispatch]);

  const handleYes = (index) => {
    const book = books[index];
    if (booksToOffer.length < 1) {
      setShowModal(true);
    } else {
      dispatch(createMatch({ userId: user._id, bookId: book._id }, userToken));
      dispatch(removeBookFromPool(book._id, books));
    }
  };

  const handleSave = (index) => {
    const book = books[index];
    dispatch(addBookToSavedBooks(book, user, userToken));
    dispatch(removeBookFromPool(book._id, books));
  };

  const handleNope = (index) => {
    const book = books[index];
    dispatch(removeBookFromPool(book._id, books));
  };

  const handlePress = () => {
    navigation.navigate('AddBook1');
    setShowModal(false);
  };
  return (
    // <SafeAreaView style={styles.container}>
    <ScreenGradient>
      <LoadingModal showModal={loading} setShowModal={setLoading} />
      <AlertModal
        showModal={showModal}
        setShowModal={setShowModal}
        buttonText="Add a book"
        whiteButtonText="Not now"
        handlePress={handlePress}
      >
        <PrimaryMedium
          customStyles={styles.modalText}
          text="You need to contribute mate!"
        />
        <PrimaryText
          customStyles={styles.modalText}
          text="One hand washes the other, this is how we do it."
        />
        <PrimaryText
          customStyles={styles.modalText}
          text="Upload a book — and have a look!"
        />
      </AlertModal>

      {books === undefined || books.length < 1 ? (
        <NoBookCard navigation={navigation} />
      ) : (
        <Swiper
          cards={books}
          renderCard={(book) =>
            book &&
            book._id && <SwipingBook item={book} navigation={navigation} />
          }
          onSwipedLeft={(cardIndex) => handleNope(cardIndex)}
          onSwipedBottom={(cardIndex) => handleSave(cardIndex)}
          onSwipedRight={(cardIndex) => handleYes(cardIndex)}
          cardIndex={0}
          key={books.length}
          disableTopSwipe
          overlayLabelsOpacity
          infinite
          backgroundColor={'transparent'}
          overlayLabels={{
            left: {
              title: (
                <Feather
                  name="x-circle"
                  size={50}
                  color={colors.error}
                  backgroundColor={colors.green}
                />
              ),
              style: {
                wrapper: {
                  alignItems: 'flex-end',
                  marginTop: 20,
                  marginLeft: 20,
                  elevation: 4,
                },
              },
            },
            right: {
              title: <Feather name="check-circle" size={50} color="green" />,
              style: {
                wrapper: {
                  alignItems: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20,
                  elevation: 4,
                },
              },
            },
            bottom: {
              title: (
                <Feather
                  name="bookmark"
                  size={50}
                  color={colors.secondary.dark}
                />
              ),
              style: {
                wrapper: {
                  alignItems: 'center',
                  marginTop: -80,
                  elevation: 4,
                },
              },
            },
          }}
        />
      )}
    </ScreenGradient>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
});

export default Books;
