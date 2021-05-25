import React, { useState } from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { colors } from '../../global/styles';
import { MatchesIconButton } from '../Buttons/IconButtons';
import PrimaryText from '../Texts/PrimaryText';

const MatchMenuItem = ({ text, handlePress }) => {
  const [isActive, setIsActive] = useState(false);
  const selectMenuItem = () => {
    // handlePress();
    console.log('select menu item');
  };

  return (
    <TouchableHighlight
      // style={styles.matchMenuItem}
      onPress={selectMenuItem}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
    >
      <PrimaryText text={text} customStyles={textStyles(isActive).text} />
    </TouchableHighlight>
  );
};

const MatchMenu = ({ isMenuOpen, closeHandler, onMoreIconPress }) => {
  return (
    <>
      <Menu opened={isMenuOpen} onBackdropPress={closeHandler}>
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
    </>
  );
};

// const styles = StyleSheet.create({
//   matchCard: {
//     margin: 10,
//     paddingHorizontal: 10,
//     paddingTop: 10,
//     paddingBottom: 20,
//     backgroundColor: colors.white,
//     borderWidth: 1,
//     borderRadius: 20,
//   },
//   matchRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   matchHeader: {
//     fontSize: 24,
//   },
//   matchMenu: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     zIndex: 300,
//     backgroundColor: colors.white,
//     borderWidth: 1,
//     borderRadius: 10,
//   },
// });

const textStyles = (isSelected) =>
  StyleSheet.create({
    text: {
      padding: 10,
      color: isSelected ? colors.primary.dark : colors.black,
      backgroundColor: isSelected ? colors.neutralBackground : colors.white,
    },
  });

const optionsStyles = {
  optionsContainer: {
    borderRadius: 10,
    marginTop: 50,
  },
};

export default MatchMenu;
