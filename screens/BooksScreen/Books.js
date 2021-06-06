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
import { getPoolOfBooks } from '../../redux/actions/poolOfBooksActions';
import {
  addBookToSavedBooks,
  getSavedBooks,
} from '../../redux/actions/savedBooksActions';
import { removeBookFromPool } from '../../redux/actions/poolOfBooksActions';
import { createMatch } from '../../redux/actions/matchesActions';
import { useDispatch, useSelector } from 'react-redux';

const Books = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user.user);
  console.log('Books screen', user._id);

  useEffect(() => {
    dispatch(getPoolOfBooks({ userID: user?._id }));
    dispatch(getSavedBooks(user?.booksToRemember));
  }, []);

  const books = useSelector((state) => state.poolOfBooks.books);
  const savedBooks = useSelector((state) => state.savedBooks.savedBooks);

  const handleYes = async (index) => {
    const book = books[index];

    if (user.booksToOffer.length < 1) {
      setShowModal(true);
    } else {
      dispatch(createMatch({ userId: user?._id, bookId: book?._id }));
      dispatch(removeBookFromPool(book?._id, books));
    }
  };

  const handleSave = (index) => {
    const book = books[index];
    dispatch(addBookToSavedBooks(book, user, savedBooks));
    dispatch(removeBookFromPool(book?._id, books));
  };

  const handleNope = (index) => {
    const book = books[index];
    dispatch(removeBookFromPool(book?._id, books));
  };

  const handlePress = () => {
    navigation.navigate('AddBook1');
    setShowModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenGradient>
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
          <PrimaryMedium
            customStyles={styles.modalText}
            text="One hand washes the other, this is how we do it."
          />
          <PrimaryMedium
            customStyles={styles.modalText}
            text="Upload a book -- and have a look!"
          />
        </AlertModal>

        {books.length < 1 || books === undefined ? (
          <NoBookCard navigation={navigation} />
        ) : (
          <Swiper
            cards={books || []}
            cardIndex={0}
            renderCard={(book) => (
              <SwipingBook item={book} navigation={navigation} />
            )}
            onSwipedLeft={(index) => handleNope(index)}
            onSwipedBottom={(index) => handleSave(index)}
            onSwipedRight={(index) => handleYes(index)}
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
    </SafeAreaView>
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
