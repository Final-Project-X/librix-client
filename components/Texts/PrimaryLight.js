import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Montserrat_300Light } from '@expo-google-fonts/montserrat';

const PrimaryLight = ({ text, customStyles, numberOfLines }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
  });

  const fontFamily = {
    fontFamily: fontsLoaded ? 'Montserrat_300Light' : null,
  };

  return (
    <Text style={[fontFamily, customStyles]} numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export default PrimaryLight;
