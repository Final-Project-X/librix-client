import React, { useState } from 'react';
import { View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../../global/styles';
import { MatchesIconButton } from '../Buttons/IconButtons/MatchesIconButton';
import PrimaryText from '../Texts/PrimaryText';
import MatchBookCard from './MatchBookCard';
import MatchMenu from './MatchMenu';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import MatchOverlay from './MatchOverlay';

const Match = ({
  matchNum,
  matchInfo,
  alertSetters,
  onSetReserveBookID,
  onSetDeleteBookID,
  onSetBookStatusUpdate,
  onSetDeleteMatchID,
  onSetReserveMatchID,
  onMatchPartnerProfilePress,
  // ...other
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // console.log('other props in Match.js:', other);

  const { user } = useSelector((state) => state.user.user);

  // console.log(matchInfo);

  // books on the left-hand side are those which belong to the current user, books on the right-hand side are other person's books
  const { bookOne, bookTwo, bookOneStatus, bookTwoStatus } = matchInfo;
  const leftHandBook = bookOne.owner === user._id ? bookOne : bookTwo;
  const leftHandBookStatus =
    bookOne.owner === user._id ? bookOneStatus : bookTwoStatus;
  const rightHandBook = bookOne.owner === user._id ? bookTwo : bookOne;
  const rightHandBookStatus =
    bookOne.owner === user._id ? bookTwoStatus : bookOneStatus;

  const onProfileIconPress = () => {
    console.log('click the <profile> icon button in the match!');
    onMatchPartnerProfilePress(rightHandBook.owner);
    console.log('rightHandBook.owner', rightHandBook.owner);
  };

  const onMessageIconPress = () => {
    console.log('click the <message> icon button in the match!');
  };

  const onMoreIconPress = () => {
    console.log('click the <more> icon button in the match!');
    setIsMenuOpen(!isMenuOpen);
  };

  const onDeleteIconPress = () => {
    console.log('click the <delete> icon button in the match!');
    alertSetters.setIsDeleteModalShown(true);
    onSetDeleteMatchID(matchInfo._id);
  };

  const onCheckIconPress = () => {
    console.log('click the <check> icon button in the match!');
    alertSetters.setIsReserveModalShown(true);
    onSetReserveBookID(leftHandBook._id);
  };

  const onBookIconPress = () => {
    console.log('click the <book> icon button in the match!');
    onSetDeleteBookID(leftHandBook._id); //? do we need this?
    onSetDeleteMatchID(matchInfo._id);
    onSetBookStatusUpdate(
      bookOne.owner === user._id
        ? { bookTwoStatus: 'exchanged' }
        : { bookOneStatus: 'exchanged' },
    );
  };

  return (
    <View style={styles.matchCard}>
      <View style={styles.matchRow}>
        <PrimaryText
          text={`Match #${matchNum}`}
          customStyles={styles.matchHeader}
        />
        <View style={styles.matchRow}>
          {/* <MatchesIconButton
            iconSize={20}
            iconName="user"
            position="left"
            handlePress={onProfileIconPress}
          /> */}
          {/* <MatchesIconButton
            iconName="message-circle"
            handlePress={onMessageIconPress}
          /> */}
          {rightHandBookStatus === 'reserved' &&
            leftHandBookStatus === 'reserved' && (
              <>
                <MatchesIconButton
                  iconName="message-circle"
                  handlePress={onMessageIconPress}
                />
                <MatchesIconButton
                  iconName="book"
                  handlePress={onBookIconPress}
                />
              </>
            )}

          {rightHandBookStatus === 'reserved' &&
            leftHandBookStatus !== 'reserved' && (
              <>
                <MatchesIconButton
                  iconName="message-circle"
                  handlePress={onMessageIconPress}
                />
                <MatchesIconButton
                  iconName="trash"
                  handlePress={onDeleteIconPress}
                />
                <MatchesIconButton
                  iconName="check"
                  handlePress={onCheckIconPress}
                />
              </>
            )}

          {rightHandBookStatus !== 'reserved' && rightHandBook.reserved && (
            <MatchesIconButton
              iconName="trash"
              handlePress={onDeleteIconPress}
            />
          )}

          {rightHandBookStatus === 'pending' &&
            leftHandBookStatus === 'pending' &&
            !leftHandBook.reserved &&
            !rightHandBook.reserved && (
              <>
                <MatchesIconButton
                  iconName="user"
                  handlePress={onProfileIconPress}
                />
                <MatchesIconButton
                  iconName="message-circle"
                  handlePress={onMessageIconPress}
                />
                <MatchMenu
                  isMenuOpen={isMenuOpen}
                  closeHandler={() => setIsMenuOpen(false)}
                  onMoreIconPress={onMoreIconPress}
                  alertSetters={alertSetters}
                  menuOpenSetter={setIsMenuOpen}
                  onSetReserveBookID={() =>
                    onSetReserveBookID(leftHandBook._id)
                  }
                  onSetDeleteBookID={() => onSetDeleteBookID(leftHandBook._id)}
                  onSetDeleteMatchID={() => onSetDeleteMatchID(matchInfo._id)}
                  onSetReserveMatchID={() => onSetReserveMatchID(matchInfo._id)}
                  onSetBookStatusUpdate={() =>
                    onSetBookStatusUpdate(
                      bookOne.owner === user._id
                        ? { bookTwoStatus: 'exchanged' }
                        : { bookOneStatus: 'exchanged' },
                    )
                  }
                />
              </>
            )}
        </View>
      </View>

      {/* if rightHandBookStatus is 'reserved' && leftHandBookStatus is 'reserved', then it's
      - message: 'Swap in progress! Press the purple︎ button once you’ve received the book!'
      - buttons: message-circle, book */}

      {/* if rightHandBookStatus is 'reserved', then it's
      - message: 'The book was reserved for you. Reserve yours, confirm the match.'
    - buttons: message-circle, trash, check */}

      {/* if rightHandBook.reserved is true, then it's
      - message: 'The book was reserved by the owner.'
    - buttons: trash */}

      <View style={styles.matchRow}>
        {rightHandBookStatus === 'reserved' &&
          leftHandBookStatus === 'reserved' && (
            <MatchOverlay text="Swap in progress! Press the purple︎ button once you’ve received the book!" />
          )}

        {rightHandBookStatus === 'reserved' &&
          leftHandBookStatus !== 'reserved' && (
            <MatchOverlay text="The book was reserved for you. Reserve yours, confirm the match." />
          )}

        {rightHandBookStatus !== 'reserved' && rightHandBook.reserved && (
          <MatchOverlay text="The book was reserved by the owner." />
        )}

        {/* if leftHandBook.reserved is true && leftHandBookStatus is 'reserved':
              text label on the book image: 'reserved in this match' */}
        {/* if leftHandBook.reserved is true && leftHandBookStatus is 'pending':
              text label on the book image: 'reserved' */}
        <MatchBookCard
          bookTitle={leftHandBook.title}
          bookAuthor={leftHandBook.authors[0]}
          // to handle the case when the book is reserved
          bookReserved={leftHandBook.reserved || false}
          // to handle the book status inside the match:
          bookStatusInCurrentMatch={leftHandBookStatus}
          bookImageUri={
            leftHandBook.selectedFiles.length > 0
              ? leftHandBook.selectedFiles[0]
              : null
          }
          reservedLabelText={
            leftHandBookStatus === 'reserved' && leftHandBook.reserved
              ? 'you reserved for this match'
              : leftHandBook.reserved
              ? 'reserved'
              : null
          }
        />
        <Feather name="refresh-cw" size={24} color={colors.primary.dark} />
        <MatchBookCard
          bookTitle={rightHandBook.title}
          bookAuthor={rightHandBook.authors[0]}
          // to handle the case when the book is reserved
          bookReserved={rightHandBook.reserved || false}
          // to handle the book status inside the match:
          bookStatusInCurrentMatch={rightHandBookStatus}
          bookImageUri={
            rightHandBook.selectedFiles.length > 0
              ? rightHandBook.selectedFiles[0]
              : null
          }
        />
      </View>
    </View>
  );
};

export default Match;
