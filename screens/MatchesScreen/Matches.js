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
import { styles } from './styles';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import MainStackHeader from '../../components/Headers/MainStackHeader';

//* COMPONENT

const Matches = ({ navigation }) => {
  // console.log('navigation in Matches', navigation);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  // console.log('user from matches', user);
  const matches = useSelector((state) => state.matches.matches);
  // console.log('matches from matches', matches);
  const booksToOffer = useSelector((state) => state.usersBooks.booksToOffer);
  // console.log('booksToOffer from matches', booksToOffer);

  useEffect(() => {
    console.log('userID:', user._id);
    dispatch(getMatches(user._id));
  }, []);

  // console.log('user / store / matches:', matches);

  const [isReserveModalShown, setIsReserveModalShown] = useState(false);
  const [isReceiptModalShown, setIsReceiptModalShown] = useState(false);
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);

  const [bookIDToReserve, setBookIDToReserve] = useState(null);
  const [matchIDToReserve, setMatchIDToReserve] = useState(null);
  const [bookIDToReceive, setBookIDToReceive] = useState(null); // the book that is received
  const [bookIDToDelete, setBookIDToDelete] = useState(null);
  const [matchIDToDelete, setMatchIDToDelete] = useState(null);

  const onReserveModalPress = async () => {
    // update the booksToOffer state
    dispatch(markBookAsReserved(bookIDToReserve, booksToOffer));

    // update the book status in the backend
    try {
      const reservationResponse = await notifyBackendOfReservedBook({
        matchID: matchIDToReserve,
        bookID: bookIDToReserve,
      });
      console.log('reservation response in Matches.js', reservationResponse);
      if (reservationResponse?.response.message.includes('status updated')) {
        dispatch(getMatches(user._id));
      }
    } catch (err) {
      console.log(err);
    }

    // close the modal
    setIsReserveModalShown(false);
    // TODO alert / toast
    console.log('You just reserved a book!', bookIDToReserve);
    // clean up the state
    setBookIDToReserve(null);
    setMatchIDToReserve(null);
  };

  const onReceiptModalPress = async () => {
    //? set the status of ANOTHER USER's book in the match to 'received',
    // which will check if the other book is received as well
    // and delete the match and books' data if it is
    try {
      const receptionResponse = await notifyBackendOfExchange({
        matchID: matchIDToDelete,
        bookID: bookIDToReceive,
      });
      console.log('reception response in Matches.js', receptionResponse);
      const responseMessage = receptionResponse?.response.message;
      // if both users confirmed the receipt, then the match & books are deleted.
      // if only one has, the match stays, just the status of oneBook changes (matches are fetched from the BE again)
      if (responseMessage.includes('Just one of the books')) {
      } else if (responseMessage.includes('Both Books with all connections')) {
        // update the booksToOffer state
        dispatch(deleteBook(bookIDToDelete, booksToOffer));
        // update the matches (state)
        dispatch(deleteMultipleMatches(bookIDToDelete, matches));
        // TODO alert / toast
        console.log('You finalized the deal!');
        // add +1 to user's profile points
        sendUserPointToBackend(user);
      }
      // update matches
      dispatch(getMatches(user._id));
    } catch (err) {
      console.log(err);
    }

    setIsReceiptModalShown(false);
    // clean up the states
    setBookIDToDelete(null);
    setBookIDToReceive(null);
    setMatchIDToDelete(null);
  };

  const onDeleteModalPress = () => {
    // delete the match from the user state
    dispatch(deleteMatch(matchIDToDelete, matches));
    // delete the match from the DB
    notifyBackendOfDeletedMatch({ matchID: matchIDToDelete, userID: user._id });
    // hide the modal
    setIsDeleteModalShown(false);
    // TODO alert / toast
    console.log('You deleted the match!');
    // clean up the states
    setMatchIDToDelete(null);
  };

  const handleMatchPartnerProfilePress = (otherUserID) => {
    console.log("other person's profile", otherUserID);
    navigation.navigate('OthersProfile', { otherUser: otherUserID });
  };

  return (
    <MenuProvider>
      <ScreenGradient>
        {/* Reserve your book modal */}
        <AlertModal
          showModal={isReserveModalShown}
          setShowModal={setIsReserveModalShown}
          whiteButtonText="Cancel"
          buttonText="Reserve"
          handlePress={onReserveModalPress}
          doCleanup={() => setBookIDToReserve(null)}
        >
          <PrimaryBold
            customStyles={styles.alertModalBold}
            text="That's a commitment!"
          />
          <PrimaryText
            customStyles={styles.alertModalText}
            text="Shut the door in the face of other interested readers, reserve your book!"
          />
        </AlertModal>

        {/* Confirm receipt of the book modal */}
        <AlertModal
          showModal={isReceiptModalShown}
          setShowModal={setIsReceiptModalShown}
          whiteButtonText="No, wait"
          buttonText="Let's do it!"
          handlePress={onReceiptModalPress}
          doCleanup={() => {
            setBookIDToDelete(null);
            setBookIDToReceive(null);
            setMatchIDToDelete(null);
          }}
        >
          <PrimaryBold
            customStyles={styles.alertModalBold}
            text="Swapped the books? Feeling good?"
          />
          <PrimaryText
            customStyles={styles.alertModalText}
            text="From now on, we delete everything… EVERYTHING!!!"
          />
          <PrimaryText
            customStyles={styles.alertModalText}
            text="Just kidding, not everything but all things associated with this match, so the books and the chat. Just clearing up some space for later."
          />
        </AlertModal>

        {/* Delete the match modal */}
        <AlertModal
          showModal={isDeleteModalShown}
          setShowModal={setIsDeleteModalShown}
          whiteButtonText="Undo"
          buttonText="It's over"
          handlePress={onDeleteModalPress}
          doCleanup={() => setMatchIDToDelete(null)}
        >
          <PrimaryBold
            customStyles={styles.alertModalBold}
            text="Want to cut the connection?"
          />
          <PrimaryText customStyles={styles.alertModalText} text="That’s ok." />
          <PrimaryText
            customStyles={styles.alertModalText}
            text="Pressing the purple button
            will make every word regarding this relationship disappear."
          />
          <PrimaryText
            customStyles={styles.alertModalText}
            text="Clean breakup — no bull***."
          />
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
              onSetDeleteMatchID={setMatchIDToDelete}
              onSetReserveMatchID={setMatchIDToReserve}
              onSetBookIDToReceive={setBookIDToReceive}
              onMatchPartnerProfilePress={handleMatchPartnerProfilePress}
            />
          )}
          keyExtractor={(item) => item?._id}
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
