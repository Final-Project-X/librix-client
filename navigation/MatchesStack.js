import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Matches from '../screens/MatchesScreen/Matches';
import { SafeAreaView, Text } from 'react-native';
import ScreenGradient from '../components/Gradients/ScreenGradient';
import { colors } from '../global/styles';
import OthersProfile from '../screens/MatchesScreen/OthersProfile';
import MainStackHeader from '../components/Headers/MainStackHeader';
import { useSelector } from 'react-redux';

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
  const user = useSelector((state) => state.user.user);
  return (
    <MatchesStack.Navigator>
      <MatchesStack.Screen
        name="Matches"
        component={Matches}
        options={{
          headerTitle: (props) => (
            <MainStackHeader
              drawerToggler={() => navigation.toggleDrawer()}
              avatar={user?.avatar}
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
