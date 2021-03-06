import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const PrimaryBold = ({ text, customStyles, numberOfLines }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });

  const fontFamily = {
    fontFamily: fontsLoaded ? 'Montserrat_700Bold' : null,
  };

  return (
    <Text style={[fontFamily, customStyles]} numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export default PrimaryBold;
