import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';

const PrimaryText = ({ text, customStyles, lines }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  const fontFamily = {
    fontFamily: fontsLoaded ? 'Montserrat_400Regular' : null,
  };

  return (
    <Text style={[fontFamily, customStyles]} numberOfLines={lines || 0}>
      {text}
    </Text>
  );
};

export default PrimaryText;
