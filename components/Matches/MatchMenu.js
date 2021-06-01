import React, { useState } from 'react';
import { TouchableHighlight } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { MatchesIconButton } from '../Buttons/IconButtons/MatchesIconButton';
import PrimaryText from '../Texts/PrimaryText';
import { textStyles } from './styles';

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
  menuOpenSetter,
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
    // call the bookID setter to pass it to the top:
    onSetBookID();
    // close the menu:
    menuOpenSetter(false);
  };
  const selectReceipt = () => {
    console.log('select confirm receipt menu item');
    setIsReceiptModalShown(true);
    // set ID of the book that will be removed from both user's book and the DB
    // remove the book from the database
    // set ID of the match that will be removed from both user's matches and the DB
    // update user profile: +1 point
    menuOpenSetter(false);
  };
  const selectDelete = () => {
    console.log('select delete match menu item');
    setIsDeleteModalShown(true);
    menuOpenSetter(false);
  };

  return (
    <>
      <Menu opened={isMenuOpen} onBackdropPress={closeHandler}>
        <MenuTrigger>
          {/* <MatchesIconButton
            iconSize={20}
            iconName="more-vertical"
            position="right"
            handlePress={onMoreIconPress}
          /> */}
          <MatchesIconButton
            iconName="more-vertical"
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

const optionsStyles = {
  optionsContainer: {
    borderRadius: 10,
    marginTop: -50,
  },
};

export default MatchMenu;
