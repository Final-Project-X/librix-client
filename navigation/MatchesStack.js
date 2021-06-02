import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Matches from '../screens/MatchesScreen/Matches';
import { SafeAreaView, Text } from 'react-native';
import ScreenGradient from '../components/Gradients/ScreenGradient';
import { HeaderIconButton } from '../components/Buttons/IconButtons/HeaderIconButton';
import { colors } from '../global/styles';
import OthersProfile from '../screens/MatchesScreen/OthersProfile';

const MatchesStack = createStackNavigator();

const Chat = () => {
  return (
    <SafeAreaView>
      <ScreenGradient>
        <Text>Chat with someone</Text>
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default ({ navigation }) => {
  return (
    <MatchesStack.Navigator>
      <MatchesStack.Screen
        name="Matches"
        component={Matches}
        options={{
          headerTitle: (props) => (
            <HeaderIconButton
              iconName="user"
              iconColor={colors.white}
              buttonColor={colors.primary.dark}
              handlePress={() => navigation.toggleDrawer()}
            />
          ),
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: colors.neutralBackground,
          },
        }}
      />
      <MatchesStack.Screen
        name="OthersProfile"
        component={OthersProfile}
        options={{
          headerShown: false,
        }}
      />
      <MatchesStack.Screen
        name="Chat"
        component={Chat}
        options={{ title: 'Chat' }}
      />
    </MatchesStack.Navigator>
  );
};
