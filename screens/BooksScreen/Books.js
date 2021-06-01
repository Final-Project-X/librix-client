import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import SwipingBook from '../../components/BookCards/SwipingBook';
import { colors } from '../../global/styles';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import { Feather } from '@expo/vector-icons';
import AlertModal from '../../components/AlertModal/AlertModal';
import PrimaryMedium from '../../components/Texts/PrimaryMedium';
import { helpAddBookToSavedBooks } from '../../utils/apiCalls';
import { getPoolOfBooks } from '../../redux/actions/poolOfBooksActions';
import { addBookToSavedBooks } from '../../redux/actions/savedBooksActions';
import { removeBookFromPool } from '../../redux/actions/poolOfBooksActions';
import { createMatch } from '../../redux/actions/matchesActions';
import { useDispatch, useSelector } from 'react-redux';

const Books = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  console.log('from Books', user);

  useEffect(() => {
    const getData = async () => {
      dispatch(getPoolOfBooks({ userID: user._id }));
    };
    getData();
  }, []);

  const books = useSelector((state) => state.poolOfBooks.books);

  const handleYes = (index) => {
    const book = books[index];
    if (user.booksToOffer.length < 1) {
      setShowModal(true);
    } else {
      dispatch(createMatch(user._id, book._id));
    }
  };

  const handleSave = async (index) => {
    const book = books[index];
    await helpAddBookToSavedBooks({ bookId: book._id, userId: user._id });
    dispatch(addBookToSavedBooks(book, user.booksToRemember));
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
    <SafeAreaView style={styles.container}>
      <ScreenGradient>
        <AlertModal
          showModal={showModal}
          setShowModal={setShowModal}
          buttonText="Add a book"
          handlePress={handlePress}
        >
          <PrimaryMedium
            customStyles={styles.modalText}
            text="You need a book to exchange."
          />
          <PrimaryMedium
            customStyles={styles.modalText}
            text="Please add a book to contine."
          />
        </AlertModal>
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
