import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../../global/styles';
import { MatchesIconButton } from '../Buttons/IconButtons';
import PrimaryText from '../Texts/PrimaryText';
import MatchBookCard from './MatchBookCard';
import MatchMenu from './MatchMenu';

const Match = ({ matchNum }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            iconName="user"
            iconColor={colors.primary.dark}
            buttonColor={colors.white}
            position="left"
            handlePress={onProfileIconPress}
          />
          <MatchesIconButton
            iconName="message-circle"
            iconColor={colors.primary.dark}
            buttonColor={colors.white}
            handlePress={onMessageIconPress}
          />

          <MatchMenu
            isMenuOpen={isMenuOpen}
            closeHandler={() => setIsMenuOpen(false)}
            onMoreIconPress={onMoreIconPress}
          />
        </View>
      </View>

      <View style={styles.matchRow}>
        <MatchBookCard
          bookOwner={'You'}
          bookTitle={'The Little Book of Calm'}
          bookAuthor={'Author Author'}
          bookImageUri={
            'https://cdn.pixabay.com/photo/2015/12/05/08/25/fairy-tale-1077863_1280.jpg'
          }
        />
        <Feather name="refresh-cw" size={24} color={colors.primary.dark} />
        <MatchBookCard
          bookOwner={'Karl'}
          bookTitle={'The Noma Guide...'}
          bookAuthor={'René Redzepi'}
          bookImageUri={
            'https://cdn.pixabay.com/photo/2015/12/05/08/25/fairy-tale-1077863_1280.jpg'
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
    borderWidth: 1,
    borderRadius: 20,
  },
  matchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  matchHeader: {
    fontSize: 24,
  },
  matchMenu: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 300,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Match;
