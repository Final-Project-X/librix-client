import React, { useState } from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { colors } from '../../global/styles';
import { MatchesIconButton } from '../Buttons/IconButtons/MatchesIconButton';
import PrimaryText from '../Texts/PrimaryText';

const MatchMenuItem = ({ text, handlePress, onItemSelect }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableHighlight
      onPress={onItemSelect}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
    >
      <PrimaryText text={text} customStyles={textStyles(isActive).text} />
    </TouchableHighlight>
  );
};

const MatchMenu = ({
  isMenuOpen,
  closeHandler,
  onMoreIconPress,
  alertSetters,
  onSetBookID,
}) => {
  const {
    setIsReserveModalShown,
    setIsReceiptModalShown,
    setIsDeleteModalShown,
  } = alertSetters;

  const selectReserve = () => {
    console.log('select reserve book menu item');
    // open modal:
    setIsReserveModalShown(true);
    // call the bookID setter,
    // so that the ID is accessible on the top level
    onSetBookID();
  };
  const selectReceipt = () => {
    console.log('select confirm receipt menu item');
    setIsReceiptModalShown(true);
    // set ID of the book that will be removed from the database
    // remove the book from the database
    // update user profile: +1 point
  };
  const selectDelete = () => {
    console.log('select delete match menu item');
    setIsDeleteModalShown(true);
  };

  return (
    <>
      <Menu opened={isMenuOpen} onBackdropPress={closeHandler}>
        <MenuTrigger>
          <MatchesIconButton
            iconSize={20}
            iconName="more-vertical"
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
