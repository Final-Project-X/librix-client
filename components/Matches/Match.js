import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../../global/styles';
import { MatchesIconButton } from '../Buttons/IconButtons';
import PrimaryText from '../Texts/PrimaryText';
import MatchBookCard from './MatchBookCard';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const MatchMenuItem = ({ text, handlePress }) => {
  const [isActive, setIsActive] = useState(false);
  const selectMenuItem = () => {
    // handlePress();
    console.log('select menu item');
  };

  return (
    <TouchableHighlight
      style={styles.matchMenuItem}
      onPress={selectMenuItem}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
    >
      <PrimaryText text={text} customStyles={textStyles(isActive).text} />
    </TouchableHighlight>
  );
};

const MatchMenu = () => {
  return (
    <View style={styles.matchMenu}>
      <MatchMenuItem text="Reserve your book" />
      <MatchMenuItem text="Confirm the receipt" />
      <MatchMenuItem text="Delete this match" />
    </View>
  );
};

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

  // const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

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

          <Menu
            // style={{ borderRadius: 10 }}
            opened={isMenuOpen}
            onBackdropPress={() => setIsMenuOpen(false)}
          >
            <MenuTrigger>
              <MatchesIconButton
                iconName="more-vertical"
                iconColor={colors.primary.dark}
                buttonColor={colors.white}
                position="right"
                handlePress={onMoreIconPress}
              />
            </MenuTrigger>
            <MenuOptions customStyles={optionsStyles}>
              <MenuOption>
                <MatchMenuItem text="Reserve your book" />
              </MenuOption>
              <MenuOption>
                <MatchMenuItem text="Confirm the receipt" />
              </MenuOption>
              <MenuOption>
                <MatchMenuItem text="Delete this match" />
              </MenuOption>
            </MenuOptions>
          </Menu>

          {/* <MatchesIconButton
            iconName="more-vertical"
            iconColor={colors.primary.dark}
            buttonColor={colors.white}
            position="right"
            handlePress={onMoreIconPress}
          /> */}
        </View>
      </View>
      <View style={styles.matchRow}>
        {/* {isMenuOpen && <MatchMenu />} */}

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
  // matchMenuItem: {
  //   // padding: 10,
  //   borderRadius: 10,
  //   // padding: 0,
  // },
});

const optionsStyles = {
  optionsContainer: {
    borderRadius: 10,
    marginTop: 50,
  },
};

const textStyles = (isSelected) =>
  StyleSheet.create({
    text: {
      padding: 10,
      color: isSelected ? colors.primary.dark : colors.black,
      backgroundColor: isSelected ? colors.neutralBackground : colors.white,
    },
  });

export default Match;
