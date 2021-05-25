import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';

const SerifText = ({ text, customStyles, numberOfLines }) => {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
  });

  const fontFamily = {
    fontFamily: fontsLoaded ? 'PlayfairDisplay_400Regular' : null,
  };

  return (
    <Text style={[fontFamily, customStyles]} numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export default SerifText;
