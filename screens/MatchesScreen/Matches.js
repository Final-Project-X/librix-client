import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import { HeaderIconButton } from '../../components/Buttons/IconButtons';
import Match from '../../components/Matches/Match';
import AlertModal from '../../components/AlertModal/AlertModal';
import { colors } from '../../global/styles';
import PrimaryText from '../../components/Texts/PrimaryText';

import { useSelector, useDispatch } from 'react-redux';
import { getMatches } from '../../redux/actions/matchesActions';
import { loginUser } from '../../redux/actions/userActions';
import { markBookAsReserved } from '../../redux/actions/usersBooksActions';
import { helpFetchUser, helpReserveBook } from '../../utils/apiCalls';

//! do not remove:
// import { helpReserveBook } from '../../utils/apiCalls';

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
  // const username = 'audreeeyyy';

  const dispatch = useDispatch();

  console.log('------------------------');

  const user = useSelector((state) => state.user.user);
  // console.log('<user> after calling useSelector', user);
  // console.log('userID', user._id);
  const matches = useSelector((state) => state.matches.matches);
  // console.log('<matches> after calling useSelector', matches);
  // const booksToOffer = useSelector((state) => state.user.user.booksToOffer);
  // console.log('<booksToOffer> after calling useSelector', booksToOffer);

  // fetch user data, i.e. by loggin the user in
  // useEffect(() => {
  //   dispatch(
  //     loginUser({
  //       email: 'Citlalli_Cormier@hotmail.com',
  //       password: 'Test123!',
  //     }),
  //   );
  //   // dispatch(getMatches(user._id));
  // }, []);

  useEffect(() => {
    console.log('userID:', user._id);
    // get the array of matches, set the state
    dispatch(getMatches(user._id));
  }, []);

  console.log('user / store / matches:', matches);

  const [isReserveModalShown, setIsReserveModalShown] = useState(false);
  const [isReceiptModalShown, setIsReceiptModalShown] = useState(false);
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);

  const [bookIDToReserve, setBookIDToReserve] = useState(null);

  const onReserveModalPress = async () => {
    // change the booksToOffer state
    // dispatch(markBookAsReserved(bookIDToReserve, booksToOffer));

    //? call the backend — helpReserveBook
    try {
      const resultOfReservation = await helpReserveBook(bookIDToReserve);
      console.log('resultOfReservation', resultOfReservation);
    } catch (err) {
      console.log(err);
    }

    console.log('You just reserved a book!', bookIDToReserve);
    setIsReserveModalShown(false);
    setBookIDToReserve(null);
  };

  const onReceiptModalPress = () => {
    console.log('You finalized the deal!');
    setIsReceiptModalShown(false);
  };

  const onDeleteModalPress = () => {
    console.log('You deleted the match!');
    setIsDeleteModalShown(false);
  };

  return (
    <MenuProvider>
      <ScreenGradient>
        <SafeAreaView>
          <HeaderIconButton
            iconName="user"
            iconColor={colors.white}
            buttonColor={colors.primary.dark}
            handlePress={() => navigation.toggleDrawer()}
          />
        </SafeAreaView>

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
        >
          <PrimaryText text="Got the book? Simply say so and close the bloody match!" />
        </AlertModal>

        {/* Delete the match modal */}
        <AlertModal
          showModal={isDeleteModalShown}
          setShowModal={setIsDeleteModalShown}
          buttonText="Delete"
          handlePress={onDeleteModalPress}
        >
          <PrimaryText text="Don't want to exchange? Just delete the bloody match!" />
        </AlertModal>

        <FlatList
          data={SAMPLE_MATCHES_OBJECT}
          renderItem={({ item, index }) => (
            <Match
              matchNum={index + 1}
              matchInfo={item}
              username={user.username}
              alertSetters={{
                setIsReserveModalShown,
                setIsReceiptModalShown,
                setIsDeleteModalShown,
              }}
              onSetBookID={setBookIDToReserve}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      </ScreenGradient>
    </MenuProvider>
  );
};

export default Matches;
