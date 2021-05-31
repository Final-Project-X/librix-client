import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LibrixTabBar from '../components/LibrixTabBar/LibrixTabBar';
import AddBookStack from './AddBookStack';
import { HeaderIconButton } from '../components/Buttons/IconButtons';
import ScreenGradient from '../components/Gradients/ScreenGradient';
import { colors } from '../global/styles';
import Matches from '../screens/MatchesScreen/Matches';
import BooksStack from './BooksStack';
import SavedBooksStack from './SavedBooksStack';
import { SavedBooksIconButton } from '../components/Buttons/IconButtons';

export const GradientMainScreen = ({
  screenText,
  children,
  toggleDrawer,
  handlePress,
}) => {
  return (
    <ScreenGradient>
      <SafeAreaView>
        <View>
          <HeaderIconButton
            iconName="user"
            iconColor={colors.white}
            buttonColor={colors.primary.dark}
            handlePress={toggleDrawer}
          />

          <Text>{screenText}</Text>

          {children}
        </View>
      </SafeAreaView>
    </ScreenGradient>
  );
};

const Messages = ({ navigation }) => (
  <GradientMainScreen
    screenText="Messages"
    toggleDrawer={() => navigation.toggleDrawer()}
  >
    <SavedBooksIconButton
      iconName={'trash'}
      iconSize={20}
      iconColor={colors.white}
      buttonColor={colors.secondary.dark}
      shadowOn={true}
      position={'left'}
      handlePress={() => {}}
    />
    <SavedBooksIconButton
      iconName={'heart'}
      iconSize={20}
      iconColor={colors.white}
      buttonColor={colors.primary.dark}
      shadowOn={true}
      handlePress={() => {}}
    />
    <SavedBooksIconButton
      iconName={'trash'}
      iconSize={20}
      iconColor={colors.white}
      buttonColor={colors.secondary.dark}
      position={'right'}
      handlePress={() => {}}
    />
    <SavedBooksIconButton
      iconName={'message-circle'}
      iconSize={20}
      iconColor={colors.white}
      buttonColor={colors.primary.dark}
      position={'left'}
      handlePress={() => {}}
    />
  </GradientMainScreen>
);

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <LibrixTabBar {...props} />}
      initialRouteName="Books"
    >
      <Tab.Screen name="Saved" component={SavedBooksStack} />
      <Tab.Screen name="Books" component={BooksStack} />
      <Tab.Screen name="Add book" component={AddBookStack} />
      <Tab.Screen name="Matches" component={Matches} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
