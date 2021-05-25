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

const MatchMenuItem = ({ text, handlePress, onItemSelect }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableHighlight
      // style={styles.matchMenuItem}
      onPress={onItemSelect}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
    >
      <PrimaryText text={text} customStyles={textStyles(isActive).text} />
    </TouchableHighlight>
  );
};

const MatchMenu = ({ isMenuOpen, closeHandler, onMoreIconPress }) => {
  const selectReserve = () => {
    console.log('select reserve book menu item');
    // open modal:
    // change the status of own book to 'reserved'
  };
  const selectReceipt = () => {
    // handlePress();
    console.log('select confirm receipt menu item');
  };
  const selectDelete = () => {
    // handlePress();
    console.log('select delete match menu item');
  };

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
            <MatchMenuItem
              onItemSelect={selectReserve}
              text="Reserve your book"
            />
          </MenuOption>
          <MenuOption>
            <MatchMenuItem
              onItemSelect={selectReceipt}
              text="Confirm the receipt"
            />
          </MenuOption>
          <MenuOption>
            <MatchMenuItem
              onItemSelect={selectDelete}
              text="Delete this match"
            />
          </MenuOption>
        </MenuOptions>
      </Menu>
    </>
  );
};

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
