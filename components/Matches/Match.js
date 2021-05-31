import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../../global/styles';
import { MatchesIconButton } from '../Buttons/IconButtons/MatchesIconButton';
import PrimaryText from '../Texts/PrimaryText';
import MatchBookCard from './MatchBookCard';
import MatchMenu from './MatchMenu';

const Match = ({
  matchNum,
  matchInfo,
  username,
  alertSetters,
  onSetBookID,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // books on the left-hand side are those which belong to the current user, books on the right-hand side are other person's books
  const { bookOne, bookTwo } = matchInfo;
  const leftHandBook = bookOne.owner.username === username ? bookOne : bookTwo;
  const rightHandBook = bookOne.owner.username === username ? bookTwo : bookOne;

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
          <MatchesIconButton
            iconSize={20}
            iconName="user"
            position="left"
            handlePress={onProfileIconPress}
          />
          <MatchesIconButton
            iconSize={20}
            iconName="message-circle"
            handlePress={onMessageIconPress}
          />

          <MatchMenu
            isMenuOpen={isMenuOpen}
            closeHandler={() => setIsMenuOpen(false)}
            onMoreIconPress={onMoreIconPress}
            alertSetters={alertSetters}
            onSetBookID={() => onSetBookID(leftHandBook._id)}
          />
        </View>
      </View>

      <View style={styles.matchRow}>
        <MatchBookCard
          bookOwner={'You'}
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
          bookOwner={rightHandBook.owner.username}
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

const styles = StyleSheet.create({
  matchCard: {
    margin: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  matchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  matchHeader: {
    fontSize: 24,
  },
});

export default Match;
