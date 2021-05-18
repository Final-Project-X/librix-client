import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import StackNavButton from '../../components/Buttons/StackNavButton';
import PrimaryText from '../../components/Texts/PrimaryText';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <PrimaryText text="Get rid of books you don't need anymore." />
        <PrimaryText text="Exchange them for the ones you would love to read." />
      </View>
      <View>
        <StackNavButton
          title="Log in"
          toComponent={'LogIn'}
          navigation={navigation}
        />
        <Text>or</Text>
        <StackNavButton
          title="Sign up"
          toComponent={'SignUp'}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
