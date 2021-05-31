import React from 'react';
import IconButton from './IconButtons';

export const HeaderIconButton = ({
  iconName,
  iconColor,
  buttonColor,
  handlePress,
}) => {
  return (
    <IconButton
      iconSize="24"
      iconName={iconName}
      iconColor={iconColor}
      buttonColor={buttonColor}
      handlePress={handlePress}
    />
  );
};
