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

const Match = ({
  matchNum,
  matchInfo,
  alertSetters,
  onSetBookID,
  // ...other
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // console.log('other props in Match.js:', other);

  const user = useSelector((state) => state.user.user);
  // books on the left-hand side are those which belong to the current user, books on the right-hand side are other person's books
  const { bookOne, bookTwo } = matchInfo;
  const leftHandBook = bookOne.owner === user._id ? bookOne : bookTwo;
  const rightHandBook = bookOne.owner === user._id ? bookTwo : bookOne;

  const onProfileIconPress = () => {
    console.log('click the <profile> icon button in the match!');
  };

  const onMessageIconPress = () => {
    console.log('click the <message> icon button in the match!');
  };

  const onMoreIconPress = () => {
    console.log('click the <more> icon button in the match!');
    setIsMenuOpen(!isMenuOpen);
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
          <MatchesIconButton iconName="user" handlePress={onProfileIconPress} />
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
            onSetBookID={() => onSetBookID(leftHandBook._id)}
          />
        </View>
      </View>

      <View style={styles.matchRow}>
        <MatchBookCard
          bookTitle={leftHandBook.title}
          bookAuthor={leftHandBook.authors[0]}
          bookImageUri={
            leftHandBook.selectedFiles.length > 0
              ? leftHandBook.selectedFiles[0]
              : null
          }
        />
        <Feather name="refresh-cw" size={24} color={colors.primary.dark} />
        <MatchBookCard
          bookTitle={rightHandBook.title}
          bookAuthor={rightHandBook.authors[0]}
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
