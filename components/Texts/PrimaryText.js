import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';

const PrimaryText = ({ text }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  return <Text style={{ fontFamily: 'Montserrat_400Regular' }}>{text}</Text>;
};

export default PrimaryText;
