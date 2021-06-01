import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Matches from '../screens/MatchesScreen/Matches';
import { SafeAreaView, Text, View } from 'react-native';
import ScreenGradient from '../components/Gradients/ScreenGradient';
import { HeaderIconButton } from '../components/Buttons/IconButtons/HeaderIconButton';
import { colors } from '../global/styles';
import PrimaryText from '../components/Texts/PrimaryText';

const MatchesStack = createStackNavigator();

const OtherUsersProfile = () => {
  return (
    <SafeAreaView>
      <ScreenGradient>
        <Text>Another User</Text>
      </ScreenGradient>
    </SafeAreaView>
  );
};
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
        name="OtherUsersProfile"
        component={OtherUsersProfile}
        options={{ title: 'Not your profile' }}
      />
      <MatchesStack.Screen
        name="Chat"
        component={Chat}
        options={{ title: 'Chat' }}
      />
    </MatchesStack.Navigator>
  );
};
