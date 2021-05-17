import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';

const SerifText = ({ text }) => {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
  });

  const fontFamily = {
    fontFamily: fontsLoaded ? 'PlayfairDisplay_400Regular' : null,
  };

  return <Text style={fontFamily}>{text}</Text>;
};

export default SerifText;
