import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Montserrat_500Medium } from '@expo-google-fonts/montserrat';

const PrimaryMedium = ({ text, customStyles, numberOfLines }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
  });

  const fontFamily = {
    fontFamily: fontsLoaded ? 'Montserrat_500Medium' : null,
  };

  return (
    <Text style={[fontFamily, customStyles]} numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export default PrimaryMedium;
