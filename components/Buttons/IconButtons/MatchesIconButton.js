import React from 'react';
import IconButton from './IconButtons';

export const MatchesIconButton = ({
  iconName,
  iconColor,
  buttonColor,
  handlePress,
  position,
}) => {
  return (
    <IconButton
      iconSize="20"
      iconName={iconName}
      iconColor={iconColor}
      buttonColor={buttonColor}
      handlePress={handlePress}
      shadowOn={true}
      position={position}
    />
  );
};
