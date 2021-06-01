import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
// REDUX
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteBook,
  markBookAsReserved,
} from '../../redux/actions/usersBooksActions';
import {
  deleteMatch,
  deleteMultipleMatches,
  getMatches,
} from '../../redux/actions/matchesActions';
// COMPONENTS
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import Match from '../../components/Matches/Match';
import AlertModal from '../../components/AlertModal/AlertModal';
import PrimaryText from '../../components/Texts/PrimaryText';
import PrimaryMedium from '../../components/Texts/PrimaryMedium';
// UTILS
import {
  notifyBackendOfReservedBook,
  notifyBackendOfDeletedMatch,
  notifyBackendOfExchange,
  sendUserPointToBackend,
} from './asyncFunctions';
// STYLES
import { styles } from '../../components/Matches/styles';

const SAMPLE_MATCHES_OBJECT = [
  {
    _id: '60a763235ff68c2c15fe2d2b',
    bookOne: {
      _id: '60a7631c5ff68c2c15fe2d1e',
      authors: ['Osha Gray Davidson'],
      isbn: ['1469646609'],
      city: 'berlin',
      selectedFiles: [
        'https://i.pinimg.com/originals/d0/5d/fa/d05dfab680acc23e84e619fab3fce9ef.jpg',
      ],
      reserved: false,
      title: 'The Best of Enemies, Movie Edition',
      description:
        "C. P. Ellis grew up in the poor white section of Durham, North Carolina, and as a young man joined the Ku Klux Klan. Ann Atwater, a single mother from the poor black part of town, quit her job as a household domestic to join the civil rights fight. During the 1960s, as the country struggled with the explosive issue of race, Ellis and Atwater met on opposite sides of the public school integration issue. Their encounters were charged with hatred and suspicion. In an amazing set of transformations, however, each of them came to see how the other had been exploited by the South's rigid power structure, and they forged a friendship that flourished against a backdrop of unrelenting bigotry. Now a major motion picture, The Best of Enemies offers a vivid portrait of a relationship that defied all odds. View the movie trailer here: https://youtu.be/eKM6fSTs-A0",
      publishedDate: '2019-02',
      condition: 'as good as new',
      category: 'book',
      owner: {
        username: 'audreeeeyyy',
      },
    },
    bookTwo: {
      _id: '60a763225ff68c2c15fe2d2a',
      authors: [
        'Jeremy Crawford',
        'James Wyatt',
        'Wizards of the Coast, Inc',
        'Robert J. Schwalb',
        'Bruce R. Cordell',
      ],
      isbn: ['0786965606'],
      city: 'berlin',
      selectedFiles: [
        'https://i.ebayimg.com/images/g/yAIAAOSwv9pfYnGW/s-l640.jpg',
      ],
      reserved: false,
      title: "Player's Handbook",
      description:
        "A player's handbook for the newest edition of the role-playing game contains rules for character creation and advancement, backgrounds and skills, exploration, equipment, and spells.",
      publishedDate: '2014',
      condition: 'as good as new',
      category: 'book',
      owner: {
        username: 'lisa',
      },
    },
    chat: {},
    status: 'pending',
    createdAt: '2021-05-21T07:37:07.275+00:00',
  },
  {
    _id: '60a763235ff68c2c15fe2d2c',
    bookOne: {
      _id: '60a7631c5ff68c2c15fe2d1f',
      authors: ['J. K. Rowling'],
      isbn: ['3551354022'],
      city: 'berlin',
      selectedFiles: [
        'https://www.carlsen-harrypotter.de/sites/default/files/produkt/cover/9783551354020_0.jpg',
      ],
      reserved: false,
      title: 'Harry Potter und die Kammer des Schreckens',
      description:
        'The second book in the Harry Potter series translated into German.',
      publishedDate: '2006',
      condition: 'as good as new',
      category: 'book',
      owner: {
        username: 'audreeeeyyy',
      },
    },
    bookTwo: {
      _id: '60a763225ff68c2c15fe2d2a',
      authors: [
        'Jeremy Crawford',
        'James Wyatt',
        'Wizards of the Coast, Inc',
        'Robert J. Schwalb',
        'Bruce R. Cordell',
      ],
      isbn: ['0786965606'],
      city: 'berlin',
      selectedFiles: [
        'https://i.ebayimg.com/images/g/yAIAAOSwv9pfYnGW/s-l640.jpg',
      ],
      reserved: false,
      title: "Player's Handbook",
      description:
        "A player's handbook for the newest edition of the role-playing game contains rules for character creation and advancement, backgrounds and skills, exploration, equipment, and spells.",
      publishedDate: '2014',
      condition: 'as good as new',
      category: 'book',
      owner: {
        username: 'lisa',
      },
    },
    chat: {},
    status: 'pending',
    createdAt: '2021-05-21T07:37:07.275+00:00',
  },
];

const Matches = ({ navigation }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const matches = useSelector((state) => state.matches.matches);
  const booksToOffer = useSelector((state) => state.user.user.booksToOffer);

  useEffect(() => {
    console.log('userID:', user._id);
    dispatch(getMatches(user._id));
  }, []);

  // console.log('user / store / matches:', matches);

  const [isReserveModalShown, setIsReserveModalShown] = useState(false);
  const [isReceiptModalShown, setIsReceiptModalShown] = useState(false);
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);

  const [bookIDToReserve, setBookIDToReserve] = useState(null);
  const [bookIDToDelete, setBookIDToDelete] = useState(null);
  const [matchIDToDelete, setMatchIDToDelete] = useState(null);

  const onReserveModalPress = () => {
    // update the booksToOffer state
    dispatch(markBookAsReserved(bookIDToReserve, booksToOffer));
    // update the book status in the backend
    notifyBackendOfReservedBook(bookIDToReserve);
    // close the modal
    setIsReserveModalShown(false);
    // clean up the state
    setBookIDToReserve(null);
    // ? could be a toast message/alert instead of the log
    console.log('You just reserved a book!', bookIDToReserve);
  };

  const onReceiptModalPress = () => {
    // update the booksToOffer state
    dispatch(deleteBook(bookIDToDelete, booksToOffer));
    // update the matches (state)
    // dispatch(deleteMatch(matchIDToDelete, matches)); — REPLACED BY DISPATCHER BELOW
    dispatch(deleteMultipleMatches(bookIDToDelete, matches));
    // update the status of the match in the DB, which will delete this match and then remove the books from all other matches
    notifyBackendOfExchange(matchIDToDelete);

    setIsReceiptModalShown(false);
    // clean up the states
    setBookIDToDelete(null);
    setMatchIDToDelete(null);
    // add +1 to user's profile points
    sendUserPointToBackend(user);
    console.log('You finalized the deal!');
  };

  const onDeleteModalPress = () => {
    // delete the match from the user state
    dispatch(deleteMatch(matchIDToDelete, matches));
    // delete the match from the DB
    notifyBackendOfDeletedMatch(matchIDToDelete);
    // hide the modal
    setIsDeleteModalShown(false);
    // clean up the states
    setMatchIDToDelete(null);
    console.log('You deleted the match!');
  };

  return (
    <MenuProvider>
      <ScreenGradient>
        {/* <SafeAreaView>
          <HeaderIconButton
            iconName="user"
            iconColor={colors.white}
            buttonColor={colors.primary.dark}
            handlePress={() => navigation.toggleDrawer()}
          />
        </SafeAreaView> */}

        {/* Reserve your book modal */}
        <AlertModal
          showModal={isReserveModalShown}
          setShowModal={setIsReserveModalShown}
          buttonText="Reserve"
          handlePress={onReserveModalPress}
          doCleanup={() => setBookIDToReserve(null)}
        >
          <PrimaryText text="Shut the door in the face of interested readers! Reserve your book!" />
        </AlertModal>

        {/* Confirm receipt of the book modal */}
        <AlertModal
          showModal={isReceiptModalShown}
          setShowModal={setIsReceiptModalShown}
          buttonText="Confirm"
          handlePress={onReceiptModalPress}
          doCleanup={() => {
            setBookIDToDelete(null);
            setMatchIDToDelete(null);
          }}
        >
          <PrimaryText text="Got the book? Simply say so and close the bloody match!" />
        </AlertModal>

        {/* Delete the match modal */}
        <AlertModal
          showModal={isDeleteModalShown}
          setShowModal={setIsDeleteModalShown}
          buttonText="Delete"
          handlePress={onDeleteModalPress}
          doCleanup={() => setMatchIDToDelete(null)}
        >
          <PrimaryText text="Don't want to exchange? Just delete the bloody match!" />
        </AlertModal>

        <FlatList
          data={matches}
          renderItem={({ item, index }) => (
            <Match
              matchNum={index + 1}
              matchInfo={item}
              alertSetters={{
                setIsReserveModalShown,
                setIsReceiptModalShown,
                setIsDeleteModalShown,
              }}
              onSetReserveBookID={setBookIDToReserve}
              onSetDeleteBookID={setBookIDToDelete}
              onSetMatchID={setMatchIDToDelete}
            />
          )}
          keyExtractor={(item) => item._id}
          ListEmptyComponent={
            <View>
              <PrimaryMedium
                text="No matches? Go navigate our pool of books!"
                customStyles={styles.matchesListEmpty}
              />
            </View>
          }
          ListFooterComponent={
            matches &&
            matches.length && (
              <View>
                <PrimaryMedium
                  text="That's it!"
                  customStyles={styles.matchesListEnd}
                />
              </View>
            )
          }
        />
      </ScreenGradient>
    </MenuProvider>
  );
};

export default Matches;
