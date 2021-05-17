import React from 'react';
import { StyleSheet, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../../global/styles';
import { MatchesIconButton } from '../Buttons/IconButtons';
import PrimaryText from '../Texts/PrimaryText';
import MatchBookCard from './MatchBookCard';

const Match = ({ matchNum }) => {
  return (
    <View style={styles.matchCard}>
      <View style={styles.matchRow}>
        <PrimaryText text={`Match #${matchNum}`} />
        <View style={styles.matchRow}>
          <MatchesIconButton
            iconName="user"
            iconColor={colors.primary.dark}
            buttonColor={colors.white}
            handlePress={() => console.log('click the icon in the match!')}
          />
          <MatchesIconButton
            iconName="message-circle"
            iconColor={colors.primary.dark}
            buttonColor={colors.white}
            handlePress={() => console.log('click the icon in the match!')}
          />
          <MatchesIconButton
            iconName="more-vertical"
            iconColor={colors.primary.dark}
            buttonColor={colors.white}
            handlePress={() => console.log('click the icon in the match!')}
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
    padding: 20,
    backgroundColor: colors.white,
  },
  matchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Match;
