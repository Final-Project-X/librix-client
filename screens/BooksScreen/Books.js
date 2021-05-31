import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import SwipingBook from '../../components/BookCards/SwipingBook';
import { colors } from '../../global/styles';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import { Feather } from '@expo/vector-icons';
import AlertModal from '../../components/AlertModal/AlertModal';
import PrimaryMedium from '../../components/Texts/PrimaryMedium';
import {
  helpGetPoolOfBooks,
  helpAddBookToSavedBooks,
} from '../../utils/apiCalls';
import { getPoolOfBooks } from '../../redux/actions/poolOfBooksActions';
import { addBookToSavedBooks } from '../../redux/actions/savedBooksActions';
import { removeBookFromPool } from '../../redux/actions/poolOfBooksActions';
import { createMatch } from '../../redux/actions/matchesActions';
import { useDispatch, useSelector } from 'react-redux';

const books = [
  {
    authors: ['Marcus Hünnebeck'],
    category: ['Drama'],
    condition: 'new',
    selectedFiles: 'https://m.media-amazon.com/images/I/51htp+0pH4L.jpg',
    reserved: false,
    interestedUsers: ['609a81d7be7697a88577453c'],
    _id: '609a81d8be7697a885774542',
    city: 'berlin',
    title: 'Zur Schau gestellt',
    description:
      'Thriller Kindle Ausgabe. und mehr. Sie hat ihren schlimmsten Albtraum gelebt – nun wird er zum Bestseller. Künstler Ruben Reus hat einen begehrten Auftrag ergattert: Er darf auf einem Kreuzfahrtschiff aus dem neuen Bestseller eines bekannten Autors lesen.',
    subtitle: 'Thriller',
    publishedDate: 2021,
    shape: 'as good as new',
    owner: '609a81d7be7697a88577453c',
    language: 'English',
  },
  {
    authors: ['Suzy Toronto'],
    category: ['Self-Help'],
    publishedDate: 1998,
    condition: 'good',
    selectedFiles:
      'https://images-na.ssl-images-amazon.com/images/I/61-8-hLsi3L._SX355_BO1,204,203,200_.jpg',
    reserved: false,
    interestedUsers: ['609a81d7be7697a88577453d'],
    _id: '609a81d9be7697a885774543',
    city: 'berlin',
    title:
      'Life Is Short Buy the Boots and Other Wonderful Wacky Words of Wisdom',
    description:
      'Author, artist Suzy Toronto believes life is a journey that’s meant to be enjoyed -- and there’s no better way to travel to wherever life takes you than in a rockin’ hot pair of boots! Suzy’s wacky words of advice and wisdom will have you kicking up your heels and dancing the do-si-do, stop worrying about every little thing, and focusing instead on what is truly important. Life is filled with uncertainty, and sometimes you just have to jump in, even if it means getting your boots a little dirty. So... dream big, live it up, shine bright like the person you know you are, and for heaven’s sake, go ahead and buy that pair of boots you’ve had your eye on.',
    pages: 44,
    shape: 'as good as new',
    owner: '609a81d7be7697a88577453e',
  },
  {
    authors: ['Roman Mars', 'Kurt Kohlstedt'],
    category: ['Crime'],
    condition: 'acceptable',
    selectedFiles: 'https://bilder.buecher.de/produkte/58/58726/58726418n.jpg',
    reserved: false,
    interestedUsers: ['609a81d7be7697a88577453e'],
    _id: '609a81dabe7697a885774544',
    city: 'berlin',
    title: 'The 99% Invisible City',
    subtitle: 'A Field Guide to the Wonders of the Modern Metropolis',
    description:
      '99% Invisible’ is a big-ideas podcast about small-seeming things, revealing stories baked into the buildings we inhabit, the streets we drive, and the sidewalks we traverse. The show celebrates design and architecture in all of its functional glory and accidental absurdity, with intriguing tales of both designers and the people impacted by their designs.00Now, in ‘The 99% Invisible City: A Field Guide to Hidden World of Everyday Design’, host Roman Mars and coauthor Kurt Kohlstedt zoom in on the various elements that make our cities work, exploring the origins and other fascinating stories behind everything from power grids and fire escapes to drinking fountains and street signs. With deeply researched entries and beautiful line drawings throughout, The 99% Invisible City will captivate devoted fans of the show and anyone curious about design, urban environments, and the unsung marvels of the world around them.',
    pages: 288,
    publishedDate: 1997,
    shape: 'as good as new',
    owner: '609a81d7be7697a88577453e',
    language: 'English',
  },
  {
    authors: ['Jojo Moyes'],
    category: ['Romance'],
    publishedDate: 2010,
    language: 'English',
    condition: 'new',
    selectedFiles:
      'https://upload.wikimedia.org/wikipedia/en/f/fd/Me_Before_You_%28film%29.jpg',
    title: 'Me Before You',
    subtitle: 'A Field Guide to the Wonders of the Modern Metropolis',
    description:
      'They had nothing in common until love gave them everything to lose.',
  },
  {
    authors: ['	Bernard Cornwell'],
    language: 'English',
    publishedDate: 2010,
    category: ['Romance'],
    condition: 'good',
    selectedFiles:
      'https://images2.medimops.eu/product/5fbfff/M00446520942-large.jpg',
    title: 'Selling the Invisible: A Field Guide to Modern Marketing',
    subtitle: 'A Field Guide to the Wonders of the Modern Metropolis',
    description:
      'SELLING THE INVISIBLE is a succinct and often entertaining look at the unique characteristics of services and their prospects, and how any service, from a home-based consultancy to a multinational brokerage, can turn more prospects into clients and keep them.',
  },
];

const Books = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  console.log('user in Books.js', user);

  // useEffect(() => {
  //   const getData = async () => {
  //     const allBooks = await helpGetPoolOfBooks(user._id);
  //     dispatch(getPoolOfBooks(allBooks));
  //   };
  //   getData();
  // }, []);

  // const books = useSelector((state) => state.poolOfBooks.books);
  // console.log({ books });

  const handleYes = (index) => {
    const book = books[index];
    if (user.booksToOffer.length < 1) {
      setShowModal(true);
    } else {
      user.booksInterestedIn.push(book);
      dispatch(createMatch(user._id, book._id));
    }
  };

  const handleSave = async (index) => {
    const book = books[index];
    const BookToSave = await helpAddBookToSavedBooks(book);
    dispatch(addBookToSavedBooks(BookToSave));
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
          cards={books}
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
